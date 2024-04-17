export const gettime =(time)=>{

    const date = new Date(time);
    
    // Get the time components
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    // Convert hours to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    
    // Form the time string
    const timeOnly = `${hours}:${minutes} ${ampm}`;
     return timeOnly;
 
}