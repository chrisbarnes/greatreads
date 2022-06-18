import heroImage from "../../assets/images/kimberly-farmer-lUaaKCUANVI-unsplash-better.jpg";
import "./Hero.scss";

export const Hero = () => {
  const heroStyles = {
    backgroundImage: `url(${heroImage})`,
  };

  return (
    <div className="hero" style={heroStyles}>
      <div className="hero-inner container">
        <h1 className="hero-heading">
          Welcome to <strong>Great</strong>Reads
        </h1>
      </div>
    </div>
  );
};
