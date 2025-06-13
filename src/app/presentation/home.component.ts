import { Component } from '@angular/core';
import { Note } from '../features/note.component';
import { NoteList } from '../features/note-list.component';

@Component({
  selector: 'app-home',
  imports: [NoteList, Note],
  template: `
  <div class="layout">
    <aside class="sidebar">
      <app-note-list></app-note-list>
    </aside>
    <main class="content">
      <app-note></app-note>
    </main>
  </div>
  `,
  styles: `
      .layout {
      display: flex;
      height: 100vh;
    }
  
    .sidebar {
      width: 350px;
      background-color: #181818;
      padding: 1rem;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
      overflow-y: auto;
    }

    .main {
      background-color: #1f1f1f;
    }
  
    .content {
      flex: 1;
      color: white;
      padding: 2rem;
      overflow-y: auto;
    }
    `
})
export default class Home {
   
   
}
