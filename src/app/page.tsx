import CatchPhrase from "@/components/catchphrase/CatchPhrase";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Plans from "@/components/plans/Plans";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Plans />
      <CatchPhrase />
      <Footer />
    </main>
  );
}
