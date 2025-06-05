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
    FormsModule
  ],
  template: `
    @if (!notesService.selected()) {
      <div class="flex justify-center items-center h-full">
        <div class="text-2xl text-gray-500">No note selected</div>
      </div>
    }
    @else if (notesService.selected()?.canSee) {
      <div style="color: white;" class="flex flex-col gap-4">
        <div class="flex justify-between">
          <div>Selezionata: {{ selectedNote()?.title }}</div>
          @switch (notesService.updateStatus()) {
            @case('loading') {
              <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
            }
            @case('saved') {
              <i class="pi pi-check" style="font-size: 2rem; color: green"></i>
            }
            @case('error') {
              <i class="pi pi-times" style="font-size: 2rem; color: red"></i>
            }
            @case('none') {
            }
          }
        </div>
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
      this.notesService.updateNote({title: this.title}, true);
    }
  }

  onBlurContent() {
    if (this.selectedNote()) {
      this.notesService.updateNote({content: this.content}, true);
    }
  }
}
