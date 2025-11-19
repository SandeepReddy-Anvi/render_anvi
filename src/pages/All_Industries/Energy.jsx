import React from "react";
import IndustryLayout from "../../components/IndustryLayout";

export const Energy = () => {
  return (
    <main>
      <IndustryLayout
        backgroundImage="/images/industries/energy.webp"
        title="Energy"
        description="Blending innovation with sustainability, our energy solutions are designed to transform how industries power a smarter, cleaner, and more resilient future."
        buttonText="About Us"
        buttonLink="/industries/energy"
        comingSoonText="We're building solutions to transform the energy sector. Stay tuned for groundbreaking innovations that will power the future."
      />
    </main>
  );
};
