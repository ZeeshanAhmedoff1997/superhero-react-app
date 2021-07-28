import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Card from '../common/Card'
import { useDispatch, useSelector } from "react-redux";
import { addComparedItem, removeComparedItem } from '../../Redux//actions/searchActions'
import { toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap'
import CompareImage from '../../Assets/Images/commonImages/vs_image.png'

const SearchList = () =>  {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { heroes, comparedHeroes }  = useSelector((state) => state.searchData);
  const [show, setShow] = useState(false);
  const [isAdded, setIsAdded] = useState(false)
  const handleClose = () => setShow(false);
  
  useEffect(()=>{
    if(comparedHeroes.length === 2){
      setShow(true)
    }
  }, [comparedHeroes])

  const findHero = (id) => {
    for(let i in heroes){
      if(heroes[i].id === id){
        return heroes[i]
      }
    }
    return false
  }
  const addToCompare = (id) => {
    if(comparedHeroes.length === 2){
      toast.info("OOPS! 🥺 You cannot compare more than 2 Heroes")
      return
    }
    let hero = findHero(id)
    setIsAdded(id)
    setTimeout(function(){
      dispatch(addComparedItem(hero)) 
      setIsAdded(false)
    }, 1500);
  }

  const removeFromComparison = (id) => {
    dispatch(removeComparedItem(id))
  }

  const isAddedInComparison = (id) => {
    for(let i in comparedHeroes){
      if(comparedHeroes[i]?.id === id){
        return true
      }
    }
    return false
  }

  const visitCompare = () => {
    navigate('/compare')
  }

  return (
    <>
      {heroes.map((hero, key) => 
        <div className='cards-group row no-gutters card-deck cardsGroup container-fluid pl-0 pr-0 mb-3' key={key}>
          <div className='col-12 col-lg-12'>
            <Card 
              image={hero.image.url}
              text={hero.name}
              detail={hero}
              addToCompare={addToCompare}
              id={hero.id}
              isAddedInComparison={ isAddedInComparison(hero.id) === true ? true: false }
              isAdded={isAdded}
              removeFromComparison= {removeFromComparison}
            />
          </div>
        </div>
      )}
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Compare <span>{comparedHeroes[0]?.name}</span> with <span>{comparedHeroes[1]?.name}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {comparedHeroes.map((hero, key)=>
              <>
                <div className="col-md-5 col-5 col-sm-5 cart-img-div">
                  <div className="cart-img">
                    <img src={hero.image.url} width={170} height={170} alt={'hero'} />
                    <p className="cart-hero-name">{hero.name}</p>
                  </div>
                </div>
                {key === 0 &&
                  <div className="col-md-2 col-2 col-sm-2 cart-img-div">
                    <img src={CompareImage} width={70} height={70} alt={'hero'} />
                </div>
                }
              </>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="cart-footer">
          <Button variant="secondary" onClick={handleClose} className="action-btn">
            Close
          </Button>
          <Button variant="primary" onClick={visitCompare} className="action-btn">
            View Full Comparison
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SearchList
