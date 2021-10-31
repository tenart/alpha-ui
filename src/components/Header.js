// Import CSS
import './css/Header.css';
// Import major dependencies
import React from "react";
// Import components
import Button from "./Button";
import TextBox from "./TextBox";
import ThemeSwitcher from "./ThemeSwitcher";
// Import icons
// Import API and static content

const Header = (props) => {

    return(
        <div className="header">
            <div className="header-content">
                <ThemeSwitcher/>
                <Button>
                    Test Button
                </Button>
                <TextBox/>

            </div>
        </div>
    )
    
}

export default Header;