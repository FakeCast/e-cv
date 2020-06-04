import React, { Component } from "react";
import SectionTitle from "./sectionTitle"

class aboutMe extends Component {
  render() {
    return (
      <div>
        <SectionTitle name="About Me" />
        <p>
          I am a software engineer with 6+ years of experience helping companies to delivery high quality product and services.
          <br />
          Love write clean, readable and testable code, for me a good code must be self-explained.
          <br />
          Living in Brazil with my family
        </p>
      </div>
    )
  }
}

export default aboutMe;