import { useIsMobile } from "../hooks/useScreenSize";

export const HeroBackgroundSVG = () => {
  const isMobile = useIsMobile(768);

  const nonMobilePath =
    // "M0,0 L1000,0 " +
    // "L1000, 100 " +
    // "C500, 700 800, 200 150, 700" +
    // "C500,350 650,199 0,850" +
    // "L0, 0";
    "M0,0 L1000,0 " +
    "L1000, 100 " +
    "C500, 850 800, 100 0,700" +
    // "C320,580 0,830 0, 800" +
    "L0, 0";

  const mobilePath =
    // ============== 1
    // "M0,0 L1000,0" +
    // "L920, 100,"+
    // "C800, 550 700, 500 450, 600"+
    // "C200, 700 0,800 0, 950"+
    // "L0,0";
    // ============== 2
    // "M0,0 L1000,0" +
    // "L920, 100,"+
    // "C800, 550 700, 600 450, 570"+
    // "C230, 550 0,820 0, 950"+
    // "L0,0";
    // ============== 3
    "M0,0 L1000,0" +
    "L920, 100,"+
    "C800, 550 650, 650 460, 630"+
    "C100, 600 0,820 0, 950"+
    "L0,0";


  const pathData = isMobile ? mobilePath : nonMobilePath;

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
