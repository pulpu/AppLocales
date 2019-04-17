const initialState = {
    filePath:'',
    url: ''
};

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === 'PATH_RESET'){
        newState.filePath = initialState.filePath
    }

    if(action.type === 'UPLOAD_PATH'){
        newState.filePath = newState.url
    }

    if(action.type === 'URL_PATH') {
        newState.url = action.url
    }

    return newState;
};


export default reducer;