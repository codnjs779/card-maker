import React, { useRef, useState } from "react";
import Preview from "../preview/Preview";
import CreateCardTemplate from "../create_card/CreateCardTemplate";
import logo from "../../images/logo.png";
import styles from "../templateAll/Template.module.css";
import LogoutBtn from "../logout/LogoutBtn";
function Template() {
    const [userInfo, setUserInfo] = useState({ name: "", company: "", position: "", email: "", introduction: "", userImg: "", backgd: "" });
    console.log("userInfo", userInfo);
    return (
        <>
            <div className={styles.titleBox}>
                <LogoutBtn></LogoutBtn>
                <div className={styles.contents}>
                    <div>
                        <img src={logo} alt=""></img>
                    </div>
                    <h1 className={styles.businessTitle}>Business Card Maker</h1>
                </div>
            </div>
            <div className={styles.templateAll}>
                <section className={styles.createTemplate}>
                    <CreateCardTemplate userInfo={userInfo} setUserInfo={setUserInfo} />
                </section>
                <section className={styles.preview}>{userInfo && <Preview userInfo={userInfo} />}</section>
            </div>
        </>
    );
}
export default Template;
