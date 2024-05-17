import React from "react";
import CategoriesList from "./CareerItem";
import PressFeatures from "./PressFeatures";
import User from "./User";
import ValueProposition from "./ValueProposition";
import Search from "./Search";
import Navbar from "../../Components/Navbar";
import Footter from "../../Components/Footter";

const Landing = () => {
  return (
    <section>
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 py-10 w-full gap-10">
        <div className="p-4 flex flex-col gap-[80px]">
          <Search />
          <CategoriesList />
          <ValueProposition />
          <PressFeatures />
          <User />
        </div>
      </div>
      <Footter />
    </section>
  );
};

export default Landing;
