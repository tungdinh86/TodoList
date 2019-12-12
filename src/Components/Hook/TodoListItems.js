import React, { memo } from 'react'
import TodoItem from './Todoitem'

export default memo(function TodoListItems(props) {
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
});
