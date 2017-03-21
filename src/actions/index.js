
export function toDo(todo){    
    return {
        type: "ADD_TO_DO",
        item:  todo
    }
}

export function handleStatus(id, status){
	return {
		type: "HANDLE_STATUS",
		id,
		status
	}
}

export function visibleTodo(status){	
	return {
		type: "VISIBLE_TODO",
		status
	}
}
