import React from "react";
import IndustryLayout from "../../components/IndustryLayout";

export const SemiConductors = () => {
  return (
    <div>
    <IndustryLayout
      backgroundImage="/images/industries/semiconductors.jpg"
      title="Semiconductors"
      description="At Anvi, we advance semiconductor technology, creating high-performance materials and chips that power innovation across next-generation electronics."
      buttonText="About Us"
      buttonLink="/industries/semiConductors"
      comingSoonText="We're building solutions to transform the energy sector. Stay tuned for groundbreaking innovations that will power the future."
    />
    </div>
  );
};