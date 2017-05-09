export default function reducer (state = {
  xbl: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_XBL': {
      return {...state, fetching: true}
    }
    case 'FETCH_XBL_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_XBL_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        xbl: action.payload
      }
    }
  }

  return state
}
