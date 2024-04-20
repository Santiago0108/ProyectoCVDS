
import HeaderComponent from './components/HeaderComponent'
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import LeftComponent from './components/LeftComponent';
import RightComponentCalendar from './components/RightComponentCalendar';
import RightComponentCommunity from './components/RightComponentCommunity';
import CenterdCloset from './components/CenteredCloset';
function App() {
  return (
    <div>  
    <BrowserRouter>
      <HeaderComponent/>                
      <LeftComponent/> 
      <CenterdCloset/>
      <RightComponentCalendar />   
      <RightComponentCommunity /> 
    </BrowserRouter>
  </div>
)
}

export default App;
