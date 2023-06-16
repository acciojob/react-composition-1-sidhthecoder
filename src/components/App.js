
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const tab=[{titles:"A", contents:"Hello A"},{titles:"B", contents:"Hello B"},{titles:"C", contents:"Hello C"}]
const App = () => {
  return (
    <div>
        <Tabs tab={tab}/>
       
    </div>
    
  )
}

export default App
