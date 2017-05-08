import axios from 'axios'

export function fetchXbl (query){
  return function (dispatch) {
    dispatch({type: 'FETCH_XBL', payload: []})
    if (query) {
      axios.get('https://enhanced-ow-api.herokuapp.com/boludo00/quickplay/xbl/')
      .then((response) => {
        dispatch({type: 'FETCH_XBL_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_XBL_REJECTED', payload: err})
      })
    }
  }
}
