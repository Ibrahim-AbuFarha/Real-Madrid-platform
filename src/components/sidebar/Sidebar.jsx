import { Link } from 'react-router-dom';
import './Sidebar.css';
function Sidebar({ onCloses }) {
  return (
    <div onClick={onCloses} className="sidebar slide-right">
      <ul className="sidebar-links">
        <li className="sidebar-link">
          <Link to="/">Home</Link>
        </li>
        <li className="sidebar-link">
          <a href="#">News</a>
        </li>
        <li className="sidebar-link">
          <a href="#">Matches</a>
        </li>
        <li className="sidebar-link">
          <a href="#">Players</a>
        </li>
        <li className="sidebar-link">
          <a href="#">Club</a>
        </li>
        <li className="sidebar-link">
          <Link to="/posts">Community</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
