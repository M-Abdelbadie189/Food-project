import  userModel from './../models/UserModel';

const addToCart = async(req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1
        }
        else{
            cartData[req.body.itemId]+=1
        }
        await userModel.findByIdUpdate(req.body.userId,{cartData});
        res.Json({success:true,message:"Added to cart"});
    } catch (error) {
        console.log(error);
        res.Json({success:false,message:"ERROR"})
        
    }
}
const removeFromCart = async(req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req,body.userId,{cartData});
        res.Json({succes:ftrue,message:"Removed From Cart"})
    } catch (error) {
        console.log(error);
        res.Json({success:false,message:"ERROR"})
        
    }
}
const getCart = async(req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData =await userData.cartData;
        res.Json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.Json({succes:false,message:"ERROR"})
        
    }
}
export {addToCart,removeFromCart,getCart}
