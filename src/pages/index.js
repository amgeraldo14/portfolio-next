import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";
import { useRef } from "react";

const Home = () => {
  const techRef = useRef(null);
  return (
    <>
      <Head>
        <title>Amgeraldo Portfolio</title>
      </Head>
      <Layout techRef={techRef}>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies techRef={techRef} />
        <Timeline />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
