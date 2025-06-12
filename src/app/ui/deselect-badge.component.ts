import { Component } from '@angular/core';

@Component({
  selector: 'app-deselect-badge',
  standalone: true,
  imports: [],
  template: `
      <div 
        class="fixed bottom-8 left-1/2 bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold "
        style="pointer-events: none;"
      >
        Press <kbd class="bg-white text-gray-600 px-1 rounded font-mono border">ESC</kbd> to deselect the note
      </div>
  `,
  styles: []
})
export class DeselectBadgeComponent {
}
