import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const Note = (props)=> {
    
 
    const deletenote =()=>{
         props.deleteItem(props.id)
         console.log("i am clicked")
    }
    return (
        <>
     
       
        <div className="note">
            <h1>{props.title}</h1>
            
            <p>{props.content}</p>
           <DeleteOutlineIcon className="dell" onClick={deletenote} />
           
        </div>
     
        
        </>
            
        
    )
}

export default Note; 