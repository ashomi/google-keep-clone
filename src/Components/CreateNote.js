import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props)=> {
       const [note,setNote]=useState({
                      title:"",
                      content:"",
        });
                      
    const [expand,setexpand]=useState(false);
    
    
     const addEvent=(e)=>{
       props.passNote(note);

       e.preventDefault();
       setNote({
        title:"",
        content:"",
    })
        };

 const expandIt = () =>{
     setexpand(true);
 }
 const backNormal = () =>{
     setexpand(false)
 }

   const inputEvent=(event)=>{
      const {name,value} = event.target;
      setNote((prevData)=>{
          return {
              ...prevData ,
              [name]:value,
          };
         
      });
     
   };

    return (
       <>
       <div className="flexnote" onDoubleClick={backNormal}>
       <div className="mainnote">
           <form>
            { expand ?
               <input type="text" 
                  name="title" 
                  placeholder="Title"
                  autoComplete="off"
                  onChange={inputEvent}
                  value={note.title}></input> : null}
               <textarea rows="" 
                 name="content"
                column="" placeholder="write a note" 
                onChange={inputEvent}
                 value={note.content} onClick={expandIt}></textarea>
             { expand?  <button className="btnmain" onClick={addEvent}> <AddIcon/></button> :null}
             
           </form>

       </div>

       </div>
       </>
    )
}

export default CreateNote;
