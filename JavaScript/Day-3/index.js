console.log('JavaScript Date Object Lab')

//Create a new Date object called `currentDate` and log the current date and time
let currentDate=new Date();
console.log(currentDate)
//Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'
// Correct function with parameter and export
export function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  }
  
  // Usage

  console.log(currentDate); // logs full Date object
  console.log(formatDate(currentDate)); // logs formatted date
  
//Create a function `getDayName` that takes a Date object and returns the day of the week as a string


function getDayName(date){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today=currentDate.getDay();
    console.log(days[today])
    
    }
    getDayName()
//Export the `formatDate` function using ESM syntax
 