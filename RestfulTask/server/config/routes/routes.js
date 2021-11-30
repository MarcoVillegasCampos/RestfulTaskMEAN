var task = require('../../controllers/API');
module.exports = function(app){
    app.get('/',function(request,response){
    task.index(request,response);
    });

    app.get('/:id',function(request,response){
        task.getById(request,response);
    })

    app.post('/',function(request,response){
        task.postTask(request,response);
    });

    app.put('/:id',function(request,response){
        task.putTask(request,response);
    });

    app.delete('/:id',function(request,response){
        task.deleteTask(request,response);
    })
};