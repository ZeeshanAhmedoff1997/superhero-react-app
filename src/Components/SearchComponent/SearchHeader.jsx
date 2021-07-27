import React from "react";
import NewSearchBar from "./SearchBar";
import BodyParticles from "../common/BodyParticles";
import circle1 from "../../Assets/Images/mobile/1.png";
import circle2 from "../../Assets/Images/mobile/2.png";
import square1 from "../../Assets/Images/mobile/3.png";
import square2 from "../../Assets/Images/mobile/4.png";
import tri1 from "../../Assets/Images/mobile/5.png";
import tri2 from "../../Assets/Images/mobile/6.png";

const SearchHeader = (props) => {
  const headerImgArr = [
    {
      src: `${circle1}`,
      width: 10,
      height: 10,
    },
    {
      src: `${circle2}`,
      width: 15,
      height: 15,
    },
    {
      src: `${square1}`,
      width: 10,
      height: 10,
    },
    {
      src: `${square2}`,
      width: 15,
      height: 15,
    },
    {
      src: `${tri1}`,
      width: 10,
      height: 10,
    },
    {
      src: `${tri2}`,
      width: 15,
      height: 15,
    },
  ];

  return (
    <div className="header-wrap">
      <div className="header">
        <BodyParticles number={10} headerImgArr={headerImgArr} speed={0.7} />
        <div className="container" style={{ height: "100%" }}>
          <div className="row1 heading-row" style={{ height: "100%", display: "flex", padding: '25px' }}>
            <div className="content">
              <div className="headText">
                <h1>Find your Super Hero by their Name</h1>
                <p className="text-light">Search, Select & Compare</p>
                <NewSearchBar />
              </div>
            </div>
            <div className="header-man-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
