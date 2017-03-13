import { combineReducers } from 'redux';

let i = 0;

function itemTodo(action){
    return {
        id: i++,
        value: action.item,
        status: "completed"
    }
}

export function items(state = [], action) {
    // console.log(action);
    // console.log(state);
    switch (action.type) {
        case 'ADD_TO_DO':
            return [
                ...state,
                itemTodo(action)
            ];
        default:
            return state;
    }
}

export default combineReducers({
    items
});
