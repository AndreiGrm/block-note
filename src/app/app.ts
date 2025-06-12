import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { NotesService } from './services/notes.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule],
  template: `
    <p-toast></p-toast>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected title = 'block-note';
  notesService = inject(NotesService);
   @HostListener('document:keydown.escape', ['$event'])
    onEscapeKey(event: Event) {
    if (event instanceof KeyboardEvent && this.notesService.selected!== undefined) {
          this.notesService.selected.set(undefined);
    }
  }
}
