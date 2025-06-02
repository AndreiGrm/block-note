import { Component, EventEmitter, inject, input, Input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog'; // corretto: "DialogModule" e non "Dialog"
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-delete-confirmation',
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
      <span class="p-text-secondary block mb-8">Confirm deletion.</span>
      
      
      <div class="flex justify-end gap-2">
        <p-button label="Cancel" severity="secondary" (click)="toggleDialog()" />

        <p-button severity="danger" label="Confirm" (click)="onDelete()" />
      </div>
    </p-dialog>
  `,
  styles: []
})
export class DeleteConfirmation {
  notesService = inject(NotesService);
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  toggleDialog () {
    this.visibleChange.emit(!this.visible);
  }
  onDialogHide () {
    this.visibleChange.emit(false); // Se chiuso con ESC o clic fuori
  }

  onDelete () {
    const note = this.notesService.selected()
    if (note){
      this.notesService.deleteNote(note)
    }
    this.toggleDialog()
  }


}
