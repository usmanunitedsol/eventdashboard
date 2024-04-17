export default function NumberEventPlaceholder() {
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
            <rect fill="url(#myGradient)" width="32%" height="100px" rx="25" ry="25"/>
            <rect fill="url(#myGradient)" width="32%" height="100px" x="33%" rx="25" ry="25"/>
            <rect fill="url(#myGradient)" width="32%" height="100px"  x="67%"  rx="25" ry="25"/>
          
         
        </svg>
    )
}