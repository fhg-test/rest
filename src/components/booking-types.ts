import { BookingType } from '@fhg-test/core';

import { Resource } from '../base';
import { getResourceEndpoint } from '../utils/endpoints';
import request, { QueryParams } from '../utils/request';

function getBaseUrl(): string {
  return getResourceEndpoint(Resource.BookingTypes);
}

async function list(queryParams?: QueryParams): Promise<BookingType[]> {
  return await request.get({
    queryParams,
    url: getBaseUrl(),
  });
}

export { list };
