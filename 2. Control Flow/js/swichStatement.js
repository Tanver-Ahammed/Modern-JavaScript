// swich 
console.log(`You select first letter of divition in Bangladesh.
Your will see the full name of Divition.`)

var choice = prompt("Enter the first letter of divition (lower case):")
var text = null;

// start swich statement
switch (choice) {
    case "d":
        text = "Dhaka";
        break;

    case "c":
        text = "Chittagong";
        break;
    
    case "k":
        text = "Khuluna";
         break;
             
    case "r":
        text = "Rajshahi";
        break;
            
    case "b":
    text = "Barishal";
    break;
                
    case "s":
        text = "Sylhet";
        break;
                    
    case "ra":
        text = "Rangpur";
        break;
                        
    case "m":
        text = "Mymonsingh";
        break;

    default:
        text = "Your chice is wrong!!";
        break;
}

console.log(`Divition Name is: ${text}`)