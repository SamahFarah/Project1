import userModel from "../../../DB/models/user.model.js";

export const getAll = async(req,res)=>{

    /*--find always return array :if we write find() it will return all data ,
     if we but parameter with it,it will filter the data based on this query: find({confirmEmail:true}) 
     will return just the users that confirmEmail is true::find return empty array if not find anything*/
    const users = await userModel.find();
    return res.status(200).json({message:"success",users});
}






export const getUser = async(req,res)=>{

    /*--finddOne return object we use it when we need to return one object based on condition
    findOne({_id:id}) if not find anything return : null ,we can put any cond like  findOne({email:'samah..'})
    --findById(id) just take the id .;*/
    const {id} = req.params;
    const users = await userModel.findById(id);
    return res.status(200).json({message:"success",users});

}

export const updatUser = async(req,res)=>{
/*--updateOne take first parameter is the filter (condition) 
and sec parmeter is the modified value (the update) , its modify just one doc
updateOne({confirmEmail:true},{email:email})
--updateMany its update all users that perform the condition.
((if(!user.modifiedCount>0){
    return req.status(400).json({message:"cannot update user info"});
}))
(note that update one and many just rturn info about req in postman but not return the users with there updated info)
--findByIdAndUpdate(id,{email:email}) (update based on id)return the info before updated then update them
if we want to return the updated info :we add another parameter: {new:true}.
--findOneAndUpdate({confirmEmail:true},{email:email},{new:true}) 
take any cond in the first parameter and update the user according it.
--findOneAndReplace({_id:id},{email:email},{new:true})  
((we dont use it because its replace doc with another and delete any attributes dont upate them so lose data))
.*/
const {id}=req.params;
const{email}=req.body;

const user = await userModel.findByIdAndUpdate(id,{email:email},{new:true})

return res.status(200).json({message:"success",user});
}

export const deleteUser = async(req,res)=>{

    /* --deleteOne({_id:id})
    --deleteMany({comfirmEmail:false})
    --findByIdAndDelete({_id:id}) return the  info user will delete
    --findByIdAndRemove(id) same 
    --findOneAndDelete({confirmEmail:true}) 
    */ 
    const {id}=req.params;
    const user = await userModel.deleteOne({_id:id})
    return res.status(200).json({message:"success",user});


}
