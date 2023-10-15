
import './App.css';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Thumbnail from './components/Thumbnail';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
     {/* <Comp1/> */}
     {/* <Comp2/> */}
     {/* <Video discription="Scientiest james"/>
     <Video discription="Scientis Harry"/> */}
     <Thumbnail Title="React-Tutoria" Views="100k" time="1 month ago"/>

     <Thumbnail Title="Node.js" Views="300k" time="1 year ago"/>

     <Thumbnail Title="MongoDb" Views="600k" time="3 year ago"/>
    </div>

  );
}

export default App;
