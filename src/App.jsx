import { useState } from 'react'

const DELAY = 2000;

function App() {
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState();
  const [timeing, setTimeyng] = useState();
  const [result, setResult] = useState("");
  if (!playing) {
    return (
      <div>
        <button type='button' onClick={() => {
          setPlaying(true);
          setTimeout(() => {
            setTimeyng(Date.now());
            setPosition({
              left: Math.round(Math.random() * (window.innerWidth - 300)),
              top: Math.round(Math.random() * (window.innerHeight - 300))
            });
          }, Math.round(Math.random() * DELAY));

        }}>START</button>
      </div>
    )
  }
  return (
    <div>
      {position ? (<img style={{ left: position.left, top: position.top }} id="woody" src="/Woody.png" alt="icon" onClick={() => {
        setPosition(null)
        setResult((Date.now() - timeing) / 1000 + " sec");
        setTimeout(() => {
          setTimeyng(Date.now());
          setPosition({
            left: Math.round(Math.random() * (window.innerWidth - 300)),
            top: Math.round(Math.random() * (window.innerHeight - 300))
          });
        }, Math.round(Math.random() * DELAY));
      }} />) : null}
      {result ? <div>
        Время реакции {result}
      </div> : null
       }
      
    </div>
  )
}

export default App
