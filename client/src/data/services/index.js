import { DatabaseService } from './DatabaseService';
import { NotesService } from './NotesService';

export * from './DatabaseService';
export * from './NotesService';

export const databaseService = new DatabaseService();
