import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import UserTables from './components/UserTables';
import ViewTable from './components/ViewTable';
import CreateTable from './components/CreateTable';
import UpdateTable from './components/UpdateTable';

function App() {
  return (
   <BrowserRouter>
   <div id='wrapper'>
     <Sidebar/>
     <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
     <Navbar/> 
     <Routes>
      <Route path='/user-tables' element={<UserTables/>}/>
      <Route path='/user-tables/:id' element={<ViewTable/>}/>
      <Route path='/create-userdata' element={<CreateTable/>}/>
      <Route path='/update-userdata/:id' element={<UpdateTable/>}/>
      
     </Routes>
     </div>
     </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
