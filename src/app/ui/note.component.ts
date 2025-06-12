import { Component, computed, effect, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { NotesService } from '../services/notes.service';
import { DeselectBadgeComponent } from './deselect-badge.component';
import { NoteLockedComponent } from './note-locked.component';
import { NoNoteSelectedComponent } from './no-note-selected.component';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    InputTextModule,
    TextareaModule,
    FormsModule,
    DeselectBadgeComponent,
    NoteLockedComponent,
  NoNoteSelectedComponent
  ],
  template: `
    @if (!notesService.selected()) {
      <app-no-note-selected></app-no-note-selected>
    }
    @else if (notesService.selected()?.canSee) {
      <div style="color: white;" class="flex flex-col gap-4">
        <div class="flex justify-between">
          <div>Selected:</div>
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
        <div class="flex justify-between items-center">
          <strong>Title:</strong>
          <span class="text-gray-500">{{ title.length }}/64 characters</span>
        </div>
        <input
          type="text"
          pInputText
          [(ngModel)]="title"
          (blur)="onBlurTitle()"
          maxlength="64"
        />
        <div class="flex flex-col">
          <strong>Content:</strong>
          <textarea
            rows="5"
            cols="30"
            pTextarea
            [(ngModel)]="content"
            (blur)="onBlurContent()"
            maxlength="2000"
          ></textarea>
          <span class="text-gray-500 self-end-safe">{{ content.length }}/2000 characters</span>
        </div>
      </div>
      <app-deselect-badge></app-deselect-badge>
    } @else {
      <app-note-locked class="flex inset-0 flex items-center justify-center pointer-events-none"></app-note-locked>
      
      <app-deselect-badge></app-deselect-badge>
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
      if (this.title.length > 5) {
        console.log('nop');
      }
      this.notesService.updateNote({title: this.title}, true);
    }
  }

  onBlurContent() {
    if (this.selectedNote()) {
      this.notesService.updateNote({content: this.content}, true);
    }
  }
}
