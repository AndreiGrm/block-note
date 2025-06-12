import { Component } from '@angular/core';

@Component({
  selector: 'app-note-locked',
  standalone: true,
  template: `
    <div class="text-white px-8 py-4 rounded-2xl shadow-lg text-2xl font-bold flex items-center gap-3">
      <i class="pi pi-lock text-3xl"></i>
      Note is locked
    </div>
  `,
  styles: []
})
export class NoteLockedComponent {}