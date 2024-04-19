import PropTypes from 'prop-types';

export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return ( 
    <li>
            <label>
                <input type="checkbox" checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
            </label>
            <button className="btn btn-danger" 
            onClick={() => deleteTodo(id)}
            >Delete</button>
            </li>
    )
}

TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired, // Indicates that completed is a required boolean prop
    id: PropTypes.number.isRequired, // Example type for id, adjust as needed
    title: PropTypes.string.isRequired, // Example type for title, adjust as needed
    toggleTodo: PropTypes.func.isRequired, // Example type for toggleTodo, adjust as needed
    deleteTodo: PropTypes.func.isRequired, // Example type for deleteTodo, adjust as needed
};