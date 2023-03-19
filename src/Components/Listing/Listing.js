import React, { useState, useEffect } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';
import './Listing.css';
import Header from '../Header';
import ListingDisplay from './ListingDisplay';

const url='https://restapi-production-b94c.up.railway.app/api/products?categoryId='

const Listing = (props) => {
    const [prodList, setProdList] = useState('');

    useEffect(() => {
        let categoryId = props.match.params.categoryId;
        console.log(categoryId)  // getting categoryid
        sessionStorage.setItem('categoryId', categoryId);

        axios.get(`${url}${categoryId}`)
        .then((res)=>{setProdList(res.data)})
    }, [props.match.params.categoryId]);

    return (
        <>
            <Header/>
            <div className="container">
                <div className="row">
                    <div id="col-sm">
                        <h2 className='h2'>Filters</h2>
                        <hr/>
                    </div>
                    <ListingDisplay productsData={prodList} />
                </div>
            </div>
        </>
    )
}

export default Listing;
