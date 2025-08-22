const {randomUUID} =require("crypto"); 

// crypto is a built in node module that le5ts us generate a 128 bit number that 
// can later access by their id it will help me create that database with a index that can never be 
//same for two tasks 


let tasks =[


 
]; // its the array in which i will be creating my fake database 


const statuses = ["pending", "in_progress", "completed"];
const priorities = ["low", "medium", "high"];

for (let i = 1; i <= 50; i++) {
  tasks.push({
    id: String(i),
    title: `Task ${i}`,
    description: `This is task number ${i}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    priority: priorities[Math.floor(Math.random() * priorities.length)],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
}


const createTask  =(data )=>{
    const now = new Date().toISOString(); // gives me iso format dates  YYYY-MM-DD

    const task ={
        id : randomUUID(), // creates that random id 
        title :data.title , 
        description: data.description || "",
        priority : data.priority || "medium " ,
        status:data.status || "pending ",
        dueDate : data.dueDate || null ,
        createdAt : now ,
        updatedAt : now 
    }
    tasks.push(task); // push the data array i will create into that array 
    return task ; 




}

// to get that task by its generated id 
const  getTasksById =(id)=>{
    return tasks.find(t=>t.id ===id || null )
}

const updateTask =(id,updates)=>{
    //to update first i need to find that task and then update it 
    const task = tasks.find(t=>t.id===id ); 
   if(!task) return null ; 
   Object.assign(task,updates,{updatedAt:new Date().toISOString()})
   return task ; 

   // How object.assign works ?
   //it modifies  an object in place so we did not create an new array but we did is changed all the things 
   //that we need to update in that 

}

const deleteTask =(id)=>{
    //find that task by its id then get delete it from that array of data
     const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;


}

const listTasks =()=>{
    return tasks ; 
}
module.exports ={
    createTask,
    getTasksById,
    updateTask,
    deleteTask,
    listTasks
}