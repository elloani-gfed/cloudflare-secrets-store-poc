import Image from "next/image";
import { getAccountSecret } from "@/lib/secrets-store";

export const dynamic = "force-dynamic";

export default async function Home() {
  const secret = await getAccountSecret();
  const secretStatus = secret
    ? `TEST_API_KEY: ${secret}`
    : "Not available";

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-lg text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Cloudflare Secrets Store is wired up.
          </h1>
          <h2 className="text-2xl">Secrets:</h2>
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <span className="font-medium">{secretStatus}</span>
          </p>
        </div>
      </main>
    </div>
  );
}
