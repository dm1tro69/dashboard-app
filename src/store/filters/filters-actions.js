
export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const CLEAR_FILTER = 'CLEAR'

export const addFilter = (filter) => {
  return {
      type: ADD_FILTER,
      payload: filter
  }
}
export const removeFilter = (filter) => {
    return {
        type: REMOVE_FILTER,
        payload: filter
    }
}
export const clearFilter = () => {
    return {
        type: CLEAR_FILTER

    }
}

