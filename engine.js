function run() {
    
    let input = "starting value";
    let tasks = [];
    console.log("Script began\n\n\n");
    let index = -1;

    while(input !== "quit" && input != null) {
        input = prompt("What do you wanna do mah boi?")
        switch(input) {
            case 'new':
                let task = prompt("Enter the task: ");
                tasks.push(task);
                console.log(`Task created: ${task}`);
                break;
            case 'modify':
                for(let i=0;i<tasks.length;++i) {
                    console.log(`${i} ${tasks[i]}`);
                }
                index = prompt("\nWhich task do you want to modify? ");
                if(index>=0 && index<tasks.length) {
                    let task = prompt("Enter the new task");
                    tasks.splice(index,1,task);
                    console.log(`Modified task ${index} to ${tasks[index]}`);
                }
                break;
            case 'list':
                for(let i=0;i<tasks.length;++i) {
                    console.log(`${i} ${tasks[i]}`);
                }
                break;
            case 'delete':
                for(let i=0;i<tasks.length;++i) {
                    console.log(`${i} ${tasks[i]}`);
                }
                index = prompt("Which task do you want to delete?");
                if(index>=0 && index<tasks.length) {
                    tasks.splice(index,1);
                    console.log(`Task ${index} has been deleted.`);
                }
                break;
            case 'quit':
            case null:
                alert("Alright youmma head right out");
                break;
            default:
                alert("Invalid operation bro");  
        }
    }
    console.log("\n\nEnd of script");

}