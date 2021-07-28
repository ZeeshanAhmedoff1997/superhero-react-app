import React, { useState } from "react";
import SearchIcon from "../../Assets/Images/homeImages/search.png";
import { getSuperHeroId } from '../../Services/searchService'
import Loader from "react-loader-spinner";
import { addSearchedItem } from '../../Redux/actions/searchActions'
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToHistory } from '../../utils/maintainHistory'

const SearchBar = _ => {
  const [heroName, setHeroName] = useState("");
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } =  await getSuperHeroId(heroName)
      let d = new Date()
      if(data.response === "error"){
        toast.error(data.error)
        addToHistory(heroName, 0, d.getTime())
        return
      }
      addToHistory(heroName, data.results.length, d.getTime())
      dispatch(addSearchedItem(data.results))
    } catch (ex) {
      toast.error('Unable to Search Hero')
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className='search-container' style={{ position: 'absolute' }}>
      <form onSubmit={handleSearch}>
        <div className='search__wrapper'>
          <div className='search__logo'>
            <input
              className='search-input'
              style={style}
              placeholder='Enter Hero Name...'
              type='text'
              value={heroName}
              onChange={e => setHeroName(e.target.value)}
            />
          </div>
          <span className='searchButtonCntnr p-1'>
            <button type='submit' className='searchButton' disabled={heroName === "" ? true : false }>
              {loading?
                <Loader
                  type="ThreeDots"
                  color="#fff"
                  height={30}
                  width={30}
                />
              : 
                <img src={SearchIcon} alt='SearchIcon' />
              }
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};
const style = { fontFamily: "Axioforma, sans-serif", paddingTop: "2px" };

export default SearchBar;
