import getShortenedUrl from "@/app/lib/getShortenedUrl";
import { get } from "http";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ alias: string }>; }) {
    const { alias } = await params;
    if (!alias) {
        return redirect("/");
    }
    const aliasUrl = await getShortenedUrl(alias);
    if (!aliasUrl) {
        return redirect("/");
    }
    return redirect(aliasUrl);
}
