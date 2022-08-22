import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Sidemenu from "./Sidemenu/Sidemenu";

function App() {
  return (
      <>
        <Header></Header>
        <div className='main'>
          <Sidemenu></Sidemenu>
          <div className='content'>
          </div>
        </div>
      </>
  );
}

export default App;
