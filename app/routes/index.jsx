import { Benefits } from "../components/Benefits";
import { BusinessOnTheWeb } from "../components/BusinessOnTheWeb";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { OurHelp } from "../components/OurHelp";
import { Partners } from "../components/Partners";
import { TheJourney } from "../components/TheJourney";
import { TheWord } from "../components/TheWord";

export default function Index() {
  return (
    <>
      <Hero />
      <BusinessOnTheWeb />
      <Benefits />
      <TheWord />
      <Partners />
      <OurHelp />
      <TheJourney />
      <Footer />
    </>
  );
}
