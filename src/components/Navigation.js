import * as Bootstrap from 'react-bootstrap';

const Navigation = () => {
    return (
        <Bootstrap.Navbar variant="dark" bg="success" expand="sm">
            <div className="container">
            <Bootstrap.Navbar.Brand href="/">WareHouse</Bootstrap.Navbar.Brand>
            <Bootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Bootstrap.Navbar.Collapse id="basic-navbar-nav">
                <Bootstrap.Nav className="ml-auto">
                    <Bootstrap.Nav.Link href="/">Home</Bootstrap.Nav.Link>
                    <Bootstrap.Nav.Link href="/favs">Favorites</Bootstrap.Nav.Link>
                    <Bootstrap.Nav.Link href="/add">Add Product</Bootstrap.Nav.Link>
                </Bootstrap.Nav>
            </Bootstrap.Navbar.Collapse>
            </div>
        </Bootstrap.Navbar>
    )
}

export default Navigation
