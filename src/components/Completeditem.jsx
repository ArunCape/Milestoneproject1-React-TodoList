import './todoitem.css'
import MaterialIcon from 'material-icons-react';


// eslint-disable-next-line react/prop-types
export default function CompletedItem({title, onDelete}) {
    // eslint-disable-next-line no-unused-vars
    function onClickDelete(_event){
        console.log(title);
        onDelete(title);        
    }

    return(
        <>
        <div className='todo-item'>
            <div className='todo-title'>
                {title}
            </div>
            <div className='todo-delete'>
                <button onClick={onClickDelete}>
                    <MaterialIcon icon="delete_forever" color="white" />
                </button>
            </div>
            
        </div>
        </>
        
    )
}