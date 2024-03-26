import React, { useState } from 'react';
import './header.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the close icon
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import f1 from "../../img/card3/f1.jpg"
import f2 from "../../img/card3/f2.jpg"
import f3 from "../../img/card3/f3.jpg"

import { CgLogOut } from "react-icons/cg";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [cartItems, setCartItems] = useState([]);
   

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const handleToggleCart = () => {
        setIsAdded(!isAdded);
    };

    const handleAddItem = (item) => {
        // Check if the item is already in the cart
        const isItemInCart = cartItems.includes(item);

        // If the item is not in the cart, add it
        if (!isItemInCart) {
            setCartItems([...cartItems, item]);
        }
    };

    const handleDeleteItem = (item) => {
        // Filter out the item to remove it from the cart
        const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
        setCartItems(updatedCartItems);
    };


    const handleLogout=()=>{
        localStorage.clear()
     }

 
    return (
        <>
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <div className="container mt-4">
                    <div className="logo">Furn .</div>
                    <ul className={`menu ${isOpen ? 'open' : ''}`}>
                        <li><a className='home' href="#">Home</a></li>
                        <li><a href="#">New Arrival</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <div className='icons gap-5'>
                        <i><IoIosSearch onClick={toggleSearch} /></i>
                        {showSearch && (
                            <input type="text" className="form-control" placeholder="Search" />
                        )}
                        <i><IoSettingsOutline /></i>
                        <i onClick={handleToggleCart}>
                            {/* Display the cart icon conditionally based on the isAdded state */}
                            <BsCart3 className={isAdded ? 'added' : ''} />
                        </i>

                        <i onClick={handleLogout}>
                            <CgLogOut />
                        </i>
                    </div>

                    <div className="toggle" onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} /> {/* Toggle between the bars and times icon */}
                    </div>
                </div>
            </nav>
            {/* Render the image conditionally based on the isAdded state */}
            {isAdded && (
                <div className="added-images">
                    <div className="image-card">
                        <img src={f1} alt="Added Item" onClick={() => handleAddItem(f1)} />
                        <button onClick={() => handleDeleteItem(f1)}>-</button>
                        <button onClick={() => handleDeleteItem(f1)}>+</button>
                    </div>
                    <div className="image-card">
                        <img src={f2} alt="Added Item" onClick={() => handleAddItem(f2)} />
                        <button onClick={() => handleDeleteItem(f2)}>-</button>
                        <button onClick={() => handleDeleteItem(f1)}>+</button>
                    </div>
                    <div className="image-card">
                        <img src={f3} alt="Added Item" onClick={() => handleAddItem(f3)} />
                        <button onClick={() => handleDeleteItem(f3)}>-</button>
                        <button onClick={() => handleDeleteItem(f1)}>+</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
