import react from 'react'
import './myOrders.css' 
import { StoreContext } from '../../context/StoreContext'
const myorders=() => {
    const {url,token}=useContext(StoreContext);
    const [data,setData]=useState([]);
    const fetchOrders=async ()=>{
        const response = await axios.post(url+"/api/order/userorder",{},{Headers:{token}});
        setData(response.data.data);

    }
    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
    },[])
    return
       ( <div classname='my-orders'> 
       <h2>MY ORDERS
       </h2>
       <div className="container">
        {data.map((order,index)=>{
            return
            <div key={index}className='my-orders-order'>
                <img src={assets.parcel_icon}alt=""/>
                <p>
                    {order.items.map((items,index)=>{
                        if (index===order.items.length-1) {
                            return items.name+"x"+items.quantity
                        }
                        else{
                            return items.name+"x"+items.quantity+","
                        }

                    })}
                </p>
                  <p>${order.amount}.00</p>
                  <p> Items:{order.items.length}</p>
                  <p><span> &#x25cf;</span><b>{order.status}</b></p>
                  <button> track order</button>
            </div>        

        })}
       </div>
        </div>)

}
export default myorders