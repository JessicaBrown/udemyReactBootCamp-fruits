import './App.css';

import foods from './foods';
import { choice, remove } from './helpers';

function App() {
  let fruit = choice(foods);
  let remaining = remove(foods, fruit);
  console.log(fruit)
  return (
    <div className="App">
      <h1>Slot Machines!</h1>
      <p>I’d like a fruit that looks like this {fruit.img}, please.</p>
      <p>Here is one {fruit.name}</p>
      <p>'Delicious! May I have another?'</p>
      <p>I’m sorry, we’re all out. We have {remaining.length} other fruit left to choose from.</p> 
    </div>
  );
}

export default App;

