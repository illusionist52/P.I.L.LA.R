import { Features, Hero, Navbar, Steps } from "@/components";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-200 pb-20">
        <Hero />
        <Features />
        <Steps/>
      </div>
    </div>
  );
};

export default Home;
