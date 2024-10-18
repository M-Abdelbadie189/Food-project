import mongoose from "mongoose"

const orderSchema = new mongoose.schema({
userId:{type:string,required:true},
items:{ type:array,required :true},
amount:{type:number,required:true},
address:{type:Object,required:true},
status:{type:string,default:"food processing"},
date:{type:date,default:date.now()},
payment:{type:Boolean,default:false}
})
const ordermodel = mongoose.models.order || mongoose.model("order",orderSchema)
export default ordermodel; 