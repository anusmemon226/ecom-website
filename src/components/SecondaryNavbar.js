import React,{useState} from "react";
import "../assets/css/Navbar.css"
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SecondaryNavbar = ()=>{
    const [showMenu,setMenu] = useState(1);

    window.onresize = ()=>{
        if(window.innerWidth<=767){
            console.log("matched")
            setMenu(0)
        }else{
            setMenu(1)
        }
    }

    const handleMenu = ()=>{
        (showMenu===0)?setMenu(1):setMenu(0);
    }
    return(
        <>
            <div className="container-fluid bg-dark">
                <div className="container px-0 text-light">
                    <div className="row">
                        <div className="all-cat-main col-12 col-lg-4 col-md-4 col-sm-12">
                            <div className="all-cat">
                                <FontAwesomeIcon icon={faBars}/>
                                <span>All CATEGORIES</span>
                                <FontAwesomeIcon icon={faCaretDown}/>
                                <div className="category-card">
                                    <ul>
                                        <li>Men's Clothing</li>
                                        <li>Women's Clothing</li>
                                        <li>Kid's Clothing</li>
                                        <li>Brand Fashion</li>
                                        <li>Luxury Brands</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 col-md-8 col-sm-12 position-relative d-flex align-item-center justify-content-end">
                            <button className="menu-btn" onClick={handleMenu}>
                                <span className="m-1">MENU</span><FontAwesomeIcon style={{fontSize:"18px"}} icon={faBars}/>
                            </button>
                            <div className="nav-links">
                                <ul style={{opacity:showMenu}}>
                                    <li>HOME</li>
                                    <li>SHOP</li>
                                    <li>COLLECTION</li>
                                    <li>BLOG</li>
                                    <li>CONTACT</li>
                                    <li>PAGES</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondaryNavbar;