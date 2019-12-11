import React from 'react'
import TodoItem from './Todoitem'

function TodoListItems(props) {
	console.log('render todolist items');
	return (
		<ul className="list-group" id='todolist'>
			{
				props.todolist.map(
					item => (
						<TodoItem
							key={item.id}
							item={item}
							onFinish={props.onFinish}
							doEditTodoItem={props.doEditTodoItem} />
					)
				)
			}
		</ul>
	);
}

export default TodoListItems;
