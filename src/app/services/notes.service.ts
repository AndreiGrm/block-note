import { computed, Injectable, signal } from '@angular/core';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes = signal<Note[]>([])

  selectedNote = signal<Number | undefined>(undefined)

  selected = computed(() => this.notes().find((n) => {
    if (this.selectedNote) {
      return n.id === this.selectedNote()
    }
    return undefined
  }))

  load() {
    let storageNotes = localStorage.getItem('notes') || '[]'

    let notesParsed: Note[] = JSON.parse(storageNotes)

    if (Array.isArray(notesParsed)) {
      this.notes.set(notesParsed)
    } else {
      this.notes.set([])
    }
    
  }

  viewNote (id: number | null) {
    if (id) {
      this.selectedNote.set(id)
      localStorage.setItem('selected-note', id.toString());
    } else {
      let lastSelected = localStorage.getItem('selected-not')
      if (lastSelected) {
        this.selectedNote.set(Number(lastSelected))
        localStorage.setItem('selected-note', lastSelected);
      }
    }
    
  }

  addNotes () {
    let now = new Date()
    let newNote: Note = {
      id: now.getTime(),
      title: 'New note',
      content: 'Write...',
      lastModified: now,
      creationDate: now,
      isLocked: false,
      passward: ''
    }

    this.notes.update(notes => [...notes, newNote])
    
    localStorage.setItem('notes', JSON.stringify(this.notes()));
  }

  deleteNote(event: MouseEvent, noteToRemove: Note) {
    event.stopPropagation();
    this.notes.update(notes => notes.filter(note => note.id !== noteToRemove.id))
    localStorage.setItem('notes', JSON.stringify(this.notes()));
  }
}
