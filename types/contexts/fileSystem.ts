import { typeFSModule } from 'browserfs/dist/node/core/FS';

export type FileSystemContextState = {
  fs: typeFSModule | null;
};
