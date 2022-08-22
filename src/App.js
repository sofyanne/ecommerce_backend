import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";

function App() {
  return (
      <>
        <Header></Header>
        <div className='main'>
          <SideMenu></SideMenu>
          <div className='content'>
          </div>
        </div>
      </>
  );
}

export default App;
