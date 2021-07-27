import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import Card from '../common/Card'
import { useDispatch } from "react-redux";
import { addComparedItem, removeComparedItem } from '../../Redux//actions/searchActions'
import { toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap'

const SearchList = () =>  {
  const dispatch = useDispatch();
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SearchList
