import GradientText from "./GradientText";
import HeroSection from "./HeroSection";

const IndustryLayout = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink,
  // comingSoonText,
  ourTitle,
  gradientTitle,
  ourDescription,
  mobileDescription,
  children,
  childern2
}) => {
  return (
    < >
      <HeroSection
        backgroundImage={backgroundImage}
        title={title}
        description={description}
        buttonText={buttonText}
        buttonLink={buttonLink}
        headingWidth="656px"
        descriptionWidth="656px"
      />

      {/* Gradient Text */}
      <div className="">
        <GradientText
          ourTitle={ourTitle}
          gradientTitle={gradientTitle}
          ourDescription={ourDescription}
          mobileDescription={mobileDescription}
        />
      </div>
      <div className="w-full">
        {children}
      </div>
      <div className="w-full">
        {childern2}
      </div>
    </>
  );
};
export default IndustryLayout;