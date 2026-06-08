import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import Hero from "@/sections/Hero";
import Story from "@/sections/Story";
import Programs from "@/sections/Programs";
import Equipment from "@/sections/Equipment";
import WhyUs from "@/sections/WhyUs";
import Gallery from "@/sections/Gallery";
import Reservation from "@/sections/Reservation";
import FAQ from "@/sections/FAQ";
import Reviews from "@/sections/Reviews";
import Location from "@/sections/Location";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Programs />
        <Equipment />
        <WhyUs />
        <Gallery />
        <Reservation />
        <FAQ />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <FloatingMenu />
    </>
  );
}
