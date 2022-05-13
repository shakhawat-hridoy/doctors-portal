import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import HomeContactUs from "./HomeContactUs";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Reviews></Reviews>
      <HomeContactUs></HomeContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
