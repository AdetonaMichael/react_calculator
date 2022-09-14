import logo from './logo.svg';
import './App.css';
import './calStyles.css';

function App() {
  return (
    <div className="App">
      <div id='header'><h3>Ultimate Calculatora</h3></div>
       <div className='calculator-grid'>
           <div className='output'>
               <div className='previous-operand'>223,232.5</div>
               <div className='current-operand'>22.232</div>
           </div>
           <button className='span-two'>AC</button>
           <button>DEL</button>
           <button>/</button>
           <button>1</button>
           <button>2</button>
           <button>3</button>
           <button>*</button>
           <button>4</button>
           <button>5</button>
           <button>6</button>
           <button>+</button>
           <button>7</button>
           <button>8</button>
           <button>9</button>
           <button>-</button>
           <button>.</button>
           <button>0</button>
           <button className='span-two'>=</button>
       </div>
    </div>
  );
}

export default App;
