import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function AppNavbar() {
  const state = useSelector((state) => state.cart);
  let tot = 0;
  state.forEach((el) => {
    tot += el.qnt;
  });

  return (
    <>
      <Navbar relative="top" bg="light" expand="lg" style={{ padding: "15px" }}>
        <Container>
          <Link to="/" className="navbar-brand">
            Diwan-Shop
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/products">
                Products
              </Link>
              <Link className="nav-link" to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                {tot}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default AppNavbar;
