import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/recipes")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) =>
                console.error("Error fetching footer data:", error)
            );
    }, []);

    return (
        <footer style={styles.footer}>
            <p style={styles.text}>© {new Date().getFullYear()} Recipe App. All rights reserved.</p>
            <p style={styles.text}>Discover delicious recipes and share your culinary creations with the world.</p>
            <div style={styles.links}>
                <a href="/privacy" style={styles.link}>Privacy Policy</a>
                <a href="/terms" style={styles.link}>Terms of Service</a>
                <a href="/about" style={styles.link}>About Us</a>
                <a href="/contact" style={styles.link}>Contact Us</a>
            </div>
            <div style={styles.links}>
                <p style={styles.text}>Follow us on:</p>
                <a href="https://facebook.com" style={styles.link} target="_blank" rel="">Facebook</a>
                <a href="https://twitter.com" style={styles.link} target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://yourwebsite.com" style={styles.link} target="_blank" rel="noopener noreferrer">Our Website</a>
                <a href="https://github.com" style={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" style={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            {data && (
                <div style={styles.text}>
                    <p>Additional Info: {data.info}</p>
                </div>
            )}
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: 'black', // Changed to a valid color
        color: '#fff',
        textAlign: 'center',
        padding: '1rem',
        marginTop: '2rem',
    },
    text: {
        margin: 0,
    },
    links: {
        marginTop: '0.5rem',
    },
    link: {
        color: '#fff',
        margin: '0 0.5rem',
        textDecoration: 'none',
    },
};

export default Footer;