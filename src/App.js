// // import logo from './logo.svg';
// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// // <button style={{backgroundColor:"red",padding:"10px",marginTop:"8px",width:"120px",height:"50px",borderRadius:"12px"}}>Send</button>
// // <input type='text' placeholder='Enter your Name'></input>
// // <div className="sqr"></div>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from 'react';

// function App() {
//   const [value, setValue] = useState(0);
//   const [color,setColor] = useState();
//   const [snum,setSnum] = useState();
//   const [fnum,setFnum] = useState();
// const [result,setResult]=useState();

//   // const [dnum,setDnum] = useState();


//    return (
//      <>
//   <div>

//     <button onClick={() => setValue(value + 2)}>
//         Increment me
//       </button>
//       {value}
//       <button onClick={() => setValue(value - 2)}>
//         Decrement me
//       </button><br/><br/>




//      <input placeholder="Enter First number" name='fnum' onKeyUp={(e)=>setFnum(e.target.value)}/><br/>
//       <input placeholder="Enter Second number" name='snum' onKeyUp={(e)=>setSnum(e.target.value)}/>
//       <button onClick={()=>setResult(Number(fnum)+Number(snum))}>sum</button>
//       {result}
      
     
        

      

  
   
//      </div>
//      </>
//   );
// }
// export default App;

// import './App.css';    imp
// import React, { useState } from 'react';
// function App() {
//   const [color, setColor] = useState('green')
//   const [width, setWidth] = useState(10)
//   const [pos,setPos]=useState('');
//   const [mar,setMar]=useState('')

//   return (
//     <div className="App">
//       <input placeholder="color" onKeyUp={(e)=>setColor(e.target.value)}/>
//       <input placeholder="width" onKeyUp={(e)=>setWidth(e.target.value+'px')}/>
//       <br/>
//       <br/>
//       <button onClick={()=>setPos('right')}>right</button>
//       <button onClick={()=>setPos('left')}>left</button>
//       <button onClick={()=>setMar('440px')}>down</button>
//       <button onClick={()=>setMar('0px')}>up</button>

// <h3>OUTPUT</h3>
// <div className='container'><div className='box' style={{backgroundColor:color,width:width,float:pos,marginTop:mar, padding:'30px'}}/></div>


//     </div>
//   );
// }
// export default App;

// import './App.css';
// import React, { useState } from 'react';

// function App() {
//   let [style,setStyle]=useState('')
//   const splittedArr=style.split("=")
//    const attrKey=splittedArr[0]
//   const attrValue=splittedArr[1]
//    style={
    
//     height:"300px",
//    backgroundColor:'red',
//    width:"300px",
 
//   }


//   // console.log(splittedArr)
//   // console.log(splittedArr)
 
//   style[attrKey]=attrValue

//   console.log(style)

 
//   return (
// <>
// <input type="text" placeholder='Enter Style' onKeyUp={(e)=>setStyle(e.target.value)}/>
// <div style={style}></div>
// </>
//  );
//   }

// export default App;

// import React,{useState} from 'react';
// const App=(e)=>{
//   const funct=(e)=>{
//    setStyle(e.target.value)
//   }
//   let [style,setStyle]=useState('');
//   const splittedArr=style.split("=");
//   console.log(splittedArr)
//   style={
//     height:'300px',
//     width:'300px',
//     backgroundColor:'red'
//   }
//   console.log(style)
  
//   const attrKey=splittedArr[0]
//   const attrValue=splittedArr[1]
//   console.log(attrKey)
//   console.log(attrValue)
//   style[attrKey]=attrValue
//   console.log(style)

//   return (
//   <>
//   <input placeholder='enter=style' onKeyUp={(e)=>funct(e)}/>
//   <div style={style}></div>

  
//   </>
//   )
// }
// export default App

import './App.css';
import React, { useState } from 'react';
function App() {
  const colorMap = [{ticket: 32, backgroundColor:'red'},
  {ticket: 66, backgroundColor:'blue'},
  {ticket: 88, backgroundColor:'green'},
  {ticket: 90, backgroundColor:'pink'},
  {ticket: 100, backgroundColor:'yellow'},
  ]
  const [ticketList, setTicketList] = useState(colorMap)

  const genRandomDel=()=>{
  const tempTicketList=[...ticketList]
  const randomNum=Math.floor(Math.random() * ticketList.length) 
  console.log(randomNum)
  // tempTicketList.splice(randomNum,1)
  setTicketList(tempTicketList)
  
  if(ticketList.length==1){
    
    // tempTicketList.splice(randomNum,1)
    console.log("you are winner")
   
  }
    
    else{  
      tempTicketList.splice(randomNum,1)
      setTicketList(tempTicketList)}
    }

  return (
    <div className="App">
      {ticketList.map(item=>  <div style={{backgroundColor:item.backgroundColor}} className="Box">{item.ticket}</div>)}
      <button onClick={()=> genRandomDel()}>Winner ticket number</button>
    </div>
  );
  }
export default App;


