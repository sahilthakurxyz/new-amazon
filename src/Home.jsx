import React from "react";
import "./Home.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Product from "./components/Product.jsx";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <div className="background">
          <img
            className="home__image"
            src={images[0].Image}
            alt="hero_covid19"
          />
          <div className="backImg">
            <div className="left">
              <ArrowCircleLeftIcon />
            </div>
            <div className="center"></div>
            <div className="right">
              <ArrowCircleRightIcon className="icon" />
            </div>
          </div>
        </div> */}
        <div className="home__row">
          <Product
            id="1231446587"
            title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
            price={25.99}
            image="	https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="1231446454"
            title="High-Back Gaming Chair PC Office Chair Computer Racing Chair PU Desk Task Chair Ergonomic Executive Swivel Rolling Chair with Lumbar Support for Back Pain Women, Men (White)"
            image="	https://m.media-amazon.com/images/I/71IsfvhxQeL._AC_UL480_FMwebp_QL65_.jpg"
            price={88.99}
            rating={3}
          />
        </div>
        <div className="home__row homeRow__Airphone">
          <Product
            id="123144568"
            price={88.99}
            rating={5}
            height="230px"
            title="Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone"
            image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="12314465784"
            height="230px"
            price={30.99}
            rating={4}
            title="ComfyBrace Posture Corrector-Back Brace for Men and Women- Fully Adjustable Straightener for Mid, Upper Spine Support- Neck, Shoulder, Clavicle and Back Pain Relief-Breathable"
            image="	https://m.media-amazon.com/images/I/6199D3CTi-L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="1231444547"
            price={60.9}
            rating={5}
            height="250px"
            image="https://m.media-amazon.com/images/I/61iTIlfCryL._AC_UY550_.jpg"
            title="WOOSEA Women Sleeveless V Neck Split Evening Cocktail Long Dress"
          />
        </div>
        <div className="home__row home__rowBackground">
          <Product
            id="123144645712"
            price={200}
            rating={5}
            image="	https://images-na.ssl-images-amazon.com/images/I/81lDOtJRTkL._AC_UL160_SR160,160_.jpg"
          />
          <Product
            id="1231446545"
            rating={5}
            price={40}
            image="	https://images-na.ssl-images-amazon.com/images/I/81Ze3ZDcOgL._AC_UL160_SR160,160_.jpg"
          />
          <Product
            id="12314464701"
            price={50.89}
            rating={5}
            image="	https://images-na.ssl-images-amazon.com/images/I/21l795GXZkL._AC_UL160_SR160,160_.jpg"
          />
          <Product
            id="1231446457"
            price={25.65}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/712eYgGt3qL._AC_UL160_SR160,160_.jpg"
          />
          <Product
            id="123142314"
            price={88.99}
            image="	https://m.media-amazon.com/images/I/81L6p8+MYaL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="1787454"
            rating={5}
            price={20.99}
            image="	https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
