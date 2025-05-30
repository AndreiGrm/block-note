import { computed, Injectable, signal } from '@angular/core';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes = signal<Note[]>([]);

  selectedNote = signal<number | undefined>(undefined);

  selected = computed(() => {
    const id = this.selectedNote();
    if (id === undefined) return undefined;
    return this.notes().find(n => n.id === id);
  });

  load() {
    let notesJson = localStorage.getItem('notes');

    if (!notesJson) {
      localStorage.setItem('notes', '[]');
      this.addNotes();
      return;
    }

    const notesParsed: Note[] = JSON.parse(notesJson);

    if (Array.isArray(notesParsed)) {
      this.notes.set(notesParsed);
    }
    this.selectNote(null);
  }

  selectNote(id: number | null) {
    if (!id) {
      const lastSelected = localStorage.getItem('selected-note');
      if (lastSelected) {
        this.selectedNote.set(Number(lastSelected))
        localStorage.setItem('selected-note', lastSelected);
      }
    } else {
      this.selectedNote.set(id)
      localStorage.setItem('selected-note', id.toString());
    }
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
      passward: ''
    };

    this.notes.update(notes => [...notes, newNote]);
    localStorage.setItem('notes', JSON.stringify(this.notes()));
    this.selectNote(newNote.id);
  }

  updateNote<K extends keyof Note>(prop: K, value: Note[K]) {
    const selectedNote = this.selected();
    if (!selectedNote) return;

    const updatedNote: Note = {
      ...selectedNote,
      [prop]: value,
      lastModified: new Date()
    };

    this.notes.update(notes =>
      notes.map(note => note.id === updatedNote.id ? updatedNote : note)
    );

    localStorage.setItem('notes', JSON.stringify(this.notes()));
  }

  deleteNote(event: MouseEvent, noteToRemove: Note) {
    event.stopPropagation();
    this.notes.update(notes => notes.filter(note => note.id !== noteToRemove.id));
    localStorage.setItem('notes', JSON.stringify(this.notes()));
  }

  lockNote(note: Note) {
    console.log('lock');
  }
}
