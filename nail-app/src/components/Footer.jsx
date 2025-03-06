import React from "react";
import { Container } from "react-bootstrap";
import '../styles.css'

function Footer() {
    return (
        <footer className="footer py-5 bg-dark">
            <Container>
                <p className="m-0 text-center text-white">Copyright &copy; NailedIt 2025</p>
            </Container>
        </footer>
    )
}

export default Footer;