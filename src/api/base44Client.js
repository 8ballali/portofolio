import { createClient } from "@base44/sdk";
import { appParams } from "@/lib/app-params";

const appId = appParams.appId ?? import.meta.env.VITE_BASE44_APP_ID ?? "local-app";

export const base44 = createClient({
  appId,
  appBaseUrl: appParams.appBaseUrl ?? window.location.origin,
  token: appParams.token ?? undefined,
  functionsVersion: appParams.functionsVersion ?? undefined,
});