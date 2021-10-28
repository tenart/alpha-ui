// Import major dependencies
import { useHistory } from "react-router-dom"
import { useState } from "react";
import { Helmet } from 'react-helmet';
// Import components
import Banner from "../components/Banner";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import LoadingSpinner from "../components/LoadingSpinner";
// Import icons
import { FaUserAlt, FaLock, FaChevronRight } from "react-icons/fa";
// Import API
import api from "../api";

const AuthView = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const history = useHistory();

    const onUsernameChange = (e) => {
        let value = e.target.value;
        setUsername(value);
        setShowError(false);
    }

    const onPasswordChange = (e) => {
        let value = e.target.value;
        setPassword(value);
        setShowError(false);
    }

    const handleLoginButton = () => {
        setLoading(true);
        const user = {
            name: username,
            password: password,
        }
        api.put_login(user, onSuccess);
    }

    const onSuccess = (data) => {
        console.log(data);
        setLoading(false);
        if (data.result) {
            history.push("/dashboard");
        } else {
            setShowError(true);
        }
    }

    return(
        <>  
            <Helmet>
                <title>SIMP | Log In</title>
            </Helmet>
            <Banner show={showError}>
                Invalid username/password. Please try again.
            </Banner>
            <div className="bg-gray-100 absolute h-full w-full flex flex-col items-center justify-center">

                <div className="bg-white w-80 rounded-md p-6 shadow-lg">
                    <div className="h-10"/>
                    <div className="flex justify-center">
                        <img src="assets/unc-health-logo.svg" className="w-36"/>
                    </div>
                    <div className="h-10"/>
                    <TextBox 
                        icon={FaUserAlt}
                        className="w-full"
                        type="text"
                        placeholder="username" 
                        onChange={onUsernameChange}
                    />
                    <div className="h-3"/>
                    <TextBox 
                        icon={FaLock}
                        className="w-full"
                        type="password" 
                        placeholder="password" 
                        onChange={onPasswordChange}
                    />
                    <div className="h-6"/>
                    {loading ? 
                        <div className="w-full flex justify-center items-center h-10">
                            <LoadingSpinner/>
                        </div>
                        :
                        <Button 
                            disabled={!username || !password}  
                            className="special w-full font-bold" 
                            icon={FaChevronRight}
                            onClick={handleLoginButton}>
                            LOG IN
                        </Button>
                    }
                    <div className="h-4"/>
                    <div className="text-center">
                        <p className="text-sm underline text-theme hover:text-carolina cursor-pointer">Forgot Password?</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AuthView;