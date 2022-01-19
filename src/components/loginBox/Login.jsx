import React from "react";
import { useNavigate } from "react-router-dom";
//img & css
import styles from "./Login.module.css";
import google from "../../images/google.png";
import github from "../../images/github.png";

//login
import { authentication } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { googleProvider, githubProvider } from "../../config/auth";

const Login = () => {
    const navigate = useNavigate();
    const signHandler = (provider) => {
        signInWithPopup(authentication, provider)
            .then((res) => {
                navigate("/template");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={styles.loginBg}>
            <div className={styles.loginBox}>
                <div className={styles.title}>
                    <span>
                        <i className="fas fa-cloud"></i>
                    </span>
                    Login
                    <span>
                        <i className="fas fa-cloud"></i>
                    </span>
                </div>
                <div className={styles.googleLogo} onClick={() => signHandler(googleProvider)}>
                    <img src={google} alt="" width="35px" />
                </div>

                <div className={styles.githubLogo} onClick={() => signHandler(githubProvider)}>
                    <img src={github} alt="" width="50px" />
                </div>
            </div>
        </div>
    );
};

export default Login;
