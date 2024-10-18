import ordermodel from "../models/ordermodel";
import usermodel from "../models/usermodel";
import Stripe from "..stripe"

const stripe =new Stripe()
// placing userorder for fronted 
const placeOrder = async (req,res) =>{
const frontend_url = "http://localhost:5173"
try {
    const neworder = new ordermodel({
        
        userId:req.body.userId,
        items:req.body.items,
        amount:req.body.amount,
        address:req.body.address
    })

    await neworder.save();
    await usermodel.findbyIdAndUpdate(req.bod.userId,{cartData:{}});
    const line_items = req.body.items.map((item)=>({
        price_data:{
            currency:"inr",
            product_data:
               { 
                name:item.name 
               },
               unit_amount:item.price*100*80
        },
        quantity:item.quantity
    }))
    line_items.push({
         price_data:{currency:"inr",
        product_data:{name:"delivery charges"},
        unit_amount:2*100*80 
    },quantity:1    
})
const session = await stripe.checkout.sessions.create({line_items:line_items,
  mode:'payment',  
success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,

cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`


})
res.json({success:true,session_url:session.url})
} catch (error) {
    console.log (error);
    res.json({success:false,message:"error"})
}}
const verifyOrder = async(req,res)=>{
    const{orderId,success} =req.body;
    try {
        if(success="true"){
            await ordermodel.findbyIdAndUpdate(orderId,{payment:"true"});
             res.json({success:"true",message:'paid'})
        }
        else 
            {await ordermodel.findbyIdAndUpdate(orderId)
            res.json({success:"false",message:'not paid'})
        }
        
             
         }

     catch (error ) {
        console.log(error);
        res.json({success:"false",message:"error"})
        
    }
}
//user orders for frontend
const userOrders=async(req,res)=>{
try {
    const orders=await ordermodel.find({userId:req.bod.userId});
    res.json({success:"true",data:orders})
} catch (error) {
    res.json({success:"false",message:"error"})
}


}
// listing orders for admin panel
const listOrders = async (req,res) => {
try {const orders = await ordermodel.find({});
res.json({success:true,data:orders})
    
} catch (error) {
    res.json({success:false,message:"error"})
    
}
}
const updateStatus=async(req,res )=>{
    try {
        await ordermodel.findbyIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:"true",message:"status updated"})
    } catch (error) {
        res.json({success:"false",message:"error"}) 
    }

}

export{placeOrder,verifyOrder,userOrders,listOrders,updateStatus}
