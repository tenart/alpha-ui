// Import CSS
// Import major dependencies
import { useContext } from "react";
// Import components
import Theme from "./Theme";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
// Import icons
import { FaSun, FaMoon } from "react-icons/fa";
// Import API and static content

const ThemeSwitcher = (props) => {
    
    const themeContext = useContext(Theme.Context);

    const changeTheme = (index) => {
        themeContext.setTheme(Theme.list[index]);
    }

    const buttons = [];
    let active = -1;
    for(let i = 0; i < Theme.list.length; i++) {
        if (Theme.list[i].id === themeContext.theme.id && active < 0) {
            active = i;
        }
        let newButton = (
            <Button 
                key={i}
                icon={Theme.list[i].icon}
                onClick={() => {changeTheme(i)}}
            >
                {Theme.list[i].name}
            </Button>
        );
        buttons.push(newButton);
    }

    return(
        <div>
            <ButtonGroup active={active} buttons={buttons}/>
        </div>
    )

}

export default ThemeSwitcher;