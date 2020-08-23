import { BookingStatus } from '@fhg-test/core';

import { Resource } from '../base';
import { getResourceEndpoint } from '../utils/endpoints';
import request, { QueryParams } from '../utils/request';

function getBaseUrl(): string {
  return getResourceEndpoint(Resource.BookingStatuses);
}

async function list(queryParams?: QueryParams): Promise<BookingStatus[]> {
  return await request.get({
    queryParams,
    url: getBaseUrl(),
  });
}

export { list };
