export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    todo: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]
        case 'TOGGLE_TODO':
            return state;
        case 'CLEAR_TODO':
            return state;
        default:
            return state;
    }
}