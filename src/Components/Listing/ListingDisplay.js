import React from 'react';
import { Link } from 'react-router-dom';
import Listing from './Listing';


const ListingDisplay = ({ productsData }) => {
    
    console.log(productsData)
	if (productsData) {
		if (productsData.products.length > 0) {
            return productsData.products.map((item, index)=>{
   
				return(
					
					<div className='col-sm' >
						<div className='listCard card' key={item._id}>
							<img src={item.image} className='listDisp card-img-top' alt={item.name}/>
							<div className='card-body'>
								<Link to={`/details/${item.id}`}>
									<h5 className='card-title'>
										{item.name}
									</h5> 
								</Link>&nbsp;
								<span className='card-text'>
									Price Rs.{item.cost}
								</span>&nbsp;
								<span className='btn btn-primary'>
									{item.location}
								</span>
							</div>
						</div>
					</div>
                )
     
            })
                       
			
		} else {
			return (
				<div className='row'>
					<h2>No Data As Per Filter</h2>
				</div>
			)
		}

	} else {
		return (
			<div>
				<img src="/images/loader.gif" alt="loader" />
				<h2>Loading...</h2>
			</div>
		)
	}
}
export default ListingDisplay;

// 