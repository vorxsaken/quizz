const data = {
    dark: false
}

const reducer = (state, action) => {
    switch (action.actionType) {
        case 'CHANGE_THEME':
            return {
                ...state,
                dark: true
            }
    
        default:
            return {
                ...state,
                dark: false
            }
    }
}


export { data, reducer};