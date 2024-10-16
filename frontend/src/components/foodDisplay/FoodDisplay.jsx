import React, { useContext } from 'react';
import './foodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../Fooditem/Fooditem'; // تأكد من كتابة "FoodItem" بالأحرف الكبيرة

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          console.log(category, item.category); // يُظهر فئة الطعام
          // استخدم التعبير الشرطي لإرجاع FoodItem أو null
          if (category === "All" || category === item.category) {
           
             return  <FoodItem 
                key={index} id={item._id}  name={item.name} description={item.description} price={item.price} image={item.image}/>

              
            
          }
          // return null; 
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;