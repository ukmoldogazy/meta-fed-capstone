import chefsMarioAndAdrianAImage from "./assets/chefs-mario-and-adrian_a.jpg";
import chefsMarioAndAdrianBImage from "./assets/chefs-mario-and-adrian_b.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a charming neighborhood nestled in the bustling city
          of Chicago. Situated in the heart of the Windy City, Little Lemon
          offers a unique blend of urban energy and cozy suburban charm. This
          vibrant neighborhood is known for its tree-lined streets, picturesque
          parks, and a strong sense of community.
          <br /> <br />
          One of the highlights of Little Lemon is its diverse and eclectic
          culinary scene. From cozy cafes serving freshly brewed coffee to
          upscale restaurants offering a tantalizing array of international
          cuisines, food enthusiasts are sure to find their taste buds
          delighted. Whether you're craving a Chicago-style deep-dish pizza or
          exploring the flavors of global street food, Little Lemon has
          something to satisfy every palate.
          <br /> <br />
          Apart from its culinary offerings, Little Lemon is also a hub for arts
          and culture. The neighborhood is adorned with vibrant street art,
          reflecting the creative spirit of its residents. Local art galleries
          and theaters showcase the talents of both established and emerging
          artists, providing a platform for cultural expression and artistic
          exploration.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
