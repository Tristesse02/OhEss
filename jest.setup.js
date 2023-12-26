/* eslint-disable @typescript-eslint/semi */

// require('@testing-library/jest-dom'); // added the line in jest config.js

import preloadAll from 'jest-next-dynamic';

beforeAll(async () => {
  await preloadAll();
});
