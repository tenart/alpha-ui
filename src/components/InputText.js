const InputText = (props) => {

    let classes = `
        h-10
        border
        border-gray-200
        bg-gray-100
        p-2
        px-3
        rounded
        w-full
    `;

    if (props.icon) {
        classes = `${classes} pl-12`
    }

    return (
        <div>  
            <input
                value={props.value}
                onChange={props.onChange}
                type={props.type}
                placeholder={props.placeholder} 
                className={classes}
            />
            {props.icon &&
                <div className="h-10 w-10 relative -mt-10 flex justify-center items-center">
                    <props.icon className="h-4 w-4 text-gray-500"/>
                </div>
            }
        </div>
    )

}

export default InputText;