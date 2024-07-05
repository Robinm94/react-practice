import ReactDOM from 'react-dom';
import Pet from './Pet'
// test
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Arjun" animal="Dog" breed="German Shepard"/>
      <Pet name="Thathumae" animal="Parrot" breed="Rose Ringed Parakeets"/>
      <Pet name="Korri" animal="Chicken" breed="Kerala Chicken"/>
    </div>
  )
} 

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App/>);
