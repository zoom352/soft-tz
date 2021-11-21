import { DndProvider } from 'react-dnd';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './components/DragDrop';


const App = () => {

  return (
    <DndProvider backend={HTML5Backend}>
    <div className='app'>
      <DragDrop />
    </div>
    </DndProvider>
  );
}

export default App;

// https://jsonplaceholder.typicode.com/posts?_limit=10