import { combineReducers } from 'redux';

let i = 0;
let initState = {
    item: {
        status: "all",
        items: []
    }    
}

function itemTodo(action){
    return {
        id: i++,
        value: action.item,
        status: "open"
    }
}

function setTodo(state, action){    
    if(state.id != action.id){
        return state;
    }
    state.status = action.status;
    return state;
}

export function items(state = initState, action) {    
    let stateReturn = {};
    switch (action.type) {
        case 'ADD_TO_DO':            
            stateReturn = {
                item: {
                    status: "all",
                    items: [
                        ...state.item.items,
                        itemTodo(action)
                    ]                 
                }  
            }            
            return stateReturn;
        case 'HANDLE_STATUS':            
            stateReturn = {
                item: {
                    status: state.item.status,
                    items: state.item.items.map(item =>
                            setTodo(item, action)
                        )
                }  
            }            
            return stateReturn
        case 'VISIBLE_TODO':                            
            stateReturn = {
                item: {
                    status: action.status,
                    items: state.item.items
                }  
            }            
            return stateReturn;
        default:            
            return state;
    }
}

export default combineReducers({
    items
});
