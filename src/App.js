import React from 'react';
// import { } from 'react-router';
import Sayfa47 from './components/sayfa1.jsx'
import Deneme from './components/deneme.jsx';
import Deneme2 from './components/deneme2.jsx';
import { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AiFillCopyrightCircle } from 'react-icons/ai'
// import { Routes } from 'react-router';
// import { Route } from 'react-router';

import { BrowserRouter, Routes, Route, Await } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Test from './pages/Test.jsx';
import Router123 from './pages/router123.jsx';
import axios from 'axios';
import Home1 from './pages/Home1.jsx';
// import NotFound from './NotFound';
const names = ["Ali", "Veli", "Ayşe", "Fatma"];// başka kaynaktan alındı map kullanımı ile ilgili
function App() {
  console.log("test12");

  return (

    <div>

      dsadsa

    </div>
  )



}


// {
// const [country, setCountry] = useState();

// useEffect(() => {
//   const getCountry = async () => {
//     const data = await axios.get('https://restcountries.com/v3.1/all')
//     setCountry(data)
//   }
//   getCountry()
// }, [])
// console.log("country", country);


// HATALI ÇALIŞIYOR
//   function Example() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//       console.log("useEffect called");
//     }, []);

//     console.log("component rendered");

//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount(count + "sealm test474747")}>Increment</button>
//       </div>
//     );
//   }

// function FavoriteColor() {
//   const [color, setColor] = useState('red');
//   return (
//     <>
//       <h1>fawori rengin  <br />{color}</h1>""
//       <br />
//       <button type='button' onClick={() => setColor('blue')}>blue</button>
//       <button type='button' onClick={() => setColor('red')}>red</button>
//       <button type='button' onClick={() => setColor('pink')}>pink</button>
//       <button type='button' onClick={() => setColor('green')}>green</button>
//     </>
//   );
// }
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<color1 />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);


//hook kullanımı 
// const [count, setCount] = useState(0)
// console.log("count", count);
// const firstRef = useRef();

//USEMEMO KONUSUNU TEKRAR ET

// const [count33, setCount33] = useState(0);
// const [text33, setText33] = useState("")

// const func = (num) => {
//   console.log("hesaplanıyor....");
//   for (let i = 0; i < 25000; i++) {
//     num += 1

//   }
//   return num
// }

// const memo = useMemo(() => func(count33), [text33])




//useefect bu konuya tekrar bakılacak
// const [test, günceltest] = useState("deneme")
// useEffect(() => {
//   günceltest("deneme güncelleidni")
// }, [])


//HOOK KULLANIMI ÖRNEK 2

// const [count47, setCount47] = useState(0);

// useEffect(() => {
//   console.log("useEffect called");
// }, []);

// console.log("component TEST2");

// //HOOK KUALLANIMI ÖRNEK 3
// const [count123, setCount123] = useState(0);
// const [text, setText] = useState("");

// useEffect(() => {
//   console.log("useEffect called");
// }, [count, text]);

// console.log("component TEST3");






//map kullanımı ile ilgili başka kaynaktan örnek
// const renderListOfNames = (names) => {
//   return names.map((name) => <li>{name}</li>);
// };
// const arr = [{ name: 'array1', id: 0 }, { name: 'array2', id: 1 }, { name: 'array3', id: 2 }]


// console.log('array:', arr);
// const test47 = "selam ben adbullah 47"
// const clickFunck = () => {
//   console.log("butona tıkladın");
//   setCount(count + 15)
// }

// const [text, setText] = useState();
// const [message, setMessage] = useState([])

// const onchangeFunc = (e) => {
//   setText(e.target.value)

// }
// const messageFunc = () => {
//   setMessage(prev => [...prev, text])
//   setText('')
// }
// console.log(message, "message");
// return (
//   // //     <div className="App">
//   // //       <div>test</div>
//   // //       <Sayfa47 abdullah={test47} />
//   // //       <Deneme />
//   // //       <Deneme2 />
//   // //       <div>{test}</div>
//   // //       {/* //map kullanımı ile ilgili başka kaynaktan örnek */}
//   // //       <div>
//   // //         <ul >{renderListOfNames(names)}</ul>
//   // //       </div>
//   // //       {
//   // //         arr.map((ar) => {
//   // //           <div key={ar.id}>{ar.name}</div>
//   // //         })
//   // //       }
//   // //       {count}

//   // //       <button onClick={clickFunck}> tıkla</button>

//   // //       {/* <div>{status} </div> */}
//   // //       <input ref={firstRef} placeholder='ara' />
//   // //       <div>
//   // //         <p>Count: {count47}</p>
//   // //         <button onClick={() => setCount47(count47 + 1)}>TEST</button>
//   // //       </div>

//   // //       <div>
//   // //         <p>Count: {count123}</p>
//   // //         <button onClick={() => setCount123(count123 + 1)}>TEST3</button>
//   // //         <input value={text} onChange={(e) => setText(e.target.value)} />
//   // //       </div>

//   // //       {/* {memo}
//   // //       <input value={text33} onchange={e => setText33(e.target.value)} placeholder='ara' /> */}

//   // //       <  AiFillCopyrightCircle />

//   // // {/* //router deneme1 */}





//   // //     </div>
//   // //ROUTER KULLANIMI FLİTRELEME YAPILDI
//   // // <>
//   // //   <div>teststssdasd</div>
//   // //   <div>teststssdasd</div>
//   // //   <BrowserRouter>
//   // //     <Routes>
//   // //       <Route path='/' element={<Home />} />
//   // //       <Route path='/test' element={<Test />} />
//   // //       <Route></Route>
//   // //     </Routes>
//   // //   </BrowserRouter>
//   // // </>
//   // // <>
//   // //   <div>teststssdasd</div>
//   // //   <div>teststssdasd</div>
//   // //   <BrowserRouter>
//   // //     <Routes>
//   // //       <Route path='/' element={<Home />} />
//   // //       <Route path='/test/:id' element={<Test />} />
//   // //       <Route path='/router123' element={<Router123 />} />

//   // //       {/* <Route path='*' element={<NotFound />} /> */}
//   // //     </Routes>
//   // //   </BrowserRouter>
//   // // </>

//   // <>
//   //   {/* //TODO APP UYGULAMSI BAŞLANGIÇ */}


//   //   <input value={text} onChange={onchangeFunc} type='text' placeholder='ekle' />
//   //   <button onClick={messageFunc}>Ekle</button>
//   //   {message?.map((msg, i) => (
//   //     <div style={{ textAlign: "center", color: "red" }} key={i}>{msg}</div>
//   //   ))}

//   // </>
//   <>
//     {/* //BASİT APİ ÖRNEĞİ */}

//     {
//       country?.data?.map((dt, i) => (
//         <div style={{ textAlign: "center" }} key={i}>{dt.name.common} </div>
//       ))
//     }




//   </>
// );
// const [country, setCountry] = useState(0)

// const decrement = () => {
//   setCountry(country - 1)
// }
// const increment = () => {
//   setCountry(country + 1)
// }

//   return (
//     <>
//       {/* {/* <div> TESTST: {<Ad2 />} </div>
//       <Ad />
//       <div><Ad3 /></div> */}

//       {/* <div style={{ : 'center' }} >
//         {/* <span onClick={decrement}>-</span>
//         <span>{country} </span>
//         <span onClick={increment}>+</span> */}
//       <p>sadas</p>
//       {/* <Home1 country={country} /> */}
//     </div > * /} */
// }

//     </>
//   );
// }
// const Ad = () => <h1>abdullah1</h1>
// const Ad2 = () => <h1>abdullah12</h1>
// const Ad3 = () => <h1>abdullah123</h1>

export default App;
