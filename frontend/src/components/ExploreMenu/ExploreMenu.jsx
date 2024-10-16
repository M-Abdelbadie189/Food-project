import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets2'
const ExploreMenu = (Category,setCategory) => {
  return (
    <div className='explore-Menu' id = 'explore-Menu'>
      <h1> Explore our Menu</h1>
      <p className='explore-menu-text' >choose from a diverse menu featuring a delectable array of dishes. our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={Category=== item.menu_name ? "active" : ""} src={item.menu_image} alt=""/>
                    <p>{item.menu_name}</p>

                </div>
            )
        }
    )}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu