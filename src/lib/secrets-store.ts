import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getAccountSecret(): Promise<string | null> {
  const { env } = await getCloudflareContext({ async: true });

  if (!env.ACCOUNT_SECRET) {
    return null;
  }

  return env.ACCOUNT_SECRET.get();
}
