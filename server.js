const  express = require("express") //imported express 
const taskRepo =require("./repositories/taskRepo")
const app= express();  // now i can  get that express into work 

app.use(express.json()); // its a middlerware that will help us parse json data 

// to create a task 
app.post("/tasks",(req,res)=>{
    const task = taskRepo.createTask(req.body)
    res.status(201).json(task); 

})
// to get all the tasks
app.get("/tasks", (req, res) => {
    const {status ,priority,page = 1, limit = 10  }= req.query ; 
    let result = taskRepo.listTasks(); 

    //filtering 

    if(status){
        result = result.filter(t =>t.status ===status
        )
    }
    if(priority){
        result=result.filter(t=>t.priority ===priority )
    }

    // pagination == pagination is to reduce stress on server not to get evey task at once 
    const pageInt = parseInt(page,10 );
    const limitInt = parseInt(limit,10 );


    if (isNaN(pageInt) || pageInt < 1) {
  return res.status(400).json({ error: "Page must be a positive number" });
}
if (isNaN(limitInt) || limitInt < 1) {
  return res.status(400).json({ error: "Limit must be a positive number" });
}

    const startIndex = (pageInt -1 )*limitInt ; 
    const endIndex = startIndex +limitInt; 

    const paginated = result.slice(startIndex,endIndex); 

    res.json(
        {
            page:pageInt , 
            limit:limitInt,
            total:result.length,
            tasks:paginated 
        }
    ); 
});
//to get only one task by id 
app.get("/tasks/:id",(req,res)=>{
    const task = taskRepo.getTasksById(req.params.id); 
    if(!task){
        return res.status(404).json({
            error:"Task not Found "
        })
    }
    res.json(task); 
})
// update a task by id 
app.patch("/tasks/:id",(req,res)=>{
    const updated = taskRepo.updateTask(req.params.id,req.body);
    if(!updated){
        return res.status(404).json({
            error:"task not found"
        })
    } 
    res.json(updated); 

})
//delete a task by id 
app.delete("/tasks/:id",(req,res)=>{
    const success = taskRepo.deleteTask(req.params.id);
    if(!success){
        return res.status(404).json({
            error:"Task not found "
        })
    }
    res.status(204).send(); //204 is useed to tell that the task was deleted 
})


 

app.listen(3000,()=>console.log("Server is running on localhost"))

