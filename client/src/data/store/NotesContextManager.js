// View.
import { Bind, ContextManager } from 'dreamstate';

// Data
import { NotesService } from '@Data/services';

// Utils.
import { Logger } from '@Data/utils';

export class NotesContextManager extends ContextManager {

  context = {
    notesActions: {
      createNoteItem: this.createNoteItem,
      removeNoteItemById: this.removeNoteItemById
    },
    notesState: {
      noteItems: [],
      connected: false
    }
  };

  setState = ContextManager.getSetter(this, 'notesState');

  notesService = new NotesService();
  log = new Logger('[NOTES]');

  @Bind()
  createNoteItem(noteItem) {

    const { noteItems } = this.context.notesState;

    this.setState({
      noteItems: [ ...noteItems, noteItem ]
    });

    this.notesService.save(noteItem);

  }

  @Bind()
  removeNoteItemById(id) {

    const { noteItems } = this.context.notesState;

    this.setState({
      noteItems: noteItems.filter(noteItem => noteItem.id !== id)
    });

    this.notesService.removeById(id);

  }

  @Bind()
  connectToDatabase() {
    this.log.info('Connected');
  }

  @Bind()
  disconnectFromDatabase() {
    this.log.info('Disconnected');
  }

}
