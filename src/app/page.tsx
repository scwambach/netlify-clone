import { HeroBanner } from "@/components/Blocks/HeroBanner";
import { pageData } from "@/data/home";
export default function Home() {
  return (
    <main>
      <HeroBanner {...pageData.heroBanner} />
      <div className="container">HomePage</div>
    </main>
  );
}
