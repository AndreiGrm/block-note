import { Component, computed, effect, inject } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    InputTextModule,
    TextareaModule,
    FormsModule,
  ],
  template: `
    @if(notesService.selected()?.canSee) {
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
    } @else {
      <div>Note is locked</div>
    }
  `,
  styles: []
})
export class Note {
  notesService = inject(NotesService);

  selectedNote = computed(() => this.notesService.selected());

  title: string = '';
  content: string = '';

  constructor() {
    effect(() => {
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
