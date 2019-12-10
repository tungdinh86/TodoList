import React from 'react'
import TodoItem from './Todoitem'

class TodoListItems extends React.Component {
	render() {
		return (
			<ul className="list-group" id='todolist'>
				{
					this.props.todolist.map(
						item => (
							<TodoItem
								key={item.id}
								item={item}
								onFinish={this.props.onFinish}
								doEditTodoItem={this.props.doEditTodoItem}
							/>
						)
					)
				}
			</ul>
		);
	}
}

export default TodoListItems;