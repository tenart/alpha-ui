// Import major dependencies
import { useState } from "react";
// Import components
// Import icons
// Import API

const TextBox = (props) => {

    const [focus, setFocus] = useState(false);

    const onFocus = () => {
        setFocus(true);
        if (props.onFocus) props.onFocus();
    }

    const onBlur = () => {
        setFocus(false);
        if (props.onBlur) props.onBlur();
    }

    let className = "text-box " + props.className;
    if (props.icon) {
        className = "has-icon " + className;
    }

    return (
        <div>  
            <input
                value={props.value}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={props.onChange}
                type={props.type}
                placeholder={props.placeholder} 
                className={className}
            />
            {props.icon &&
                <div className="h-10 w-10 relative -mt-10 flex justify-center items-center">
                    <props.icon className={`h-4 w-4 ${focus ? "text-gray-500": "text-gray-400"}`}/>
                </div>
            }
        </div>
    )

}

export default TextBox;