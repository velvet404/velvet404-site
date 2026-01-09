import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Discography from "@/components/Discography";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-noir text-white selection:bg-velvet selection:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Discography />
      <Footer />
    </main>
  );
}
