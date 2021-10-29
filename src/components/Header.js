// Import CSS
import './css/Header.css';
// Import major dependencies
// Import components
import Button from "./Button";
import TextBox from "./TextBox";
// Import icons
// Import API and static content

const Header = (props) => {

    return(
        <div className="header">
            <div className="header-content">
                <Button>
                    Test Button
                </Button>
                <Button>
                    Test Button
                </Button>
                <TextBox/>
            </div>
        </div>
    )
    
}

export default Header;