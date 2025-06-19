import Abot from "../../components/home-component/about-us/Abot";
import Choose from "../../components/home-component/choose-us/Choose";
import Form from "../../components/home-component/form/Form";
import HidList from "../../components/home-component/hidden-divs/HidList";
import Highlight from "../../components/home-component/highlights/Highlight";
import HeroSection from "../../components/home-component/home-hero/HeroSection";
import Bloggs from "../../components/home-component/Our-Blogs/Bloggs";
import Client from "../../components/home-component/our-clients/Client";
import Product from "../../components/home-component/products/Product";
import Sliderr from "../../components/home-component/slider/Slider";
import Stat from "../../components/home-component/statistics/Stat";
import Solution from "../../components/home-component/tailored-solutions/Solution";
import Team from "../../components/home-component/teams/Team";
import Tech from "../../components/home-component/tech/Tech";
import Testimonial from "../../components/home-component/testimonials/Testimonial";

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
      <Choose />
      <Highlight />
      <Tech />
      <Testimonial />
      <Bloggs />
      <HidList />
      <Team />
      <Form />
    </>
  );
}
