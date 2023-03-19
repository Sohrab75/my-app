import React from "react";
import { Link } from "react-router-dom";

const QuickDisplay = (props)=>{
    // console.log(props)

    const listProd = ({mealData})=>{
        if(mealData){
            return mealData.categories.map((item, index) => {
                // console.log(item.category_id);
                return(
                    
                    <Link to={`/listing/${item.category_id}`} category_id={item.category_id} key={index}>
                        
                    <div className="tileContainer" key={item.category_id}>
                        <div className="tileComponent1">
                            <img src={item.category_img} alt={item.category_name}/>
                        </div>
                        <div className="tileComponent2">
                            <a href="../listing/Listing.html">{item.type}</a>
                        </div>
                        <h1> {item.category_id} </h1>
                        <div className="compSubHeading">
                            {item.category_name} {item.category_txt}
                        </div>
                    </div>
                </Link>
                )
            })
        }
    }

    return(
        <div className="mainBox">
            {listProd(props)}
           
        </div>
    )
}

export default QuickDisplay;
