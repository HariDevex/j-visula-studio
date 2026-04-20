import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Transformations from "@/components/Transformations";
import TrustProof from "@/components/TrustProof";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Transformations />
        <TrustProof />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}