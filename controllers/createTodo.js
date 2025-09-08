//import the model

const Todo = require("../models/Todo");

exports.createTodo = async(req,res)=>{

    try{
        //extract
        const{title,description}=req.body;
        const response = await Todo.create({title,description});
        res.status(200).json(
            {
                sucess:true,
                data:response,
                message: 'Entry Created Successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}
