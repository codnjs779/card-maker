import React, { useState } from "react";
import styles from "./LogoutBtn.module.css";
import { useNavigate } from "react-router-dom";
import { setPersistence, signInWithRedirect, inMemoryPersistence } from "firebase/auth";
import { googleProvider, githubProvider } from "../../config/auth";
import { authentication } from "../../config/firebase-config";

function LogoutBtn() {
    const navigate = useNavigate();
    const [account, setAccount] = useState();
    const logoutBtnHandler = (provider) => {
        setPersistence(authentication, inMemoryPersistence)
            .then(() => {
                setAccount({ provider });
                console.log(account);
            })
            .then(() => {
                navigate("/");
                return signInWithRedirect(authentication, provider);
            })
            .catch((error) => {
                console.log("err", error);
            });
    };

    return (
        <>
            <button className={styles.logoutBtn} onClick={() => logoutBtnHandler(googleProvider)}>
                Logout
            </button>

            {/* <button className={styles.logoutBtn} onClick={() => logoutBtnHandler(githubProvider)}>
                Logout
            </button> */}
        </>
    );
}

export default LogoutBtn;
