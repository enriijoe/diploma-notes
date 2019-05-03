// View.
import { Bind, ContextManager } from 'dreamstate';

// Data
import { NotesService } from '@Data/services';
import { authContextManager } from '@Data/store';

// Utils.
import { Logger } from '@Data/utils';

export class NotesContextManager extends ContextManager {

  context = {
    notesActions: {
      createNoteItem: this.createNoteItem,
      removeNoteItemById: this.removeNoteItemById,
      connectToDatabase: this.connectToDatabase,
      disconnectFromDatabase: this.disconnectFromDatabase
    },
    notesState: {
      noteItems: [],
      connected: false
    }
  };

  setState = ContextManager.getSetter(this, 'notesState');

  notesService = new NotesService();
  log = new Logger('[NOTES]');

  disconnectCallback = null;

  @Bind()
  createNoteItem(noteItem) {

    const { user } = authContextManager.context.authState;

    this.notesService.save(user.uid, noteItem);
  }

  @Bind()
  removeNoteItemById(id) {

    const { user } = authContextManager.context.authState;

    this.notesService.removeById(user.uid, id);
  }

  @Bind()
  connectToDatabase() {

    const { user } = authContextManager.context.authState;

    this.disconnectCallback = this.notesService.subscribeToNotes((user && user.uid) || localStorage.getItem('uid'), this.onNotesChanged);

    this.log.info('Connecting...');
  }

  @Bind()
  disconnectFromDatabase() {

    if (this.disconnectCallback) {
      this.disconnectCallback();
    }

    this.setState({ connected: false });

    this.log.info('Disconnected...');
  }

  @Bind()
  onNotesChanged(snapshot) {

    if (snapshot) {

      const value = snapshot.val();
      const items = [];

      for (const it in value) {
        items.push(value[it]);
      }

      items.sort((first, second) => second.createdAt - first.createdAt);

      this.setState({
        connected: true,
        noteItems: items
      });

    } else {

      this.setState({
        connected: false,
        noteItems: []
      })
    }

  }

}
