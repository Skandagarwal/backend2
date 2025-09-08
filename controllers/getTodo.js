//import the model

const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res)=>{

    try{
        //  fetch all todo item from db
        const todo = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Entre toto data id fetch",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server error",
        });
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        //ectract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});
        
        //data forgive id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found woth given ID",
            })
        }
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Entre toto data",
        })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server error",
        });
    }
}