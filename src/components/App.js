
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";


const App = () => {
  const tab=[{titles:"Tab 1", contents:"Tab 1"},{titles:"Tab 2", contents:"Tab 2"},{titles:"Tab 3", contents:"Tab 3"}]
  return (
    <div>
        <Tabs tab={tab}/>
    </div>
    
  )
}

export default App
