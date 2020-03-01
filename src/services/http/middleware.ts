export const authRequestMiddleware = (driver: typeof fetch) => {
  const authHeaders = {
    test: 'test'
  };
  return (url: string, config: RequestInit) =>
    driver(url, { ...config, headers: { ...config.headers, ...authHeaders } });
};
