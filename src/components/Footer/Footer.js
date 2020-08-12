import React, { useState } from 'react';

function Footer() {

    const [date] = useState(new Date().getFullYear())

    return (
        <div className="app-footer">
            <span><a href="https://coreui.io/pro/angular/">CoreUI Pro</a> © {date} creativeLabs.</span>
            <span className="ml-auto">Powered by <a href="https://coreui.io/pro/angular">CoreUI Pro for Angular</a></span>
        </div>
    )
}

export default Footer;
