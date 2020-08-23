import * as qs from 'qs';
import { HttpError } from '@boringcodes/utils/error';

enum Method {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

interface QueryParams {
  readonly search?: string;
  readonly q?: string;
  readonly filter?: string;
  readonly select?: string;
  readonly populate?: string;
  readonly sort?: string;
  readonly skip?: number;
  readonly limit?: number;
  readonly [key: string]: any; // tslint:disable-line: no-mixed-interface
}

interface Request {
  readonly url: string;
  readonly queryParams?: QueryParams;
  readonly body?: Object;
  readonly cookie?: any;
}

interface ExtendedRequest extends Request {
  readonly method: Method;
}

interface Count {
  readonly count: number;
}

function resolveUrl(url: string, queryParams?: QueryParams): string {
  if (queryParams !== null && queryParams !== undefined) {
    return `${url}${qs.stringify(queryParams, { addQueryPrefix: true })}`;
  }

  return url;
}

function resolveBody(method: Method, body: any): string | undefined {
  if (
    [Method.Post, Method.Put, Method.Patch].includes(method) &&
    body !== null &&
    body !== undefined
  ) {
    return JSON.stringify(body);
  }

  return undefined;
}

async function request(request: ExtendedRequest): Promise<any> {
  const { url, method, queryParams, body, cookie } = request;

  const res = await fetch(resolveUrl(url, queryParams), {
    method,
    credentials: 'include',
    headers: {
      cookie,
      'Content-Type': 'application/json',
    },
    body: resolveBody(method, body),
  });

  if (!res.ok) {
    const err = await res.json();

    throw new HttpError(res.status, err);
  }

  return await res.json();
}

async function get(data: Request): Promise<any> {
  return await request({ ...data, method: Method.Get });
}
async function post(data: Request): Promise<any> {
  return await request({ ...data, method: Method.Post });
}
async function put(data: Request): Promise<any> {
  return await request({ ...data, method: Method.Put });
}
async function patch(data: Request): Promise<any> {
  return await request({ ...data, method: Method.Patch });
}
async function del(data: Request): Promise<any> {
  return await request({ ...data, method: Method.Delete });
}

export default { get, post, put, patch, del };
export { Method, QueryParams, Count };
