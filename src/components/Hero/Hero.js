import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm an aspiring Javascript Frontend Developer with 1+ year of experience
        looking for work
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
