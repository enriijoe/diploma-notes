import { DatabaseService } from '@Data/services';

export class TagsService {

  basePath = '/notes';
  databaseService = DatabaseService.getInstance();

  getById(userId, id) {
    return this.databaseService.readOnce(`${this.basePath}/${userId}/tags/${id}`);
  }

  getAll(userId) {
    return this.databaseService.readOnce(`${this.basePath}/${userId}/tags`);
  }

  set(userId, tags) {
    return this.databaseService.create(`${this.basePath}/${userId}/tags`, tags);
  }

  subscribeToTags(userId, listener) {
    return this.databaseService.subscribe(`${this.basePath}/${userId}/tags`, listener);
  }

}
