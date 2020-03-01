import { Fetch, HttpMethods, RequestMiddleware, ResponseMiddleware, FetchWithParsedData } from './types';

export class Http {
  driver = fetch;
  requestMiddlewares: Array<RequestMiddleware>;
  responseMiddlewares: Array<ResponseMiddleware>;

  constructor({
    requestMiddlewares,
    responseMiddlewares
  }: {
    requestMiddlewares: Array<RequestMiddleware>;
    responseMiddlewares: Array<ResponseMiddleware>;
  }) {
    this.requestMiddlewares = requestMiddlewares;
    this.responseMiddlewares = responseMiddlewares;
  }

  fetch: Fetch = async (url: string, config?: RequestInit) => {
    return this.driver(url, config);
  };

  get = (url: string, config?: RequestInit) => {
    return this.fetch(url, { ...config, method: HttpMethods.GET });
  };

  post = (url: string, body: RequestInit['body'], config?: RequestInit) => {
    return this.fetch(url, { ...config, body, method: HttpMethods.POST });
  };

  put = (url: string, body: RequestInit['body'], config?: RequestInit) => {
    return this.fetch(url, { ...config, body, method: HttpMethods.PUT });
  };

  delete = (url: string, body: RequestInit['body'], config?: RequestInit) => {
    return this.fetch(url, { ...config, body, method: HttpMethods.DELETE });
  };

  fetchWithMiddlware: FetchWithParsedData = async (url: string, config?: RequestInit) => {
    let fetchWithMiddleware = this.fetch;
    for (const middleware of this.requestMiddlewares) {
      fetchWithMiddleware = middleware(fetchWithMiddleware);
    }
    let response = await fetchWithMiddleware(url, config);
    for (const middleware of this.responseMiddlewares) {
      response = await middleware(response);
    }
    const parsedResponse = await this.parseResponse(response);
    return parsedResponse;
  };

  parseResponse = async (response: Response) => {
    const data = await response.json();
    return { response, data };
  };
}
