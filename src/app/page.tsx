import { HeroBanner } from "@/components/Blocks/HeroBanner";
import { MediaCards } from "@/components/Blocks/MediaCards";
import { pageData } from "@/data/home";
export default function Home() {
  return (
    <main>
      <HeroBanner {...pageData.heroBanner} />
      <MediaCards {...pageData.mediaCards} />
      <MediaCards {...pageData.mediaCards2} />
      <MediaCards {...pageData.mediaCards3} />
    </main>
  );
}
