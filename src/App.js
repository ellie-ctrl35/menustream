import './App.css';
import {useState} from 'react'; 
import logo from './IconButton.png';
import search from './magnifier.png';
import user from './user.png';
import KickStart from './components/KickStart';
import CampaignBoard from './components/CampaignBoard';
import SideBar from './components/SideBar';

function App() {
    const [count, setCount] = useState(3);
  return (
      <div className="App">
          <div className="left-side">
              <div className="nav">
                  <div className="left_nav">
                      <img className="logo" src={logo} alt="" />
                      <h1 className="title">Start.</h1>
                  </div>
                  <div className="right_nav">
                      <img className="nav_img" src={search} alt="" />
                      <img className="nav_img" src={ user } alt="" />
                      <div className="nav_count">
                          <h2 className="count">{count}</h2>
                      </div>
                  </div>
              </div>

              <div className="row1">
                  <KickStart />
                  <CampaignBoard/>
              </div>
              <div className="row1">
                
              </div>
              <div className="row1">
                
              </div>
          </div>
          <SideBar/>
    </div>
  );
}

export default App;
