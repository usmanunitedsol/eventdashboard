export default function EventTablePlaceholder() {
    return (
        <svg className="svg-placeholder-heading" xmlns="http://www.w3.org/2000/svg" width="100%" height="500px">
            <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(20)">
                    <stop offset="5%" stopColor="#eee">
                        <animate attributeName="stop-color" values="#EEEEEE; #CCCCCC; #EEEEEE" dur="2s" repeatCount="indefinite"></animate>
                    </stop>
                    <stop offset="95%" stopColor="#f6f6f6">
                        <animate attributeName="stop-color" values="#EEEEEE; #DDDDDD; #EEEEEE" dur="3s" repeatCount="indefinite"></animate>
                    </stop>
                </linearGradient>
            </defs>
            <rect fill="url(#myGradient)" width="100%" height="50px" />
           

            <rect fill="url(#myGradient)" width="100%" height="50px" y='55px' />
        

            <rect fill="url(#myGradient)" width="100%" height="50px" y='110px' />
         

            <rect fill="url(#myGradient)" width="100%" height="50px" y='165px' />
        

            <rect fill="url(#myGradient)" width="100%" height="50px" y='220px'/>
           

            <rect fill="url(#myGradient)" width="100%" height="50px" y='275px'/>
           

            <rect fill="url(#myGradient)" width="100%" height="50px" y='330px'/>
        

            <rect fill="url(#myGradient)" width="100%" height="50px" y='385px'/>

            <rect fill="url(#myGradient)" width="100%" height="50px" y='440px'/>
         
        </svg>
    )
}