// config
interface Config {
  readonly baseUrl?: string;
}

// tslint:disable-next-line: no-let
let __FHG_REST_CONFIG__: Config = {};

function set(config: Config): void {
  __FHG_REST_CONFIG__ = { ...config };
}

function get(): Config {
  return { ...__FHG_REST_CONFIG__ };
}

export default { set, get };
export { Config };
