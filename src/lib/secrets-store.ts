import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getAccountSecret(): Promise<string | null> {
  const { env } = await getCloudflareContext({ async: true });
  const secretBinding = env["my-secret-store"];

  if (!secretBinding) {
    return null;
  }

  return secretBinding.get();
}
