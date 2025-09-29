import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <>
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to ="/" className="nav-link px-2 text-body-secondary">Home</Link>
            </li>
            <li className="nav-item">
              <Link to ="/" className="nav-link px-2 text-body-secondary">Book</Link>
            </li>
            <li className="nav-item">
              <Link to ="/" className="nav-link px-2 text-body-secondary">Team</Link>
            </li>
            <li className="nav-item">
              <Link to ="/" className="nav-link px-2 text-body-secondary">Contact</Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2025 NF Academy creates By Siti Sa'diyah</p>
        </footer>
        </>
    )
}