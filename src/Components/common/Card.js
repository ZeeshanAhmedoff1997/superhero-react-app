import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'

const Card = ({ image, text, detail, addToCompare, id, isAdded, isAddedInComparison, removeFromComparison }) => {
  
  const showSvgAnimation = () => {
    return (
      <div className="mr-1">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx={26} cy={26} r={25} fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
      </div>
    )
  }

  return (
    <div style={{height: "100%"}} className='card cardInHP' data-aos='zoom-in-down'>
      <div className="row">
        <div className="col-md-2">
          <img className='custom-card-img' src={image} alt={text} />
        </div>
        <div className="col-md-10">
          <div className="row p-10">
            <div className="col-md-8 text-align-start">
              <p className="text-title">
                {detail.name}
                <FontAwesomeIcon icon={faUserShield} className="custom-icon"/>
              </p>
              <div className="row">
                <div className="col-md-6 col-6">
                  <div className="text-detail">
                    Height: <span className="text-span mr-10"> {detail.appearance.height[0]} </span>
                  </div>
                  <div className="text-detail mt-10">
                    Intelligence: <span className="p-text-span mr-10"> {detail.powerstats.intelligence} </span>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="text-detail">
                    Weight: <span className="text-span">{detail.appearance.weight[0]} </span>
                  </div>
                  <div className="text-detail mt-10">
                    Strength: <span className="p-text-span">{detail.powerstats.strength} </span>
                  </div>
                </div>
              </div>
              <div className="mt-10 text-detail text-des">
                Work Base: <span className="des-span">{detail.work.base}</span>
              </div>
              <div className="mt-10 text-detail text-des">
                Relatives: <span className="des-span">{detail.connections.relatives}</span>
              </div>
            </div>
            <div className="col-md-4 d-flex align-item-center">
              <div className="row">
                <button 
                  className={`action-btn ${isAdded === id ? 'added-btn' : isAddedInComparison ? 'removed-btn' : ''}`} 
                  onClick={() => isAddedInComparison ? removeFromComparison(id) : addToCompare(id)}
                >
                  {isAdded === id && showSvgAnimation() }
                  {isAdded === id ? 'Added': isAddedInComparison ? 'Remove' : 'Add to Comparison'}
                </button>
                <button className="action-btn detail-btn mt-10">Show More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
 
export default Card;
