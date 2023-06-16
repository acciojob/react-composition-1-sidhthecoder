import React,{useState} from "react";





const Tabs = ({tab}) => {
    const [tabClicked,setTabClicked]=useState(0);
    
    const handleTabClick = (index) => {
        setTabClicked(index);
      };

    return (
        <div>
            <ul>{
                
                tab.map((tabs,index)=>(
                    <li key={index} onClick={()=>handleTabClick(index)}
                    style={{cursor:'pointer'}}
                    >
                    {tabs.titles}
                    </li>
                )

                )}
            </ul>
            <div>{tab[tabClicked].contents}</div>
        </div>
    )
}

export default Tabs