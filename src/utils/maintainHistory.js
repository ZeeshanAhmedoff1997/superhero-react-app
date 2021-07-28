export const getHistory = () => {
  return JSON.parse(localStorage.getItem('history'))
}

export const addToHistory = (name, noOfResults, time) => {
  let history = getHistory()
  let searchHistory = {
    name: name,
    noOfResults: noOfResults,
    time: time
  }
  if(history){
    searchHistory.id = history[history.length-1].id + 1
  } else {
    history = []
    searchHistory.id = 0
  }
  history.push(searchHistory)
  localStorage.setItem('history', JSON.stringify(history))
  return history
}

export const deleteFromHistory = (id) => {
  let history = getHistory()
  history = history.filter(function(el){
    return el.id !== id;
  });
  localStorage.setItem('history', JSON.stringify(history))
  return history
}

export const removeAllHistory = () =>{
  localStorage.removeItem('history')
  return null
}

