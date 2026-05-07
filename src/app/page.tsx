import { Callout } from "@/components/Blocks/Callout";
import { HeroBanner } from "@/components/Blocks/HeroBanner";
import { History } from "@/components/Blocks/History";
import { MediaCards } from "@/components/Blocks/MediaCards";
import { pageData } from "@/data/home";
export default function Home() {
  return (
    <main>
      <HeroBanner {...pageData.heroBanner} />
      <MediaCards {...pageData.mediaCards} />
      <Callout {...pageData.callout} />
      <MediaCards {...pageData.mediaCards2} />
      <History {...pageData.history} />
      <MediaCards {...pageData.mediaCards3} />
    </main>
  );
}
