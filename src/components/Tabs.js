import React,{useState} from "react";





const Tabs = ({tab}) => {
    const [tabClicked,setTabClicked]=useState("");   
    return (
        <div>
            <ul>{
                
                tab.map((tabs)=>(
                    <li onClick={()=>setTabClicked(tabs.contents)}>
                    {tabs.titles}
                    </li>
                )

                )}
            </ul>
            {tabClicked && 
            <p>{tabClicked}</p>}
        </div>
    )
}

export default Tabs