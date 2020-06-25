const initialState = {
    rootState: 0,
    user: {
      id: 111
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ROOT':
            return { ...state, rootState: state.rootState+1 }
        case 'CHANGE_ROOT':
            return { ...state, rootState: action.data }
        default:
            return state
    }
}
