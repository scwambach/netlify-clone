import { HeroBanner } from "@/components/Blocks/HeroBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { pageData } from "@/data/home";
export default function Home() {
  return (
    <body>
      <Header {...pageData.header} />
      <main>
        <HeroBanner {...pageData.heroBanner} />
        <div className="container">HomePage</div>
      </main>
      <Footer {...pageData.footer} />
    </body>
  );
}
