import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import { Landing } from './component/landingpage';
import { SecondPage } from './component/Secondpage';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/secondpage' element={<SecondPage/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
