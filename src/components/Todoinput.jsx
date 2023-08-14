import { useState } from "react";
import './Todoinput.css'
import MaterialIcon from 'material-icons-react';

// eslint-disable-next-line react/prop-types
export default function TodoInput({ onAddItem }) {
    var [currentInput, setCurrentInput] = useState('');

    function onInputChange(event) {
        setCurrentInput(event.target.value);
    }

    function addTodoItem() {
        onAddItem(currentInput);
        setCurrentInput('');
    }
    
    return (
        <div className="todo-input-div">
                <input className="todo-input-value" type="text" value={currentInput} onChange={onInputChange} /> 
            <div className="todo-button-add">
                <button onClick={addTodoItem}>
                    <MaterialIcon icon='note_add' color='white' />
                </button>
 
            </div>
        </div>   
    )
}
