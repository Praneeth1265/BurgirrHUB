import React, { useState } from "react";
import "../App.css"

const slides = [
  {
    image: "../fish.jpg",
    title: "FEIN FEIN Fish",
    subtitle: "Lunch",
    description:
      "Enjoy a delightful lunch with our special fruit pancake, topped with fresh fruits and drizzled with caramel sauce.",
  },
  {
    image: "../dinner.jpg",
    title: "Indian THALA",
    subtitle: "Dinner",
    description:
      "Savor the taste of our classic burger, made with premium beef and fresh ingredients.",
  },
  {
    image: "../lunchchi.jpg",
    title: "Try it & Name it",
    subtitle: "Lunch",
    description:
      "Relish our afternoon delight, perfect for a family dinner with a blend of spices and flavors.",
  },
  {
    image: "../cake.jpg",
    title: "Chechi's Cake",
    subtitle: "Dessert",
    description:
    "Treat yourself to our delicious dessert special, a sweet finish to any meal.",
  },
  {
    image: "../hyd_biry.jpg",
    title: "Cheeky Chicken Biryani",
    subtitle: "Lunch",
    description:
      "Relish our noon delight, perfect for a family dinner with a blend of spices and flavors.",
  },
];

const HeroSection = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <section className="heroSection">
        <img src="../bigchef.png" alt="" className="chef" />
      <div className="slideshow-container">
        <button className="prev-button" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="slide-content">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="slide-image"
          />
          <div className="text-content">
            <h1 className="tod_spl">Today’s Temptation</h1>
            <h2 className="slide-title">{currentSlide.title}</h2>
            <p className="slide-subtitle">{currentSlide.subtitle}</p>
            <p className="slide-description">{currentSlide.description}</p>
          </div>
        </div>

        <button className="next-button" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
