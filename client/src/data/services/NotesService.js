import { DatabaseService } from '@Data/services';

export class NotesService {

  basePath = '/notes';
  databaseService = DatabaseService.getInstance();

  getById(id) {
    return this.databaseService.readOnce(`${this.basePath}/${id}`);
  }

  getAll() {
    return this.databaseService.readOnce(this.basePath);
  }

  updateById(id, item) {
    return this.databaseService.update(`${this.basePath}/${id}`, item);
  }

  removeById(id) {
    return this.databaseService.remove(`${this.basePath}/${id}`);
  }

  save(item) {
    return this.databaseService.create(`${this.basePath}/${item.id}`, item);
  }

}
