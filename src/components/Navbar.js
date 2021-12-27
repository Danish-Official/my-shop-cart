import React from 'react';
class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><i class="fas fa-cart-plus"></i> MyCart </a>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;