import { NotesContextManager } from './NotesContextManager';
import { AuthContextManager } from './AuthContextManager';
import { RouterContextManager } from './RouterContextManager';

export * from './NotesContextManager';
export * from './AuthContextManager';
export * from './RouterContextManager';

export const notesContextManager = new NotesContextManager();
export const authContextManager = new AuthContextManager();
export const routerContextManager = new RouterContextManager();
