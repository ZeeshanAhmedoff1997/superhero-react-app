import React, { useEffect, useState } from 'react'
import { getHistory, deleteFromHistory, removeAllHistory  } from '../../utils/maintainHistory'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import Nodata from '../../Assets/Images/commonImages/No_data.png'

const History = () =>  {
  const [history, setHistory] = useState(null)
  
  useEffect(() => {
    setHistory(getHistory())
  }, [])

  const updateHistory = (id) => {
    setHistory(deleteFromHistory(id))
  }

  const clearHistory = () => {
    setHistory(removeAllHistory())
  }
  const showHeadings = (headings) => {
    return (
      <div className="row t-row">
          <div className="col-4 col-lg-4 col-md-4 sub-heading">Searched Name</div>
          <div className="col-4 col-lg-4 col-md-4 sub-heading">No of Heroes (Result)</div>
          <div className="col-3 col-lg-3 col-md-3 sub-heading">Time</div>
          <div className="col-1 col-lg-1 col-md-1 sub-heading"></div>
      </div>
    )
  }

  return (
    <div className="container compare_main history">
      <h1 className="main-title">History</h1>
      <hr className="horizontal" />
      {!history && 
        <dov className="clear mt-5">
          <img src={Nodata} alt="no-data" width="400" height="400" />
        </dov>
      }
      {history && showHeadings(['Searched Name', 'No Of Heroes (Result)', 'Time', ''])}
      {history && history.map(( item, key ) => 
        <div className="row sub-t-row" key={key}>
          <div className="col-4 col-md-4 col-lg-4">{item.name}</div>
          <div className="col-4 col-md-4 col-lg-4">{item.noOfResults}</div>
          <div className="col-3 col-md-3 col-lg-3">{moment(item.time).fromNow()}</div>
          <div className="col-1 col-md-1 col-lg-1">
            <FontAwesomeIcon icon={faTrashAlt} className="custom-del-icon" onClick={()=> updateHistory(item.id) }/>
          </div>
        </div>
      )}
      {history &&
        <div className="clear">
          <Button onClick={clearHistory} className="mt-1 d-flex">Clear All History</Button>
        </div>
      }
    </div>
  )
}

export default History
