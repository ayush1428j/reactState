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

import './App.css';
import React, { useState } from 'react';
function App() {
  const [color, setColor] = useState('green')
  const [width, setWidth] = useState('100px')
  const [pos,setPos]=useState('');
  const [mar,setMar]=useState('')

  return (
    <div className="App">
      <input placeholder="color" onKeyUp={(e)=>setColor(e.target.value)}/>
      <input placeholder="width" onKeyUp={(e)=>setWidth(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={()=>setPos('right')}>right</button>
      <button onClick={()=>setPos('left')}>left</button>
      <button onClick={()=>setMar('440px')}>down</button>
      <button onClick={()=>setMar('0px')}>up</button>

<h3>OUTPUT</h3>
<div className='container'><div className='box' style={{backgroundColor:color,width:width,float:pos,marginTop:mar, padding:'30px'}}/></div>


    </div>
  );
}
export default App;


