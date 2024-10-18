import React from 'react'
import './Orders.css'
import {useState} from 'react '
import{toast} from 'react-toastify'
import{useEffect} from'react'
import {axios} from 'axios'
import {assets} from"../../assets/assets"
const Orders = ({url}) => {

  const [orders,setOrders] =useState([]);
  const fetchAllOrders =async ()=>{
    const response =await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOrders(response.data.success);
      console.log(response.data.success);
    }else {
      toast.error("error")
    }
   const statusHandler=async(event,orderId)=>{
     const response= await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
     })
     if (response.data.success) {
      await fetchAllOrders();
     }
   }
  }
  useEffect(()=>{
    fetchAllOrders();
  },[])
  return (
    <div classname='order add'>
      <h3>order page</h3>
      <div className="order-list"> 
        {orders.map((order,index)=>(
          <div key ={index} className="order-item">
            <img src={assets.parcel_icon} alt=""/>
           <div>
            <p classname='order-item-food'>
             {order.item.map((item,index)=>{
               if (index===order.item.length-1) {
                return item.name+" x "+item.quantity
               }
               else
               {
                return item.name+" x "+item.quantity+","
               }
             })}
            </p>
            <p className="order-item-name">{order.address.firstname+""+order.address.lastname}</p>
            <p className="order-item-adrress">
              <p>
              {order.adrress.street+","}
              </p>
              <p>
              {order.adrress.city+","+order.adrress.state+","+order.adrress.country+","+order.adrress.zipcode}
              </p>
              </p>
           </div>
           <p className="order-item-phone">{order.adrress.phone}</p>
           <p>
            items: {order.items.length}
           </p>
           <p>${order.amount}</p>
           <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
           <option value="Food processingout for deliverydeliverd">Food processingout for deliverydeliverd</option>
           <option value="out for deliverydeliverd">out for deliverydeliverd</option>
           <option value="deliverd">deliverd</option>
           </select>
          </div>
        )
        )}
      </div>
     
    </div>
  )
}

export default Orders
