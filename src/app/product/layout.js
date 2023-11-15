import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <h2>This is item layout</h2>
            {children}
        </div>
    );
};

export default Layout;