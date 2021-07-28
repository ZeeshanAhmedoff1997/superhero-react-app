import React from "react";
import { useSelector } from "react-redux";
import { Alert } from 'react-bootstrap'
import VSIMAGE from '../../Assets/Images/commonImages/vs_image3.png'
import { capitalizeFirstLetter } from '../../utils/functions'

const CompareHeader = () => {
  const { comparedHeroes }  = useSelector((state) => state.searchData);

  const showHeadings = (headings) => {
    return (
      <div className="col-12 col-lg-12">
        <div className="row t-row">
          {headings.map((heading) => 
            <div className="col-4 col-lg-4 col-md-4 sub-heading">{heading}</div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="container compare_main">
      <h1 className="main-title">Comparison</h1>
      <div className="row main-row">
        <Alert variant="info">Note: This Comparison is only between both heroes PowerStats and Apperance</Alert>
      </div>
      <div className="main">
        <div className="row main-row">
          {comparedHeroes.map((comparedHero, key) => 
            <>
              <div className="col-md-4 col-4">
                <img src={comparedHero.image.url} alt="hero1" width="300" height="300" className="cart-img main-img"/>
                <h5 data-text={`I'm ${comparedHero.name}`} className="mt-4">I'm {comparedHero.name}</h5>
              </div>
              {key === 0 && <div className="col-md-4 col-4">
                <img src={VSIMAGE} alt="vs" width="300" height="300" />
              </div>
              }
            </>
          )}
          <hr className="horizontal" />
          <div className="row ">
            <div className="col-12 col-lg-12 title-row">
              <h2>PowerStats</h2>
            </div>
            {showHeadings(['PowerStats', comparedHeroes[0].name, comparedHeroes[1].name])}
            {Object.keys(comparedHeroes[0].powerstats).map(function(key){
              return (
                <div className="col-12 col-lg-12">
                  <div className="row sub-t-row">
                    <div className="col-4 col-lg-4 col-md-4 bold">{capitalizeFirstLetter(key)}</div>
                    <div className="col-4 col-lg-4 col-md-4">{comparedHeroes[0].powerstats[key] ? comparedHeroes[0].powerstats[key] : '-'}</div>
                    <div className="col-4 col-lg-4 col-md-4">{comparedHeroes[1].powerstats[key] ? comparedHeroes[1].powerstats[key] : '-'}</div>
                    {}
                  </div>
                </div>
              )
            })}
          </div>
          <hr className="horizontal" />
          <div className="row ">
            <div className="col-12 col-lg-12 title-row">
              <h2>Apperance</h2>
            </div>
            {showHeadings(['Apperance', comparedHeroes[0].name, comparedHeroes[1].name])}
            {Object.keys(comparedHeroes[0].appearance).map(function(key){
              return (
                <div className="col-12 col-lg-12">
                  <div className="row sub-t-row">
                    <div className="col-4 col-lg-4 col-md-4 bold">{capitalizeFirstLetter(key)}</div>
                    <div className="col-4 col-lg-4 col-md-4">{comparedHeroes[0].appearance[key] ? comparedHeroes[0].appearance[key] : '-'}</div>
                    <div className="col-4 col-lg-4 col-md-4">{comparedHeroes[1].appearance[key] ? comparedHeroes[1].appearance[key] : '-'}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareHeader;
