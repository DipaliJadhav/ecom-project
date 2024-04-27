import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const history = useNavigate();
  const user = JSON.parse(localStorage.getItem('user-info'));

  function Logout() {
    localStorage.clear();
    history('/login');
  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to="/">Navbar</Link></Navbar.Brand>
          <Nav className="me-auto nav_nvabar_wrapper">
            {
              localStorage.getItem('user-info') ?
                <>
                  <Link to="/add">Add Product</Link>
                  <Link to="/edit">Edit Product</Link>
                </>
                :
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
            }

          </Nav>
          {
            localStorage.getItem('user-info') ?
              <Nav>
                <NavDropdown title={user && user.name}>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>

                </NavDropdown>
              </Nav>
              : null
          }
        </Container>
      </Navbar>
      <h1>Ecom Project</h1>
    </div>
  );
}

export default Header;