var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports={
    index:function(request,response){
        Task.find({},function(err,allTasks){
            if(err){
              
                response.json({
                    message:"Error Retriving all Tasks",
                    error:err
                });
            }
            else{
         
                response.json({
                    message:"All Tasks Successfuly Retrived",
                    Tasks:allTasks
                })
            }

        });
    },

    getById:function(request,response){
        Task.findOne({_id:request.params.id},function(err,task){
            if(err){
              
                response.json({
                    message:"error retriving single task",
                    error:err
                });
            }
            else{
       
                response.json({
                    message:"Single task retrieved",
                    data:task
                });
            }
        });
    },

    postTask:function(request,response){
        var add = new Task({
            title:request.body.title,
            description:request.body.description,
            completed:request.body.completed
        });

        add.save(function(err,newTask){
            if(err){
          
                response.json({
                    message:"error adding task",
                    error:err
                })
            }
            else{
          
                response.json({
                    message:"task added successfully",
                    data:newTask
                })
            }
        });
    },

    putTask:function(request,response){
        Task.findByIdAndUpdate({_id:request.params.id},{
            $set:{
                title:request.body.title,
                description:request.body.description,
                completed:request.body.completed
            }
        },function(err,updatedTask){
            if(err){

                response.json({
                    message:"Error updating task",
                    error:err
                });
            }
            else{
  
                response.json({
                   message:"Task has been updated",
                   data:updatedTask 
                })
            }
        });

    },

    deleteTask:function(request,response){
        Task.findOneAndRemove({_id:request.params.id},function(err){
            if(err){
     
                response.json({
                    message:"error deleting task",
                    error:err
                })
            }
            else{
     
                response.json({
                    message:"task deleted"
                })
            }
        })
    }



};