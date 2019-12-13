import React, { memo } from 'react'
import TodoItem from './Todoitem'
import TodoContext from './TodoContext';

export default memo(function TodoListItems(props) {
	return (
		<TodoContext.Consumer>
			{context => { 
				return (
					<div>
						{<ul className="list-group" id="todolist">
							{
								context.todolist.map(
									item => (
										<TodoItem key={item.id} item={item} />
									)
								)
							}
						</ul>}
					</div>
				)
			}}
		</TodoContext.Consumer>
	);
});
