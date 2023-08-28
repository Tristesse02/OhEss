/* eslint-disable @typescript-eslint/semi */

require('@testing-library/jest-dom');

const preloadAll = require('jest-next-dynamic');

beforeAll(async () => {
  await preloadAll();
});
