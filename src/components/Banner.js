import { MdError } from "react-icons/md";

const Banner = (props) => {

    let classes = `
        transition-all
        duration-500
        w-full
        flex
        justify-center
        items-center
        absolute
        z-40
        bg-red-500
        text-white
        h-10
        shadow-lg
    `;

    if (props.show) {
        classes = `${classes} opacity-100 mt-0`
    } else {
        classes = `${classes} opacity-0 -mt-10`
    }

    return (
        <div className={classes}>
            <MdError className="text-white h-4 w-4 mr-2"/>
            {props.children}
        </div>
    )
}

export default Banner;