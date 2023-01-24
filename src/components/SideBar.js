import "../css/SideBar.css"
import { FaHome} from 'react-icons/fa';
import { FaClock} from 'react-icons/fa';
import { Link} from "react-router-dom"
const SideBar = () => {   
    return (
        <div class="sidenav">
            <Link className="links" to="/home">Dashboard {<FaHome/>}</Link>
            <Link className="links" to="/home">Next Week {<FaClock/>}</Link>
            <Link className="links" to="/home">All Tasks {<FaClock/>}</Link>
        </div>

    )
}

export default SideBar