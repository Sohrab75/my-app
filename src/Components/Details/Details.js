import React,{useState, useEffect} from "react";
import Header from "../Header";
import axios from "axios";
import './Details.css'
import { Link, useParams, useLocation, useHistory } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import MenuDisplay from "./MenuList";

const url= 'https://restapi-production-b94c.up.railway.app/api/products'

const Details = ()=>{
    const [prodDetails, setProdDetails] = useState('');
    console.log(prodDetails);
    const [userItem, setUserItem] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)   
    const {id} = useParams();
    const history = useHistory();

    function goBack(){
        history.goBack();
    }

    const addToCart = (data) => {
        console.log(data)
        setUserItem(data);
    }

    const Proceed = (name, cost, image,  prodDetails)=>{
        sessionStorage.setItem('menu', name);
        const selectedProdName = prodDetails.products;
        console.log(selectedProdName)
        console.log(name)
        history.push({
            pathname: `/placeOrder/${name}`,
            state: {
                order: name, 
                prodDetails: prodDetails,                
                name: selectedProdName.name, 
                cost: selectedProdName.cost, 
                image: selectedProdName.image 
            }
            
        });
    }

    useEffect(() => {
        let categoryId = sessionStorage.getItem('categoryId');
        // console.log(categoryId);// getting categoryid
         
        let relatedProduct = axios.get(`${url}`)
        axios.get(`https://restapi-production-b94c.up.railway.app/api/products?categoryId${categoryId}&id=${id}`)
        .then((res)=>{
            console.log(res.data)
            setProdDetails(res.data)
        }).catch((error) => console.log(error));
    }, []);

    if(prodDetails){
        if(prodDetails.products.length > 0){
            return prodDetails.products.map((item)=>{
                return(
                    <>  
                        <Header/>
                        <div className="container" key={item.id}>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card">
                                        <img className="card-img-top" src={item.image} alt={item.name}/>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.cost}</p>
                                            <a href="#" className="btn btn-primary">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            

                                <div className="col-lg-6 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.cost} </p>
                                            <p className="card-text">{item.type} </p>
                                            <p className="card-text">{item.quantity} </p>
                                            <p className="card-text">{item.location} </p>
                                            <a href="#" className="btn btn-outline-primary btn-sm">
                                                Card link
                                            </a> &nbsp;
                                            <a href="#" className="btn btn-outline-secondary btn-sm">
                                                <i className="far fa-heart"></i>
                                            </a> &nbsp;
                                            <button className="btn btn-success" onClick={goBack}> Back </button> &nbsp;
                                            <button className="btn btn-primary" onClick={()=> Proceed(item.name, item.cost, item.image, prodDetails)}>Order Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                            <Tabs>
                                <TabList>
                                    <Tab>About Us</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>
                                <TabPanel>
                                    <h2>{item.name}</h2>
                                    <p>{item.name} is simply dummy text of training essentially unchanged
                                    </p>
                                </TabPanel>
                                <TabPanel>
                                    <h2>{item.name}</h2>
                                    <h3>Phone: +91-12346789</h3>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <div className="col-md-12">
                            <MenuDisplay prodData={prodDetails} finalOrder={(data)=>{addToCart(data)}}/>
                        </div>
                    </>
                    
                )
            })
        }
    }

}

export default Details;
