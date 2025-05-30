import { Component, inject, OnInit, signal } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../services/notes.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-note-list',
  imports: [
    SidebarModule,
    CardModule,
    MenuModule,
    ButtonModule,
    PanelMenuModule,
    InputTextModule,
    DatePipe
  ],
  template: `
        <div class="w-full mb-6">
          <p-button (click)="notesService.addNotes()" fluid>+ Add note</p-button>
        </div>
        <div class="card flex justify-center mb-6">
          <input
            type="text"
            pInputText
            placeholder="Small"
            fluid
            variant="filled"
            pSize="large"/>
        </div>
        @for (note of notesService.notes(); track note.id) {
          <div class="mb-6">
            <p-card
              (click)="notesService.selectNote(note.id)"
              [style]="{ 'background-color': '#121212', 'color': '#ffffff' }">
              <div class="flex">
                  <p class="m-0 flex-5">
                      {{ note.title}} <br>
                      {{ note.lastModified | date: 'dd/MM/yy HH:mm' }}
                  </p>
  
                  <div class="flex-1 flex flex-col">
                    <button
                      class="p-1 text-white bg-red-600 rounded hover:bg-red-700"
                      (click)="notesService.deleteNote($event, note)"
                      title="Elimina"
                    >
                    Del
                      <i class="pi pi-trash"></i>
                    </button>
                    <button
                      class="p-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                      title="Blocca/Sblocca"
                    >
                      Lock
                      <i class="pi" ></i>
                    </button>
                  </div>
                </div>
            </p-card>
          </div>
        }


  `,
  styles: `

  `
})
export class NoteList implements OnInit {
  visible: boolean = false;
  notesService = inject(NotesService)
  ngOnInit(): void {
     this.notesService.load()
  }
  logout() {
    console.log('Logout');
  }
}
