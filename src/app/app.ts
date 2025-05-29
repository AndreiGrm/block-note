import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <router-outlet />
  `,
  styles: [],
})
export class App implements OnInit {
  protected title = 'block-note';
  ngOnInit(): void {
    let notesJson = localStorage.getItem('notes');

    if (notesJson === null || notesJson === undefined || notesJson === 'undefined') {
      
      localStorage.setItem('notes', '[]')
    }
    
  }
}
