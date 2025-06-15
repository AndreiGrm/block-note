import { Component, computed, effect, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { NotesService } from '../services/notes.service';
import { DeselectBadgeComponent } from '../ui/deselect-badge.component';
import { NoteLockedComponent } from '../ui/note-locked.component';
import { NoNoteSelectedComponent } from '../ui/no-note-selected.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    InputTextModule,
    TextareaModule,
    FormsModule,
    DeselectBadgeComponent,
    NoteLockedComponent,
    ReactiveFormsModule,
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
        <form [formGroup]="form">
          <div class="flex justify-between items-center">
            <strong>Title:</strong>
            <span class="text-gray-500">
              {{ form.get('title')?.value?.length || 0 }}/64 characters
            </span>
          </div>
          <input
            type="text"
            pInputText
            formControlName="title"
          />

          <div class="flex flex-col">
            <strong>Content:</strong>
            <textarea
              rows="5"
              placeholder="Write your note here..."
              cols="30"
              pTextarea
              formControlName="content"
            ></textarea>
            <span class="text-gray-500 self-end-safe">
              {{ form.get('content')?.value?.length || 0 }}/2000 characters
            </span>
          </div>
        </form>
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

  private fb = inject(FormBuilder).nonNullable;

  form = this.fb.group({
    title:  ['', [Validators.maxLength(64)]],
    content: ['', [Validators.maxLength(2000)]],
  }, { updateOn: 'blur'})


  constructor() {
    effect(() => {
      const note = this.selectedNote();
      if (note) {
        this.form.patchValue({
          title: note.title ?? '',
          content: note.content ?? '',
        }, { emitEvent: false });
      }
    });

    this.form.valueChanges
      .subscribe((res) => {
        if (this.form.valid) {
          this.notesService.updateNote(res, true);
        }
      });
  }
}
