import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { LogoTicker } from "@/sections/logoTicker";
import { ProductShowcase } from "@/sections/productShowcase";
import { Pricing } from "@/sections/pricing";
import { Testimonials } from "@/sections/testimonials";
import { CallToAction } from "@/sections/callToAction";
import { Footer } from "@/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
