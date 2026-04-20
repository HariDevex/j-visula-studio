import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import TrustProof from "@/components/TrustProof";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Packages />
        <Gallery />
        <TrustProof />
        <Testimonials />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}