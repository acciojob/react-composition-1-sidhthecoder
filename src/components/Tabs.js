import React,{useState} from "react";





const Tabs = ({tabs}) => {
    const [tabClicked,setTabClicked]=useState("");   
    return (
        <div>
            <ul>{
                
                tabs.map((tabs)=>(
                    <li onClick={()=>setTabClicked(tabs.contents)}>
                    {tabs.titles}
                    </li>
                )

                )}
            </ul>
            {tabClicked && 
            <p>This is the content for {tabClicked}</p>}
        </div>
    )
}

export default Tabs