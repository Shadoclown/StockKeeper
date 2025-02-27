import React from "react";

function Navbar() {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>StockKeeper</h1>
            <input type="text" style={styles.searchBar} placeholder="Search products, suppliers..." />
            <div style={styles.profileIcon}>👤</div>
        </nav>
    );

    const styles = {
        navbar: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 20px",
            backgroundColor: "white",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
            },
            logo: {
            fontSize: "1.5rem",
            fontWeight: "bold"
            },
            searchBar: {
            flex: 1,
            margin: "0 15px",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "5px"
            },
            profileIcon: {
            fontSize: "1.5rem",
            cursor: "pointer"
        }
    };
}

export default Navbar;
