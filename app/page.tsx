import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import EbookCapture from "./_components/EbookCapture";
import WhatWeDo from "./_components/WhatWeDo";
import WhatWeLookFor from "./_components/WhatWeLookFor";
import WhyShimmeur from "./_components/WhyShimmeur";
import WhoWeHelp from "./_components/WhoWeHelp";
import Portfolio from "./_components/Portfolio";
import BeforeAfter from "./_components/BeforeAfter";
import About from "./_components/About";
import OurTeam from "./_components/OurTeam";
import Stories from "./_components/Stories";
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
        <EbookCapture />
        <WhatWeDo />
        <WhatWeLookFor />
        <WhyShimmeur />
        <WhoWeHelp />
        <Portfolio />
        <BeforeAfter />
        <About />
        <OurTeam />
        <Stories />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
      <ChatWidget />
      <PopupCTA />
    </>
  );
}
