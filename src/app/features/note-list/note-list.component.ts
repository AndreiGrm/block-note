import { Component, inject, OnInit, signal } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { NotesService } from '../../services/notes.service';
import { DatePipe } from '@angular/common';
import { LockDialog } from '../lock-dialog.component';
import { DeleteConfirmation } from '../../ui/delete-confirmation.component';




@Component({
  selector: 'app-note-list',
  imports: [
    SidebarModule,
    CardModule,
    MenuModule,
    ButtonModule,
    PanelMenuModule,
    InputTextModule,
    DatePipe,
    LockDialog,
    DeleteConfirmation
],
  template: `
        <div class="w-full mb-6">
          <p-button (click)="notesService.addNotes()" fluid>+ Add note</p-button>
        </div>
        <div class="card flex justify-center mb-6">
          <input
            type="text"
            pInputText
            placeholder="Search..."
            fluid
            variant="filled"
            (keyup)="notesService.search($event.target)"
            pSize="large"/>
        </div>
        @for (note of notesService.notes(); track note.id) {
          <div class="mb-6">
            <p-card
              (click)="notesService.selectNote(note.id)"
              [style]="{
                'background-color': '#121212',
                'color': '#ffffff',
                'border' : notesService.selected()?.id === note.id ? 'solid 1px #34d399' : ''
                }">
              <div class="flex">
                  <div class="m-0 flex-5 truncate">
                      <p class="truncate">
                      {{ note.title}}
                      </p>
                      <span class="text-gray-500 italic" >{{ note.lastModified | date: 'dd/MM/yy HH:mm' }}</span>
                  </div>
  
                  <div class="flex-1 flex flex-col">
                    @if (!note.isLocked) {
                      <p-button
                        severity="danger"
                        (click)="deleteDialog = true"
                        title="Elimina"
                      >
                        <i class="pi pi-trash" title="Elimina"></i>
                      </p-button>
                    }
                    <p-button
                      severity="info"
                      (click)="visible = true"
                      title="Blocca/Sblocca"
                    >
                      <i class="pi pi-cog" ></i>
                    </p-button>
                  </div>
                </div>
            </p-card>
          </div>
        }
        <app-lock-dialog [(visible)]="visible" />
        <app-delete-confirmation [(visible)]="deleteDialog" />
  `,
  styles: `

  `
})
export class NoteList implements OnInit {
  visible: boolean = false;
  deleteDialog: boolean = false;
  notesService = inject(NotesService)
  ngOnInit(): void {
     this.notesService.load()
  }
}
