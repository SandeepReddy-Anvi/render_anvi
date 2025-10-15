import { useIsMobile } from "../hooks/useScreenSize";

export const HeroBackgroundSVG = () => {
  const isMobile = useIsMobile(768);

  const nonMobilePath =
    "M0,0 L1000,0 " +
    "L1000, 100 " +
    "C700,780 550, 280 0, 880" +
    "L0, 0";

  const mobilePath =
    "M0,0 L1000,0" +
    "L1300, 100,"+
    "C600, 900 250, 580 0, 880" +
    "L0,0";


  const pathData = isMobile ? mobilePath : nonMobilePath;
  // const pathData = nonMobilePath;

  return (
    <svg
      className="w-full h-full absolute top-0 left-0"
      viewBox="0 0 1000 1000" // Fixed viewBox for perfect scaling
      preserveAspectRatio="none" // Stretches to fill the container
      fill="none"
    >
      <defs>
        {/* Define the path to be reused */}
        <path id="hero-curve" d={pathData} fill="#ffffff" />
      </defs>

      {/* Use the defined path to draw the white shape over the background */}
      <use href="#hero-curve" x="0" y="0" />
    </svg>
  );
};
