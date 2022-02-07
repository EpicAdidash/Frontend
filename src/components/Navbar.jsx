import "../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
function Navbar() {
  const s = (e) =>{
e.preventDefault()
  }
  return (
    <nav class="bg-cyan-300">
              <div class="container-fluid">
                <ul class="flex">
                <li
                  class="nav-item text-white hover:bg-violet-700 active:bg-violet-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                  <Link to="/">Home</Link>
                </li>
                <li
                  class="text-white hover:bg-violet-700 active:bg-violet-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                  <Link to="/notes">Notes</Link>
                </li>
                <li
                  class="text-white hover:bg-violet-700 active:bg-violet-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                  <Link to="/about">About</Link>
                </li>
                  </ul>
              </div>
    </nav>
  );
}
export default Navbar;
