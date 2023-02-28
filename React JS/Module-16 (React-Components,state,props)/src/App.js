import "./App.css";
import ClassBasedComponent from "./components/ClassBasedComponent";
import FunctionComponent from "./components/FunctionComponent";
import Intprop from './components/props'
import State from './components/state'


function App() {
  return (
    <>
      <ClassBasedComponent name="RAJ MORADIYA" />
      <FunctionComponent />
      <Intprop name="RD MORDAIYA" />
      <State />
    </>
  );
}

export default App;
