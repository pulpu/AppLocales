const initialState = {
    filePath:'ssss'
};

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === 'AGE_UP'){
        newState.filePath++
    }

    if(action.type === 'AGE_DOWN'){
        newState.filePath = action.file
    }

    return newState;
};


export default reducer;