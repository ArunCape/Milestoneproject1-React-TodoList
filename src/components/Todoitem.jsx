import './todoitem.css'
import MaterialIcon from 'material-icons-react';

// eslint-disable-next-line react/prop-types
export  default function TodoItem({ title, onDelete, onComplete}) {
    // eslint-disable-next-line no-unused-vars
    function onClickDelete(_event){
        console.log(title);
        onDelete(title);        
    }

    // eslint-disable-next-line no-unused-vars
    function onClickComplete(_event){
        onComplete(title);
    }
    

    return(
        <>
        <div className='todo-item'>
            <div className='todo-title'>
                {title}
            </div>
            <div className='todo-delete'>
                <button onClick={onClickComplete}>
                    <MaterialIcon icon="check_circle_outline" color="white" />
                </button>
                <button onClick={onClickDelete}>
                    <MaterialIcon icon="delete" color="white" />
                </button>

            </div>
            
        </div>
        </>
        
    )
}

// eslint-disable-next-line react/prop-types

