import {Link} from "react-router-dom";
function Nav(){
  
    return(
        <>
        <nav>
                <img src="/Chef With Thumbs Up, Illustration, Element, Thumbs Up PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>

                </li>
                <li>
                    <Link to={'/add'}>Add Recipe</Link>
                </li>
                <li>
                    <Link to={'/edit'}>Edit Recipe</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}
export default Nav