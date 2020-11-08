export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQAm9zHN1oll3v1c2Y40yhX8bW8oND2K05aPuaA9v0J8PGHagaflMrX-_OiM7tlts2S4ikQjeuIsFYUoBMQrkX6mZ6Z2lssXWi47cg_NAA512PA5_BW8jFNeGrA8K5YbHE5kuJaGw6-cWVrPq70ABcAZ_OPsGK-2CAI4mO7KoQ1dl3MF1Saw",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            };

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly: action.discover_weekly,
        }

        default:
            return state;
    }
}

export default reducer;