// import { useEffect, useState, useRef } from "react";

// const TodoList = ({todos, setTodos, setEditTodo}) => {
//     const elRef = useRef();
//     const handleComplete = (todo) => {
//         // console.log(elRef);
//         setTodos(todos.map((item) => {
//             if (item.id === todo.id) {
//                 return {...item, completed: !item.completed}
//             }           
//             useEffect(() =>{
//                 console.log(elRef.current.todo.title.style.textDecoration = 'line_through');
//             }, [todos])
//             return item;
//         }))

//     }

//    const handleEdit = ({id}) =>{
//       const findTodo = todos.find((todo) => todo.id === id);
//       setEditTodo(findTodo);
//    }


//     const handleDelete = ({id}) => {
//         setTodos(todos.filter((todo) => todo.id !== id))
//     }
//   return(
//     <div>{todos.map((todo) => (
//         <li className="list-item" key={todo.id}>
//            <input  ref={elRef} type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()}/>
//            <div>
//             <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
//                 <i className="fa fa-check-circle"></i>
//             </button>
//             <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
//                 <i className="fa fa-edit"></i>
//             </button>
//             <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
//                 <i className="fa fa-trash"></i>
//             </button>
//            </div>
//         </li>
//     )
// )}</div>
// )

// }

// export default TodoList;
import { useEffect, useState, useRef } from "react";

const TodoList = ({todos, setTodos, setEditTodo}) => {
    const elRef = useRef();
    
    const handleComplete = (todo) => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {...item, completed: !item.completed}
            }           
            return item;
        }))
    }

    const onChecking = (todo) =>{
        console.log(todo.target);
        // setEditTodo(todo);
    }

    const handleEdit = ({id}) =>{
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    useEffect(() => {
        if(elRef.current)
            elRef.current.style.textDecoration = 'line-through';
        
    }, [todos])
    

    return(
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id} >
                    <input ref={elRef} type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()}/>
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                            <i onClick={onChecking} className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default TodoList;
