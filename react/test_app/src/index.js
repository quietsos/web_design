// // var React = require('react');
// // import React from 'react';
// // // var ReactDOM = require('react-dom');
// // import ReactDOM from 'react-dom';

// // const fname = "Md ";
// // const lname = "Shohanuzzaman";

// // var d = new Date();





// // ReactDOM.render(

//     //step-1:
//     //way of handling multiple element within render file using React.Fragment tag
//     // <div>
//     // <h1>Hello world</h1>
//     // <p>This is a paragraph.</p>
//     // <h2>What is this</h2>
//     // </div>

//     //step-2: array of an element

//     // [
//     //     <h1>This is next step</h1>,
//     //     <p> Job is about done</p>,
//     // ]
//     //
//     //step-3: react Fragment

  
//   //   <>
//   //   <h1>Hello world</h1>
//   //   <p>This is a paragraph.</p>
//   //   <h2>What is this</h2>
//   //   <h1>Netflex series:</h1>
//   //   <ol>
//   //       <li>Avengers</li>
//   //       <li>Bla Bla</li>
//   //   </ol>

//   //   <p> 1st method-My name is {fname} {lname} </p>
//   //   <p>2nd method-My name is {fname+lname}</p>
//   //   <p>3rd method-My name is {fname+" "+lname}</p>

//   //   <p>4th method-My name is {`${fname} ${lname}`}</p>
//   //   <p>{`5th method-My name is ${fname} ${lname}`}</p>

//   //   <p> My lucky number is {5+5} </p>



//   //   </>
//   //   ,
//   // document.getElementById('sohan')

  
  
//   // );

// // data transfer using pure javascript
// // var h1= document.createElement("h1");
// // h1.innerHTML = "Hay Md sohan";
// // document.getElementById('sohan').appendChild(h1);

// // ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "Hello pure react world"), document.getElementById('sohan'));



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const fname = "Md";
// const lname = "Shohanuzzaman";
// const date = new Date().toLocaleDateString(); 
// // var date = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
// const time = new Date().toLocaleTimeString();
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://www.facebook.com/";

// const title = "Awesome experience";

// const header = {
//   fontSize : '50px',
//   textTransform : 'capitalize',
//   color: 'red'


// };

// ReactDOM.render(

//   <React.Fragment>
//     <h1 className="header"> {`My name is ${fname} ${lname}`}</h1>
//     <div className="date">
//         <p> Todays date is: {date}</p>
//         <p>Current Time is : {time} </p>
//     </div>
//     <div className="img_div">
//       <img  src={img1} alt="randomImages" />
//       <img  src={img2} alt="randomImages" />
//       <a href={link} target="_blank">
//         <img  src={img3} alt="randomImages" />
//     </a>
//     </div>

//     <p style={{ fontSize: '50px', color: 'red', textTransform:'capitalize'}}>{title}</p>
//     <p style={header}>This is an object inline css practice.</p>


//   </React.Fragment>
//   ,
//   document.getElementById('sohan')



// );

// import React from 'react';
// import ReactDOM from 'react-dom';



// const wish ="Good morning";

// const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();


// ReactDOM.render(

//   <React.Fragment>

//   <div  style = {{ backgroundColor:'#FFF5EE', borderRadius:'25px', height: '100px', width: '450px', textAlign: 'left', margin: '300px 700px'}}>
//   <h1 style= {{padding:'25px',color:'}}>Hello sir: {`${wish}`}</h1>
 
//   </div>
//   <div style= {{ backgroundColor:'#FAFAD2', borderRadius:'25px', height:'100px', width:'350px', textAlign:'left', marginLeft:'700px'}}>
//   <h1 style= {{ padding: '20px'}}>{`Date is: ${date} Time is: ${time}`}</h1>
//   </div>


//   </React.Fragment>
//   ,
//   document.getElementById('sohan')

// );


import React from 'react'
import ReactDOM from 'react-dom';


let curDate = new Date(2020,11,2,22);
curDate = curDate.getHours();
let gretting = '';
const cssStyle = { 

};

if(curDate >=1 && curDate<12){
  gretting = "Good Morning";
  cssStyle.color = "green";
}
else if(curDate >= 12 && curDate <19){
  gretting = "Good Afternoon";
  cssStyle.color = "Orange";
}
else{
  gretting = "Goon Night";
  cssStyle.color = "black";
}



ReactDOM.render(
<React.Fragment>
<div style = { {backgroundColor:'white', height:"70px",width:'500px', borderRadius:'25px',margin:'200px 0px 0px 600px'}}>
<h1 style={{padding:'20px'}}><span style= {{color:'#FFA07A'}}>Hello sir,</span> <span style={cssStyle}>{gretting}</span></h1>
</div>
</React.Fragment>

,
  document.getElementById('sohan')
  );

