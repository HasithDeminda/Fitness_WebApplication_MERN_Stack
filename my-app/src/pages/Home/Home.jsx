import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import Features from "./Features";
import Trainers from "./Trainers";
import Banner from "./Banner";
import About from "./About";
import Testimonials from "./Testimonials";
import DailyPosts from "./DailyPosts";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Homepage-Container">
      <Navbar />
      <Header />
      <About />
      <Features />
      <Trainers />
      <Banner />
      <Testimonials />
      <DailyPosts />
      <Footer />
    </div>
  );
};

export default Home;
