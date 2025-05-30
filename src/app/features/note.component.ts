import { Component, computed, effect, inject } from '@angular/core';
import { Note as NoteModel } from '../model/note';
import { NotesService } from '../services/notes.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    InputTextModule,
    TextareaModule,
    FormsModule
  ],
  template: `
    <div style="color: white;" class="flex flex-col gap-4">
      <div>Selezionata: {{ selectedNote()?.title || 'Nessuna nota selezionata' }}</div>

      <input
        type="text"
        pInputText
        [(ngModel)]="title"
        (blur)="onBlurTitle()"
      />

      <textarea
        rows="5"
        cols="30"
        pTextarea
        [(ngModel)]="content"
        (blur)="onBlurContent()"
      ></textarea>
    </div>
  `,
  styles: []
})
export class Note {
  notesService = inject(NotesService);

  // computed reactive per la nota selezionata
  selectedNote = computed(() => this.notesService.selected());

  // proprietà locali per bindare gli input
  title: string = '';
  content: string = '';

  constructor() {
    // Sincronizzo i valori locali quando cambia selectedNote
    effect(() => {
      console.log(111);
      
      const note = this.selectedNote();
      this.title = note?.title || '';
      this.content = note?.content || '';
    });
  }

  onBlurTitle() {
    if (this.selectedNote()) {
      this.notesService.updateNote('title', this.title);
    }
  }

  onBlurContent() {
    if (this.selectedNote()) {
      this.notesService.updateNote('content', this.content);
    }
  }
}
