import React,{useState} from "react";





const Tabs = ({tab}) => {
    const [tabClicked,setTabClicked]=useState("Tab 1");   
    return (
        <div>
            <ul>{
                
                tab.map((tabs,index)=>(
                    <li key={index} onClick={()=>setTabClicked(tabs.contents)}>
                    {tabs.titles}
                    </li>
                )

                )}
            </ul>
            {tabClicked && 
            <p>This is the content for {tabClicked}.</p>}
        </div>
    )
}

export default Tabs