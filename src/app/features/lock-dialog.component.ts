import { Component, EventEmitter, inject, input, Input, model, Output } from '@angular/core';
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
    <p-dialog
      header="Manage note"
      [(visible)]="visible"
      [modal]="true"
      [contentStyle]="{ padding: '1.5rem' }"
    >
      <!-- Sezione PIN -->
      <div class="p-fluid mb-4">
        <div class="field">
          <label for="pin" class="font-semibold mb-2 block text-sm text-gray-700">PIN</label>
          <input
            [(ngModel)]="pin"
            type="number"
            pInputText
            id="pin"
            class="p-inputtext-sm "
            placeholder="Insert the PIN"
            autocomplete="off"
          />
        </div>
      </div>

      <!-- Sezione bottoni -->
      <div class="flex flex-wrap justify-end gap-2 pt-3 border-top-1 border-gray-200">
        <p-button
          label="Cancel"
          severity="secondary"
          icon="pi pi-times"
          (click)="toggleDialog()"
        />
        
        @if (!notesService.selected()?.isLocked) {
          <p-button
            label="Lock"
            icon="pi pi-lock"
            (click)="lockEvent('lock')"
          />
        }

        <p-button
          label="Unlock"
          icon="pi pi-lock-open"
          (click)="lockEvent('unlock')"
        />

        <p-button
          label="Show"
          icon="pi pi-eye"
          (click)="lockEvent('show')"
        />

        <p-button
          severity="danger"
          label="Delete"
          icon="pi pi-trash"
          (click)="lockEvent('delete')"
        />
      </div>
    </p-dialog>`,
  styles: []
})
export class LockDialogComponent {
  notesService = inject(NotesService);
  pin: number | undefined


  visible = model<boolean>(false);


  toggleDialog () {
    this.visible.set(!this.visible());
  }

  lockEvent (event: 'lock' | 'unlock' | 'show' | 'delete') {
    let newNote
    const selected = this.notesService.selected();
    switch (event) {
      case 'lock':
        if (this.pin && selected) {
          newNote = {
            ...selected,
            password: this.pin,
            isLocked: true
          }
          this.notesService.updateAllNote(newNote)
        }
        break;
      case 'unlock':
        if(this.haveAuth() && selected) {
          newNote = {
            ...selected,
            password: undefined,
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
    if (this.haveAuth()) {
      this.toggleDialog()
    }
    this.pin = undefined
  }

  haveAuth () {
    return this.pin === this.notesService.selected()?.password
  }

}
