import { Component, EventEmitter, inject, input, Input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-lock-dialog',
  standalone: true,
  imports: [
    InputTextModule,
    TextareaModule,
    ButtonModule,
    DialogModule,
    FormsModule
  ],
  template: `
    <p-dialog [(visible)]="visible" [modal]="true" [style]="{ width: '25rem' }" (onHide)="onDialogHide()">
      <span class="p-text-secondary block mb-8">Insert pin.</span>
      
      <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Pin</label>
        <input [(ngModel)]="pin" type="number" pInputText id="username" class="flex-auto" autocomplete="off" />
      </div>
      
      
      <div class="flex justify-end gap-2">
        <p-button label="Cancel" severity="secondary" (click)="toggleDialog()" />
        @if (!notesService.selected()?.isLocked) {
          <p-button label="Lock" (click)="lockEvent('lock')" />
        }
        <p-button label="Unlock" (click)="lockEvent('unlock')" />
        <p-button label="Show" (click)="lockEvent('show')" />
        <p-button severity="danger" label="Delete" (click)="lockEvent('delete')" />
      </div>
    </p-dialog>
  `,
  styles: []
})
export class LockDialog {
  notesService = inject(NotesService);
  pin: number | undefined
  @Input() locked: boolean | undefined = false;
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  toggleDialog () {
    this.visibleChange.emit(!this.visible);
  }

  lockEvent (event: string) {
    let newNote
    const selected = this.notesService.selected();
    switch (event) {
      case 'lock':
        if (this.pin && selected) {
          newNote = {
            ...selected,
            passward: this.pin,
            isLocked: true
          }
          this.notesService.updateAllNote(newNote)
        }
        break;
      case 'unlock':
        if(this.haveAuth() && selected) {
          newNote = {
            ...selected,
            passward: undefined,
            isLocked: false,
            canSee: true
          }
          this.notesService.updateAllNote(newNote)
        }
        break;
      case 'show':
        if (this.haveAuth() && selected) {
          newNote = {
            ...selected,
            canSee: true
          }
          this.notesService.updateAllNote(newNote)
        }
        break;
      case 'delete':
        if (this.haveAuth() && selected) {
          this.notesService.deleteNote(selected);
        }
        break;
    
      default:
        break;
    }
    this.pin = undefined
    if (this.haveAuth()) {
      this.toggleDialog()
    }
  }

  haveAuth () {
    return this.pin === this.notesService.selected()?.passward
  }

  onDialogHide () {
    this.visibleChange.emit(false);
  }
}
