import React from "react";
 
const Feature = (props) => {
    console.log(props)
    const listFeature = ({featureData})=>{
        // console.log(featureData.products.feature)
        if(featureData){
            return(
                featureData.products.map((item)=>{
                    return(
                        <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src={item.feature[0].feature_image} alt={item.feature[0].feature_heading}/>
                        </div>
                        <div className="compSubHeading">
                            {item.feature[0].feature_heading} {item.feature[0].feature_txt}
                        </div>
                    </div>   
                    )
                })
            )
        }
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    {listFeature(props)}
                    <h1>Feature page</h1>
                </div>
            </div>
        </>
    )
}

export default Feature;