import Hero from "../components/Hero";
import AboutImg from "../Assets/about.jpg";

function About() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Get 20% discount on booking of latest movie tickets at BookMyShow"
      />
    </>
  );
}

export default About;
