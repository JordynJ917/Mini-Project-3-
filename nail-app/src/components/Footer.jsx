import React from "react";
import { Container } from "react-bootstrap";
import './styles/footer.css'

function Footer() {
    return (
        <Container fluid>
            <footer className="footer py-5 bg-dark">
                
                    <p className="m-0 text-center text-white">Copyright &copy; NailedIt 2025</p>
            </footer>    
        </Container>
    )
}

export default Footer;