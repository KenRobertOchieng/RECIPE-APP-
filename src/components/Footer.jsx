import React, { useEffect, useState } from 'react';

const Footer = () => {

    return (
        <footer >
            <p >© {new Date().getFullYear()} Recipe App. All rights reserved.</p>
            <p >Discover delicious recipes and share your culinary creations with the world.</p>
            <div>
                <a href="/privacy" >Privacy Policy</a>
                <a href="/terms" >Terms of Service</a>
                <a href="/about" >About Us</a>
                <a href="/contact" >Contact Us</a>
            </div>
            <div>
                <p>Follow us on:</p>
                <a href="https://facebook.com" starget="_blank" rel="">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://yourwebsite.com"  target="_blank" rel="noopener noreferrer">Our Website</a>
                <a href="https://github.com"  target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com"  target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            {data && (
            
                    <p>Additional Info: {data.info}</p>
                
            )}
        </footer>
    );
};



export default Footer;
