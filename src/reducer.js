export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQCZprP1XWdNCNbTBuIG8vyrOn9yvAAgw2EYRJhKwg83H2PV8zwS5WttKkqy4e-bi3mh3ECtT_yE80yCCbzG5eHJhWD_k4oODeAxuwoDl4qvkq35sZFk6riHmNLcqrK94Lckcf7lFYDgd9G8wRNCi0PyMQ"
};

const reducer = (state, action) => {
    console.log(action)
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
                playlists:action.playlists
            }
        default:
            return state;
    }
}

export default reducer