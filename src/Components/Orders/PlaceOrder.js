import React, { useEffect, useState } from 'react'
import Header from '../Header';

const url = 'https://restapi-production-b94c.up.railway.app/api/PlaceOrder'
const oUrl = 'https://restapi-production-b94c.up.railway.app/api/orders'

console.debug();

const PlaceOrder = ({match, location}) => {
    const {order, prodDetails, name, image, cost} =location.state
    console.log(order)
    console.log(prodDetails)
    console.log(name)
    console.log(cost)
    
    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    const [state, setState] = useState({
    id:Math.floor(Math.random()*100000),
    prodName:name,
    name:"Nikita",
    email:"nikita@gmail.com",
    cost:0,
    phone:'9865321472',
    address: "Home no 61 New Delhi",
    orderItem:''
    });

  

    const handleChange = (event) =>{
        setState({...state, [event.target.name]:event.target.value})
        console.log(state)
    }

    // const checkOut = ()=>{
    //     let obj = state;
    //     obj.menuItem = sessionStorage.getItem('menu');
    //     fetch(oUrl, {
    //         method:'POST',
    //         headers:{
    //             'accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body:JSON.stringify(obj)
    //     })

    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         props.history.push('/viewBooking');
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    // }


    useEffect(() => {
        const menuItem = sessionStorage.getItem('menu')
        console.log(menuItem)
        const orderIds = menuItem.split(',').map((id) => parseInt(id))
        console.log(orderIds)
        fetch(`${oUrl}?ids=${orderIds.join(',')}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let totalPrice = 0;
            data.map((item) => {
            totalPrice = totalPrice + parseFloat(item.cost);
            return 'ok'
            })
            setState(prevState=>({
            ...prevState,
            menuItem: data.map(order=>({products: order.products})),
            cost: totalPrice
            }))
        })
    }, [])

    const renderItem =(menuItem)=>{
        console.log(menuItem) 
        const prodData = menuItem && menuItem.products;
        console.log(prodData)
        if(prodData && prodData.length > 0){
            return prodData.map((item)=>{
                return(
                    <div className='orderItems' key={item.id}>
                        <img src={item.image} alt={item.name}/>
                        <h3>{item.name}</h3>
                        <h4>Rs. {item.cost}</h4>
                    </div>
                )
            })
        }
    }
    
    const checkOut = () => {
        const order = {
            id: state.id,
            prodName: state.prodName,
            name: state.name,
            email: state.email,
            cost: state.cost,
            phone: state.phone,
            address: state.address,
            orderItem: state.menuItem,
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // props.history.push('/viewBooking');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };









  return (
    <>
    
        <Header/>
        <div className='container'>
            <hr/>
            <div className='panel panel-primary'>
                <div className='panel-heading'>
                    <h3>Order for {state.name}</h3>
                </div>
                <div className='panel-body'>
                    <input type='hidden' name='cost' value={state.cost}/>
                    <input type='hidden' name='id' value={state.id}/>
                    <input type='hidden' name='Product_Name' value={state.name}/>
                    <div className='row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='fname' className='control-label'>Name</label>
                            <input type='text' id='fname' className='form-control' name='name' value={state.name} onChange={handleChange}/>
                        </div>
                        <div className='form-group col-md-6'>
                            <label htmlFor='email' className='control-label'>Email</label>
                            <input type='text' id='email' className='form-control' name='email' value={state.email} onChange={handleChange}/>
                        </div>
                        <div className='form-group col-md-6'>
                            <label htmlFor='phone' className='control-label'>Phone</label>
                            <input type='text' id='phone' className='form-control' name='phone' value={state.phone} onChange={handleChange}/>
                        </div>
                        <div className='form-group col-md-6'>
                            <label htmlFor='address' className='control-label'>Address</label>
                            <input type='text' id='address' className='form-control' name='address' value={state.address} onChange={handleChange}/>
                        </div>
                    </div>
                    {renderItem(state.menuItem)}
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2>Total price is  Rs.{state.cost}</h2>
                        </div>
                    </div>
                    <button className='btn btn-success' onClick={checkOut}>Place Order</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default PlaceOrder