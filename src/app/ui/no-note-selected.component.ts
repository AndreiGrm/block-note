import { Component } from '@angular/core';

@Component({
  selector: 'app-no-note-selected',
  standalone: true,
  template: `
    <div class="flex justify-center items-center h-full w-full">
      <div class="text-2xl text-gray-400 font-semibold tracking-wide">
        No note selected
      </div>
    </div>
  `,
  styles: []
})
export class NoNoteSelectedComponent {}