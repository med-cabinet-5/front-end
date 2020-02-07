
//FROM PREVIOUS PROJECT
// export const initialState = { 
//     todos: [
//         {
//     item: 'Learn About Reducers',
//     completed: false,
//     id: 1
//     },
//         {
//     item: 'Finish Reducer Project',
//     completed: false,
//     id: 2
//     }
//     ]
// }

// const toggleItem = (id, todoList) => {
//     const newList = todoList.map(item => {
//         if (item.id === id) {
//             return {
//                 ...item,
//                 completed: !item.completed
//             }
//         } else {
//             return item;
//         }
//     })
//     return newList
// }

// const removeItems = (todoList) => {
//     const nonCompletedList = todoList.filter(item => {
//         return item.completed === false;
//     })
//     return nonCompletedList
// }

//ADD FUNCTIONS NECESSARY FOR ACTIONS WITHIN APP:
    


//REDUCER
// export const indexReducer = (state, action) => {
//     switch(action.type) {
//ADD CASES:





            //From previous project
//         case 'ADD_TODO':
//             const newItem ={
//             item: action.payload,
//             completed: false,
//             id: Date.now()
//             }
//             return {
//                 ...state, todos: [...state.todos, newItem]
//             };

//         case 'TOGGLE_COMPLETED':
//             return {
//                 todos: toggleItem(action.payload, state.todos)
//             };
        
//         case 'REMOVE_COMPLETED':
//             return {
//                 todos: removeItems(state.todos)
//             }
    
//         default: 
//         return state;
//     };
// }


