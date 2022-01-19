import React from "react";
import CreateCardTemplate from "../create_card/CreateCardTemplate";
import logo from "../../images/logo.png";
import styles from "../templateAll/Template.module.css";
import LogoutBtn from "../logout/LogoutBtn";
function Template(props) {
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

            <CreateCardTemplate />
        </>
    );
}
export default Template;
