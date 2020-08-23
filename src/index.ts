import 'isomorphic-fetch';
import { MyError } from '@boringcodes/utils/error';

import { Resource } from './base';
import { Method } from './utils/request';
import config from './config';

function init(baseUrl: string): void {
  if (baseUrl === null || baseUrl === undefined || baseUrl === '') {
    throw new MyError('API Client failed to initialized. Base URL required');
  }

  config.set({ baseUrl });
}

export default { init };
export * from './components';
export { Resource, Method };
