export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export type Fetch = (url: string, config?: RequestInit) => Promise<Response>;

export interface ParsedData {
  response: Response;
  data: object;
}

export type FetchWithParsedData = (url: string, config?: RequestInit) => Promise<ParsedData>;

export type RequestMiddleware = (fetch: Fetch) => Fetch;

export type ResponseMiddleware = (response: Response) => Response;
