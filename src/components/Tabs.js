import React,{useState} from "react";





const Tabs = ({tab}) => {
    const [tabClicked,setTabClicked]=useState("");   
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
            <div>{tabClicked}</div>}
        </div>
    )
}

export default Tabs