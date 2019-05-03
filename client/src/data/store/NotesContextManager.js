// View.
import { Bind, ContextManager } from 'dreamstate';

// Data
import { NotesService, TagsService } from '@Data/services';
import { authContextManager } from '@Data/store';

// Utils.
import { Logger } from '@Data/utils';

export class NotesContextManager extends ContextManager {

  context = {
    notesActions: {
      createNoteItem: this.createNoteItem,
      removeNoteItemById: this.removeNoteItemById,
      connectToDatabase: this.connectToDatabase,
      disconnectFromDatabase: this.disconnectFromDatabase,
      updateNoteItemById: this.updateNoteItemById,
      createTagItem: this.createTagItem,
      removeTag: this.removeTag
    },
    notesState: {
      noteItems: [],
      tags: [],
      connected: false
    }
  };

  setState = ContextManager.getSetter(this, 'notesState');

  notesService = new NotesService();
  tagsService = new TagsService();

  log = new Logger('[NOTES]');

  disconnectNotesCallback = null;
  disconnectTagsCallback = null;

  @Bind()
  createTagItem(item) {

    const { user } = authContextManager.context.authState;
    const { tags } = this.context.notesState;

    this.tagsService.set(user.uid, tags.concat(item));
  }

  @Bind()
  removeTag(item) {

    const { user } = authContextManager.context.authState;
    const { tags, noteItems } = this.context.notesState;

    this.tagsService.set(user.uid, tags.filter((it) => it !== item));

    for (const note of noteItems) {

      if (note.tags && note.tags.includes(item)) {
        note.tags = note.tags.filter((tag) => tag !== item);
        this.notesService.updateById(user.uid, note.id, note);
      }
    }
  }

  @Bind()
  createNoteItem(item) {

    const { user } = authContextManager.context.authState;

    this.notesService.save(user.uid, item);
  }

  @Bind()
  removeNoteItemById(id) {

    const { user } = authContextManager.context.authState;

    this.notesService.removeById(user.uid, id);
  }

  @Bind()
  updateNoteItemById(id, item) {

    const { user } = authContextManager.context.authState;

    this.notesService.updateById(user.uid, id, item);
  }

  @Bind()
  connectToDatabase() {

    const { user } = authContextManager.context.authState;

    this.disconnectNotesCallback = this.notesService.subscribeToNotes((user && user.uid) || localStorage.getItem('uid'), this.onNotesChanged);
    this.disconnectTagsCallback = this.tagsService.subscribeToTags((user && user.uid) || localStorage.getItem('uid'), this.onTagsChanged);

    this.log.info('Connecting...');
  }

  @Bind()
  disconnectFromDatabase() {

    if (this.disconnectNotesCallback) {
      this.disconnectNotesCallback();
    }

    if (this.disconnectTagsCallback) {
      this.disconnectTagsCallback();
    }

    this.setState({ connected: false });

    this.log.info('Disconnected...');
  }

  @Bind()
  onTagsChanged(snapshot) {

    if (snapshot) {

      const value = snapshot.val();
      const items = [];

      for (const it in value) {
        items.push(value[it]);
      }

      this.setState({
        connected: true,
        tags: items
      });

    } else {

      this.setState({
        tags: []
      })
    }

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
