import { Features, Hero, Navbar, Steps } from "@/components";
import FileUpload from "@/components/FileUpload";
import Footer from "@/components/Footer";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <hr className="border-slate-200" />
      <Footer />
    </div>
  );
};

export default Home;
