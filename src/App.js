import './App.css';
import { AppRouting } from './components/AppRouting';
import { EventsExample } from './components/Events/EventsExample';
import { General } from './components/Events/General';
import { NoStopPropagation, StopPropagation } from './components/Events/Propagation';

function App() {
  return (
   <AppRouting /> 
  );
}

export default App;
