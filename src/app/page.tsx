import DoingToday from "@/components/doing-today";
import Footer from "@/components/footer";
import HeroPage from "@/components/hero-page";
import MeetTheTeam from "@/components/meet-the-team";
import Navbar from "@/components/navbar";
import WhoWeAre from "@/components/who-we-are";

//Home page
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <DoingToday />
      <WhoWeAre />
      <MeetTheTeam />
      <Footer />
    </>
  );
}
