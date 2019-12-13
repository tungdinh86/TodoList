import Utilities from '../lib/utilities'

const TodoDataItems = [
  { id: Utilities.randomKey(), active: false, title: 'ăn sáng' },
  { id: Utilities.randomKey(), active: true, title: 'ăn trưa' },
  { id: Utilities.randomKey(), active: true, title: 'ăn tối' },
];

export default TodoDataItems;
