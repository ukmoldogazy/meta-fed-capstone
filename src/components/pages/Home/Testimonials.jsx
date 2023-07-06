import customer1Image from "./assets/customer1.jpg";
import customer2Image from "./assets/customer2.jpg";
import customer3Image from "./assets/customer3.jpg";
import customer4Image from "./assets/customer4.jpg";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Bakai Akylbekov",
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The dining experience at this restaurant was truly exceptional. From the warm ambiance to the exquisite flavors, every moment was a delight. Highly recommended!.`,
  },
  {
    fullName: "Ainagul Shabdanbekova",
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `The restaurant surpassed all my expectations. The impeccable service, delectable cuisine, and elegant atmosphere made for an unforgettable evening.`,
  },
  {
    fullName: "Erbol Tukashov",
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `This restaurant for its exceptional food quality, innovative menu, and attentive service. The delightful culinary journey surpassed all expectations.`,
  },
  {
    fullName: "Myrzaiym Askarova",
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `The delectable dishes, attentive staff, and inviting ambiance created a memorable evening. Highly recommended for a truly remarkable culinary adventure..`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
