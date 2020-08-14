export const initialState = {
    // token: null, //BQBiOBIwxQBP3odoQgDbcfA6tVha9UfLkpV9dMjMn538DqK94M…4JW7CqFUnZ2givfv13BOV1l3mRUbRKPSAV-zBYoEYjMWeyAOS
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
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
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }   
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };   
        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists: action.top_artists
            }    
        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify
            }    
        default:
            return state    
    }
}

export default reducer