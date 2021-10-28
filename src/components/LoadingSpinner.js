import { CgSpinner } from "react-icons/cg";

const LoadingSpinner = (props) => {

    return (
        <div className="w-8 h-8 animate-spin">
            <CgSpinner className="text-theme w-full h-full"/>
        </div>
    )

}

export default LoadingSpinner;