export const getdate =(newdate)=>{
   
    const date = new Date(newdate);
    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayIndex = date.getDay();

    // Get the date components
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // January is 0
    const monthIndex = date.getMonth();
    const day = date.getDate();

    // Format the date string
    const formattedMonth = month.toString().padStart(2, '0');
    
    const formattedDay = day.toString().padStart(2, '0');
    const dateOnly = `${weekdays[dayIndex]} ${formattedDay} ${months[monthIndex]}`;
    return dateOnly;
 

}