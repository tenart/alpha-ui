import { Link as RDLink, useHistory } from "react-router-dom"
import { useState, useRef } from "react";

import Button from "../components/Button";
import InputText from "../components/InputText";
import LoadingSpinner from "../components/LoadingSpinner";

import { FaUserAlt, FaLock } from "react-icons/fa";

import api from "../api";
import Banner from "../components/Banner";

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
            <Banner show={showError}>
                Invalid username/password. Please try again.
            </Banner>
            <div className="bg-gray-100 absolute h-full w-full flex flex-col items-center justify-center">
                <div className="bg-white w-80 rounded-md p-6 pt-10 shadow-lg">
                    <div className="flex justify-center">
                        <img src="assets/unc-health-logo.svg" className="w-36"/>
                    </div>
                    <div className="h-10"/>
                    <InputText 
                        icon={FaUserAlt}
                        type="text" 
                        placeholder="username" 
                        onChange={onUsernameChange}
                    />
                    <div className="h-4"/>
                    <InputText 
                        icon={FaLock}
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
                        <Button disabled={!username || !password} special className="w-full" onClick={handleLoginButton}>LOG IN</Button>
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