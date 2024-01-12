/* eslint-disable @typescript-eslint/no-var-requires */

// require('@testing-library/jest-dom'); // added the line in jest config.js

const preloadAll = require('jest-next-dynamic');

beforeAll(async () => {
  await preloadAll();
});
