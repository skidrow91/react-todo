import { combineReducers } from 'redux';

let i = 0;
let initState = {
    item: {
        status: "open",
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
    // console.log(state);
    // console.log(action);
    if(state.id != action.id){
        return state;
    }
    state.status = action.status;
    return state;
}

function visibleTodo(state, action){
    // console.log(state);
    // console.log(action);
    if(action.status == "completed")
        return state.filter(item => item.status == "completed");
    return state;
}

export function items(state = initState, action) {
    // console.log(action);
    // console.log(state);
    let stateReturn = {};
    switch (action.type) {
        case 'ADD_TO_DO':
            // return [
            //     ...state,
            //     itemTodo(action)
            // ];
            // let items = itemTodo(action);
            // if(state.items.length > 0){
            //     let items = [
            //         ...state.items,
            //         itemTodo(action)
            //     ]                    
            // }
            stateReturn = {
                item: {
                    status: "all",
                    items: [
                        ...state.item.items,
                        itemTodo(action)
                    ]                 
                }  
            }
            // console.log(stateReturn);
            return stateReturn;
        case 'HANDLE_STATUS':
            // stateReturn = state.map(item =>
            //                 setTodo(item, action)
            //             );
            stateReturn = {
                item: {
                    status: "all",
                    items: state.item.items.map(item =>
                            setTodo(item, action)
                        )
                }  
            }
            // console.log(stateReturn);
            return stateReturn
        // case 'VISIBLE_TODO':
        //     console.log(state);
        //     return state;
        default:
            return state;
    }
}

export default combineReducers({
    items
});
