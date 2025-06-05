import { computed, inject, Injectable, signal } from '@angular/core';
import { Note } from '../model/note';
import { LocalestorageService } from './localestorage.service';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes = signal<Note[]>([]);
  

  localstorage = inject(LocalestorageService)

  selected = signal<Note | undefined>(undefined);

  updateStatus = signal<'none' | 'loading' | 'saved' | 'error'>('none');

  load() {
    const response = this.localstorage.load('notes')
    if (response.status !== 200) {
      this.notes.set([]);
      return;
    }
    
    let notes: Note[] = response.data;

    if (Array.isArray(notes)) {
      this.notes.set(notes);
      
      if (!this.notes().length) {
        this.addNotes()
      }
    }
    this.selectNote(null);
  }

  selectNote(id: number | null) {
    if (this.selected()?.isLocked) {
      this.updateNote('canSee', false, true)
    }
    this.selected.set(this.localstorage.getById('notes', 'selected-note', id).data)
  }

  addNotes() {
    const now = new Date();
    const newNote: Note = {
      id: now.getTime(),
      title: 'New note',
      content: 'Write...',
      lastModified: now,
      creationDate: now,
      isLocked: false,
      canSee: true,
      passward: undefined
    };

    const newValue = this.localstorage.save('notes', newNote).data
    if (newValue) {
      this.notes.update(notes => [...notes, newValue]);
      this.selectNote(newValue.id);
    }
  }

  search (element: any) {
    const filteredNotes = this.localstorage.getBy('notes', 'title', element.value).data
    this.notes.set(filteredNotes)
  }

  updateNote<K extends keyof Note>(prop: K, value: Note[K], silentUpdate: boolean = false) {
    const selectedNote = this.selected();
    if (!selectedNote) return;
    const updatedNote: Note = {
      ...selectedNote,
      [prop]: value,
      lastModified: new Date()
    };

    // this is just for fake the time to update 
    this.updateStatus.set('loading');
    setTimeout(() => {
      const response = this.localstorage.update('notes', updatedNote, silentUpdate)
      if (response.status !== 200) {
        this.updateStatus.set('error');
        return;
      }
      this.updateStatus.set('saved');
  
      const newValue = response.data
      
      this.notes.update(notes =>
        notes.map(note => note.id === newValue.id ? newValue : note)
      );
      this.selected.set(newValue)
    }, 1000);


  }

  updateAllNote (note: Note) {
    const newValue = this.localstorage.update('notes', note).data

    this.notes.update(notes =>
      notes.map(note => note.id === newValue.id ? newValue : note)
    );
    this.selected.set(newValue)
  }

  deleteNote(noteToRemove: Note) {
    this.localstorage.delete('notes', noteToRemove.id)
    this.notes.update(notes => notes.filter(note => note.id !== noteToRemove.id));
    this.selectNote(null);
  }

}
