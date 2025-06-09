import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';


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

   @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: Event) {
    if (event instanceof KeyboardEvent) {
          console.log('ESC premuto!');
    }

    // es: this.dialogService.closeAll();
  }
}
