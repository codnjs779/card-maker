import React, { useState } from "react";
// import styles from "./Login.module.css";
// import google from "../../images/google.png";
// import github from "../../images/github.png";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const Login = () => {
    const clientId = "295122653570-nieahorhcu60m461luejreholtr0e6ac.apps.googleusercontent.com";
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log("Login Success", res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log("Login Failure", res);

        setShowLogoutButton(false);
    };

    const onSignoutSuccess = () => {
        console.log("Signout");
        alert("로그아웃 완료!");
        setShowLoginButton(true);
        setShowLogoutButton(false);
        console.clear();
    };

    return (
        <>
            {showLoginButton ? <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={onLoginSuccess} onFailure={onLoginFailure} cookiePolicy={"single_host_origin"} /> : null}

            {showLogoutButton ? <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSignoutSuccess} /> : null}
        </>

        // <div className={styles.loginBox}>
        //     <div className={styles.title}>
        //         <span>
        //             <i className="fas fa-cloud"></i>
        //         </span>
        //         Login
        //         <span>
        //             <i className="fas fa-cloud"></i>
        //         </span>
        //     </div>
        //     <div className={styles.googleLogo} onClick={socialLogin_Google}>
        //         <img src={google} alt="" width="35px" />
        //     </div>

        //     <div className={styles.githubLogo} onClick={socialLogin_Github}>
        //         <img src={github} alt="" width="50px" />
        //     </div>
        // </div>
    );
};

export default Login;
