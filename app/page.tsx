import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Opportunity from "./_components/Opportunity";
import Process from "./_components/Process";
import WhoWeHelp from "./_components/WhoWeHelp";
import OurWork from "./_components/OurWork";
import About from "./_components/About";
import Trust from "./_components/Trust";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import CookieBanner from "./_components/CookieBanner";
import ChatWidget from "./_components/ChatWidget";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Opportunity />
        <Process />
        <WhoWeHelp />
        <OurWork />
        <About />
        <Trust />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
      <ChatWidget />
    </>
  );
}
