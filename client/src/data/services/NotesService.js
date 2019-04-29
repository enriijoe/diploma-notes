import { DatabaseService } from '@Data/services';

export class NotesService {

  basePath = '/notes';
  databaseService = DatabaseService.getInstance();

  getById(userId, id) {
    return this.databaseService.readOnce(`${this.basePath}/${userId}/${id}`);
  }

  getAll(userId) {
    return this.databaseService.readOnce(`${this.basePath}/${userId}`);
  }

  updateById(userId, id, item) {
    return this.databaseService.update(`${this.basePath}/${userId}/${id}`, item);
  }

  removeById(userId, id) {
    return this.databaseService.remove(`${this.basePath}/${userId}/${id}`);
  }

  save(userId, item) {
    return this.databaseService.create(`${this.basePath}/${userId}/${item.id}`, item);
  }

  subscribeToNotes(userId, listener) {
    return this.databaseService.subscribe(`${this.basePath}/${userId}`, listener);
  }

}
