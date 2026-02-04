export {};

declare global {
  interface CloudflareEnv {
    "my-secret-store"?: {
      get(): Promise<string>;
    };
  }
}
