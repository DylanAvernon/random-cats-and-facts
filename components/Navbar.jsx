function Navbar() {
    const navItems = [];
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='navbar-brand ms-3'><span className='text-warning'>Random</span> <span className='text-primary'>Facts</span> and <span className='text-danger'>Cats</span></div>
            {
                navItems.map((item, index) => {
                    return (
                        <div className='nav-item' key={index}>
                            <div className='nav-link text-white'>{item}</div>
                        </div>
                    );
                })
            }
        </nav>
    );
}