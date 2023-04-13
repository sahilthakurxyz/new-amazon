import React, { useEffect, useState } from "react";
import "./HomeHeader.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const first =
  "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg";

const second = "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg";
const third = "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg";
const fourth = "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg";
const fifth = "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg";
const images = [
  {
    id: 0,
    Image: first,
  },
  {
    id: 1,
    Image: second,
  },
  {
    id: 2,
    Image: third,
  },
  {
    id: 3,
    Image: fourth,
  },
  {
    id: 4,
    Image: fifth,
  },
];
function HomeHeader() {
  const [currImage, setCurrImage] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     // console.log("add");
  //     if (currImage + 1 < images.length) {
  //       setCurrImage(currImage + 1);
  //     } else {
  //       setCurrImage(0);
  //     }
  //   }, 5000);
  //   return () => {
  //     // console.log("remove");
  //     clearTimeout();
  //   };
  // }, [currImage]);
  const IncreaseHandle = () => {
    if (currImage + 1 < images.length) {
      setCurrImage(currImage + 1);
    } else {
      setCurrImage(0);
    }
  };
  const DecreaseHandle = () => {
    if (currImage > 0) {
      setCurrImage(currImage - 1);
    } else {
      setCurrImage(images.length - 1);
    }
  };
  return (
    <div className="homeHeader">
      <div
        className="image"
        style={{
          backgroundImage: `url(${images[currImage].Image})`,
        }}
      >
        <div className="left" onClick={DecreaseHandle}>
          <ChevronLeftIcon
            style={{
              fontSize: 30,
              color: "#111",
              backgroundColor: "white",
              borderRadius: "3px",
            }}
          />
        </div>
        <div className="center"> </div>
        <div className="right" onClick={IncreaseHandle}>
          <ChevronRightIcon
            style={{
              fontSize: 30,
              color: "#111",
              backgroundColor: "white",
              borderRadius: "3px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
