import Sayfa47 from './components/sayfa1.jsx'
import Deneme from './components/deneme.jsx';
import Deneme2 from './components/deneme2.jsx';
import { useEffect, useState } from 'react';
const names = ["Ali", "Veli", "Ayşe", "Fatma"];// başka kaynaktan alındı map kullanımı ile ilgili
function App() {

  //hook kullanımı 
  const [count, setCount] = useState(0)
  console.log("count", count);


  //useefect bu konuya tekrar bakılacak
  const [test, günceltest] = useState("deneme")
  useEffect(() => {
    günceltest("deneme güncelleidni")
  }, [])


  //map kullanımı ile ilgili başka kaynaktan örnek
  const renderListOfNames = (names) => {
    return names.map((name) => <li>{name}</li>);
  };
  const arr = [{ name: 'array1', id: 0 }, { name: 'array2', id: 1 }, { name: 'array3', id: 2 }]


  console.log('array:', arr);
  const test47 = "selam ben adbullah 47"
  const clickFunck = () => {
    console.log("butona tıkladın");
    setCount(count + 15)
  }
  return (
    <div className="App">
      <div>test</div>
      <Sayfa47 abdullah={test47} />
      <Deneme />
      <Deneme2 />
      <div>{test}</div>
      {/* //map kullanımı ile ilgili başka kaynaktan örnek */}
      <div>
        <ul >{renderListOfNames(names)}</ul>
      </div>
      {
        arr.map((ar) => {
          <div key={ar.id}>{ar.name}</div>
        })
      }
      {count}

      <button onClick={clickFunck}> tıkla</button>
    </div>

  );
}

export default App;
