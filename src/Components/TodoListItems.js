import React from 'react'
import TodoItem from './Todoitem'

class TodoListItems extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="list-group" id='todolist'>
				{
					this.props.todolist.map(
						item => (
							<TodoItem
								key={item.id}
								id={item.id}
								title={item.title}
								time={item.time}
								editItem={this.props.editItem}
								deleteItem={this.props.deleteItem} />
						)
					)
				}
			</ul>
		);
	}
}

export default TodoListItems;