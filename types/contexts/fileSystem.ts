import type { FSModule } from 'browserfs/dist/node/core/FS';

export interface FileSystemContextState {
  fs: FSModule | null;
}
