import React, { useEffect, useState } from "react";
import './QuickSearch.css';
import QuickDisplay from "./QuickDisplay";


const url='https://restapi-production-b94c.up.railway.app/api/categories'

const QuickSearch = ()=>{
    const[name]= useState('QuickSearch')
    const[description]= useState('Find a Best Product')
    const[mealType, setType] = useState('')
    

    useEffect(()=>{
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setType(data)
            
        })
    },[])
    // console.log(featureType)

    return(
        <>
            <div className="container">
                <div className="row">
                    {name}
                </div>
                <div className="row">
                    {description}
                </div>
            </div>
            {/* <Feature featureData={mealType} /> */}
            <QuickDisplay mealData={mealType} />
          
        
        </>
    )
}
export default QuickSearch;
