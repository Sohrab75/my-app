import React, { useState } from 'react';

const MenuDisplay = ({ prodData, finalOrder }) => {
  const [menuData, setMenuData] = useState('');
  // console.log(prodData)
  const [orderId, setOrderId] = useState([]);

  const placeOrder = (id) => {
    setOrderId([...orderId, id]);
    finalOrder([...orderId, id]);
    console.log(orderId)
  };

  const removeOrder = (id, orderId, finalOrder) => {
    if (orderId.indexOf(id) > -1) {
      orderId.splice(orderId.indexOf(id), 1);
    }
    finalOrder(orderId);
    console.log(orderId)
  };

  const renderCart = (orders) => {
    if (orders) {
      return orders.map((item, index) => {
        return (
          <b key={index}>
            {item}&nbsp;
          </b>
        );
      });
    }
  };

  const renderMenu = () => {
    if (prodData) {
      return prodData.products.map((item) => {
        return (
          <div key={item.id}>
            <div className='col-md-7'>
              <b>{item.id}</b>
              <img src={item.image} style={{ height: 80, width: 80 }} alt={item.name} />&nbsp;
              {item.name} - Rs.{item.cost}
            </div>
            <div className='col-md-4'>
              <button className='btn btn-success' onClick={() => { placeOrder(item.id); }}>
                <span className='glyphicon glyphicon-plus'>Add</span>
              </button>{' '}
              &nbsp;
              <button className='btn btn-danger' onClick={() => { removeOrder(item.id, orderId, finalOrder); }}>
                <span className='glyphicon glyphicon-minus'>Remove</span>
              </button>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className='col-md-12 bg-success'>
        <h1>Item Added</h1>
        <h3>Item Number {renderCart(orderId)} Added</h3>
      </div>
      <div className='col-md-12 bg-info'>{renderMenu()}</div>
    </div>
  );
};

export default MenuDisplay;
