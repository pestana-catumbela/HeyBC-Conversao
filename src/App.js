import React, {useState} from 'react';
import Conv from './components/conversor';
import './App.css';

function App(){
  const [de, setDe] = useState('');
  const [para, setPara] = useState('');

  return(
    <>
      <section className="parentElement">
        <div className="childElement">
          <div className="title">
            <h2>HeyBC</h2>
            <h4>conversão</h4>
          </div>

          <form className="formElement">
            <input type="text" placeholder="código moeda1" className="moeda1" onChange={(e) => setDe(e.target.value)} required/>
            <input type="text" placeholder="código moeda2" className="moeda2" onChange={(e) => setPara(e.target.value)} required/>
          </form>

            <div>
              <Conv moeda1={de} moeda2={para} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
