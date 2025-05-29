import { Component, input } from '@angular/core';
import { Note as NoteModel } from '../model/note';

@Component({
  selector: 'app-note',
  imports: [],
  template: `
    <p style="color: white;">
      {{ noteSelected()?.id }}
    </p>
  `,
  styles: ``
})
export class Note {
  noteSelected = input<NoteModel | undefined>()
}
