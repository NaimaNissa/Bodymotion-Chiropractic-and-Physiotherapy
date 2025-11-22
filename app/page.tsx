import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Locations from "@/components/Locations";
import Insurance from "@/components/Insurance";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <Process />
      <Services />
      <Testimonials />
      <Stats />
      <Locations />
      <Insurance />
      <CTA />
    </main>
  );
}
