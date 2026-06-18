import { redirect } from "next/navigation";
import { LINKS_PATH } from "@/lib/site";

/**
 * Standalone app: the home page simply forwards to the link hub.
 * When this route is copied into your main website, delete this file —
 * the hub already lives at its own /links route with zero other changes.
 */
export default function HomePage() {
  redirect(LINKS_PATH);
}
