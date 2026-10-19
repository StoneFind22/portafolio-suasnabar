import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SuasnabarSection } from "@/components/SuasnabarSection";
import { GlobalReposSection } from "@/components/GlobalReposSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SuasnabarSection />
        <GlobalReposSection />
      </main>
      <Footer />
    </div>
  );
}
