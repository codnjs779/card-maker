import React from "react";
import styles from "./Preview.module.css";
import logo from "../../images/logo.png";
const Preview = (userInfo) => {
    const user = userInfo.userInfo;
    console.log(user.backgd);
    return (
        <>
            <div className={styles.previewTitle}>Card Preview</div>
            <div className={styles.userInfoBox}>
                <div className={styles.userImg}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.infoTxt}>
                    <input className={styles.name} value={user.name} />

                    <input className={styles.company} value={user.company} />
                    <hr className={styles.line}></hr>
                    <input className={styles.postion} value={user.position} />
                    <input className={styles.userEmail} value={user.email} />
                    <input className={styles.Introduction} value={user.introduction} />
                </div>
            </div>
        </>
    );
};

export default Preview;
