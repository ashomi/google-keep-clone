import React,{useState} from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Note from './Note';
function App() {
    const [addItem,setAddItem]=useState([]);
    
    const addNote=(note)=>
    {
         setAddItem((prevData)=>{
          return [...prevData, note]
            })
      
   }

  const onDelete = (id) =>{
    setAddItem( (old)=>
           old.filter((curr,index) => { return index !== id; } )
     );
  };
     
  


    return (
        <>
        <Header/>
        <CreateNote
           passNote={addNote}
         />

         {
            addItem.map((val,index) => {
                return( <Note
                          key={index}
                          id={index}
                          title={val.title}
                          content={val.content}
                          deleteItem ={onDelete} />);
            })
            
        }              
                                            
        <Footer/>
        </>
    )
}

export default App;
