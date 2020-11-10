import React from 'react'

let curdate = new Date(2020,11,10,2);
curdate = curdate.getHours();
let getting = '';

const cssStyle={

};

if(curdate >= 1 && curdate <= 12){
    getting = "Good Morning";
    cssStyle.color = 'green';
}

else if(curdate >12 && curdate <=20 ){
    getting = "Good Afternoon";
    cssStyle.color ='orange';
}

else{
    getting = "Good Evening";
    cssStyle.color = 'black';
}

function Wish(){
    return(
        <React.Fragment>
            <div style = {{ backgroundColor:'white', height:'80px',width:'350px',padding:'20px',borderRadius:'20px', marginLeft:'300px'}}>
                <h2> <span style = {{color:'#FF6347'}}>Hello sir,</span>  <span style={cssStyle}>{getting}</span></h2>
            </div>
        </React.Fragment>
    )
}

export default Wish;