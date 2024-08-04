import { Schema,model } from 'mongoose';


const productSchema = new Schema({
productName :{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
}
},{
    timestamps:true
});

const productModel= model('Product',productSchema);
export default productModel;