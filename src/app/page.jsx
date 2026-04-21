import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Transformations from "@/components/Transformations";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import TrustProof from "@/components/TrustProof";
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
        <HowItWorks />
        <Portfolio />
        <TrustProof />
        <Testimonials />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}