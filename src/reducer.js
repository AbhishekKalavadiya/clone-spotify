export const initialState = {
    token: 'BQBiOBIwxQBP3odoQgDbcfA6tVha9UfLkpV9dMjMn538DqK94M…4JW7CqFUnZ2givfv13BOV1l3mRUbRKPSAV-zBYoEYjMWeyAOS', //BQBiOBIwxQBP3odoQgDbcfA6tVha9UfLkpV9dMjMn538DqK94M…4JW7CqFUnZ2givfv13BOV1l3mRUbRKPSAV-zBYoEYjMWeyAOS
    user: null,
    playlists: [],
    playing: false,
    items: null,
}

const reducer = ( state, action ) => {
    // console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        default:
            return state    
    }
}

export default reducer