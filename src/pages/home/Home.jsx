import Abot from "../../components/home-component/about-us/Abot";
import HeroSection from "../../components/home-component/home-hero/HeroSection";
import Client from "../../components/home-component/our-clients/Client";
import Product from "../../components/home-component/products/Product";
import Sliderr from "../../components/home-component/slider/Slider";
import Stat from "../../components/home-component/statistics/Stat";
import Solution from "../../components/home-component/tailored-solutions/Solution";

import "./home.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Client />
      <Solution />
      <Abot />
      <Stat />
      <Sliderr />
      <Product />
    </>
  );
}
