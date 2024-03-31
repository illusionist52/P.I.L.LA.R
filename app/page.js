import { Features, Hero, Navbar, Steps } from "@/components";
import FileUpload from "@/components/FileUpload";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-200 pb-20">
        <Hero />
        <Features />
        <Steps/>
        <FileUpload/>
      </div>
    </div>
  );
};

export default Home;
