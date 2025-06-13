import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { NoDataFoundComponent } from '../ui/no-data-found.component';
import { DeleteConfirmationComponent } from '../ui/delete-confirmation.component';
import { LockDialogComponent } from './lock-dialog.component';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { NotesService } from '../services/notes.service';
import { DatePipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

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
    LockDialogComponent,
    DeleteConfirmationComponent,
    NoDataFoundComponent,
    ReactiveFormsModule
],
  template: `
        <div class="w-full mb-6">
          <p-button (click)="notesService.addNotes()" fluid>+ Add note</p-button>
        </div>
        <div class="card flex justify-center mb-6">
          <input
            [formControl]="searchInput"
            type="text"
            pInputText
            placeholder="Search..."
            fluid
            variant="filled"
            pSize="large"/>
        </div>
        @if (notesService.notes().length === 0) {
          <app-no-data-found></app-no-data-found>
        } @else {
          @for (note of notesService.notes(); track note.id) {
            <div class="mb-6">
              <p-card
                (click)="notesService.selectNote(note.id)"
                [style]="{
                  'background-color': '#121212',
                  'color': '#ffffff',
                  'border' : notesService.selected()?.id === note.id ? 'solid 1px #34d399' : ''
                  }">
                <div class="flex items-center">
                    <div class="m-0 flex-5 truncate">
                        <p class="truncate">
                        {{ note.title}}
                        </p>
                        <span class="text-gray-500 italic" >{{ note.lastModified | date: 'dd/MM/yy HH:mm' }}</span>
                    </div>
    
                    <div class="flex-1 flex gap-1 ">
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
         }
        <app-lock-dialog [(visible)]="visible" />

        <app-delete-confirmation
          [(visible)]="deleteDialog"
          (delete)="deleteNote()"
        />
  `,
  styles: `

  `
})
export class NoteList implements OnInit {

  searchInput = new FormControl('');

  visible: boolean = false;

  notesService = inject(NotesService)

  deleteDialog: boolean = false;
  
  ngOnInit(): void {
    this.notesService.load()
  }

  constructor() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((text) => {
        if(text) {
          this.notesService.search(text)
        }
      });;
  }
  
  deleteNote () {
    const note = this.notesService.selected()
    if (note){
      this.notesService.deleteNote(note)
    }
    this.deleteDialog = false;
  }
}
