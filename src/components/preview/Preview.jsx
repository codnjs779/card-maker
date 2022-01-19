import React from "react";
import styles from "./Preview.module.css";
import logo from "../../images/logo.png";
const Preview = (userInfo) => {
    const user = userInfo.userInfo;

    const customeStyle = { background: user.backgd };
    return (
        <>
            <h1 className={styles.previewTitle}>Card Preview</h1>
            <div className={styles.userInfoBox} style={customeStyle}>
                <div className={styles.userImg}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.infoTxt}>
                    <input disabled className={styles.name} defaultValue={user.name} />

                    <input disabled className={styles.company} defaultValue={user.company} />
                    <hr className={styles.line}></hr>
                    <input disabled className={styles.postion} defaultValue={user.position} />
                    <input disabled className={styles.userEmail} defaultValue={user.email} />
                    <input disabled className={styles.Introduction} defaultValue={user.introduction} />
                </div>
            </div>
        </>
    );
};

export default Preview;
