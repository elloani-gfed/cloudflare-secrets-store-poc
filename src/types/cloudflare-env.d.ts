export {};

declare global {
  interface CloudflareEnv {
    ACCOUNT_SECRET?: {
      get(): Promise<string>;
    };
  }
}
