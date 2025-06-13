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
    const response = this.localstorage.load<Note>('notes')
    if (response.status !== 200 || !('data' in response)) {
      this.notes.set([]);
      return;
    }
    
    let notes: Note[] = response.data;


      this.notes.set(notes);
      
      if (!this.notes().length) {
        this.addNotes()
      }

    this.selectNote(null);
  }

  selectNote(id: number | null) {
    if (this.selected()?.isLocked) {
       this.ghostUpdate({canSee: false})
    }
    const response = this.localstorage.getById<Note>('notes', 'selected-note', id)

    if (response.status !== 200 || !('data' in response)) {
      return;
    }

    this.selected.set(response.data)
  }

  ghostUpdate(value: Partial<Note>) {
    const selectedNote = this.selected();
    if (!selectedNote) return;
    const updatedNote: Note = {
      ...selectedNote,
      ...value,
    };
    const response = this.localstorage.update<Note>('notes', updatedNote, true)
    if (response.status !== 200 || !('data' in response)) {
      return;
    }

    const newValue = response.data
    
    this.notes.update(notes =>
      notes.map(note => note.id === newValue.id ? newValue : note)
    );
    this.selected.set(newValue)
  }

  addNotes() {
    const now = new Date();
    const newNote: Note = {
      id: now.getTime(),
      title: 'New note',
      content: '',
      lastModified: now,
      creationDate: now,
      isLocked: false,
      canSee: true,
      password: undefined
    };

    const response = this.localstorage.save<Note>('notes', newNote)

    if (response.status !== 200 || !('data' in response)) {
      return;
    }

    const newValue = response.data

    if (newValue) {
      this.notes.update(notes => [...notes, newValue]);
      this.selectNote(newValue.id);
    }
  }

  search (element: string) {

    const response = this.localstorage.getBy<Note>('notes', 'title', element)

    if (response.status !== 200 || !('data' in response)) {
      return;
    }

    const filteredNotes = response.data

    this.notes.set(filteredNotes)
  }

  updateNote(value: Partial<Note>, silentUpdate: boolean = false) {
    const selectedNote = this.selected();
    if (!selectedNote) return;
    const updatedNote: Note = {
      ...selectedNote,
      ...value,
      lastModified: new Date()
    };

    // this is just for fake the time to update 
    this.updateStatus.set('loading');
    setTimeout(() => {
      const response = this.localstorage.update<Note>('notes', updatedNote, silentUpdate)
      if (response.status !== 200 || !('data' in response)) {
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
    const response = this.localstorage.update<Note>('notes', note)

    if (response.status !== 200 || !('data' in response)) {
      this.updateStatus.set('error');
      return;
    }

    const newValue = response.data

    this.notes.update(notes =>
      notes.map(note => note.id === newValue.id ? newValue : note)
    );
    this.selected.set(newValue)
  }

  deleteNote(noteToRemove: Note) {
    const response = this.localstorage.delete<Note>('notes', noteToRemove.id)

    if (response.status !== 200 || !('data' in response)) {
      return;
    }

    this.notes.update(notes => notes.filter(note => note.id !== noteToRemove.id));
    this.selectNote(null);
  }

}
