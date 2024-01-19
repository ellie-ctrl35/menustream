import '../App.css';
import illustration from '../Assets/Illustration.png';
function KickStart() {
    return (
        <div className="kick_start">
            <h3>Kick Start <br />Mobile Application</h3>
            <button className="create-btn">Create App</button>
            <img className="illustration" src={illustration} alt="" />
        </div>
  );
}

export default KickStart;