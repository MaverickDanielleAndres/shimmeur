import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import WhatWeDo from "./_components/WhatWeDo";
import Opportunity from "./_components/Opportunity";
import OurTeam from "./_components/OurTeam";
import OurExperience from "./_components/OurExperience";
import WhoWeHelp from "./_components/WhoWeHelp";
import Testimonials from "./_components/Testimonials";
import ImageGallery from "./_components/ImageGallery";
import OurWork from "./_components/OurWork";
import Trust from "./_components/Trust";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import CookieBanner from "./_components/CookieBanner";
import ChatWidget from "./_components/ChatWidget";
import PopupCTA from "./_components/PopupCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <Opportunity />
        <OurTeam />
        <OurExperience />
        <WhoWeHelp />
        <Testimonials />
        <ImageGallery />
        <OurWork />
        <Trust />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
      <ChatWidget />
      <PopupCTA />
    </>
  );
}
