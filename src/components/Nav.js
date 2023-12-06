
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('et-EE', options);

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 1000) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navigation-container ${isSticky ? 'sticky' : ''} title-div`}>
            <div className="info-container">
                <h2>Elav Press</h2>
                <p>{formattedDate}</p>
            </div>

            <div className="links-container">
                <Link to="/">Esileht</Link>
                {/* <Link to="/">Kunst</Link>
                <Link to="/">Äri</Link>
                <Link to="/">Poliitika</Link>
                <Link to="/">Sport</Link> */}
                <Link to="/contact">Võta ühendust</Link>
            </div>
        </div>
    );
}

export default Nav;
