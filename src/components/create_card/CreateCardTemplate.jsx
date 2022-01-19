import React, { useRef, useState } from "react";
import Preview from "../preview/Preview";
import styles from "./CreateCardTemplate.module.css";

function CreateCardTemplate(props) {
    const [userInfo, setUserInfo] = useState({ name: "", company: "", position: "", email: "", introduction: "", userImg: "", backgd: "" });
    const nameRef = useRef();
    const companyRef = useRef();
    const positionRef = useRef();
    const emailRef = useRef();
    const IntroductionRef = useRef();
    const userImgRef = useRef();

    const handleChangeinfo = (color) => {
        const name = nameRef.current.value;
        const company = companyRef.current.value;
        const position = positionRef.current.value;
        const email = emailRef.current.value;
        const introduction = IntroductionRef.current.value;
        const userImg = userImgRef.current.value;
        const backgd = color.target.value;
        setUserInfo({ name, company, position, email, introduction, userImg, backgd });
    };

    return (
        <>
            <div className={styles.cardmaker}>Card Maker</div>
            <div className={styles.makerAndPreview}>
                <section className={styles.userInputForm}>
                    <div className={styles.name}>
                        <input ref={nameRef} placeholder="이름" onChange={handleChangeinfo}></input>
                    </div>

                    <div className={styles.company}>
                        <input ref={companyRef} placeholder="소속" onChange={handleChangeinfo}></input>
                    </div>

                    <div className={styles.bgColor}>
                        <select onChange={(color) => handleChangeinfo(color)}>
                            <option value="select">--select--</option>
                            <option className={styles.optionBlack} value="makerBlack">
                                Black
                            </option>
                            <option className={styles.optionWhite} value="makerWhite">
                                White
                            </option>
                            <option className={styles.optionLightPink} value="makerLightPink">
                                LightPink
                            </option>
                            <option className={styles.optionLightGrey} value="makerLightGrey">
                                LightGrey
                            </option>
                            <option className={styles.optionGrey} value="makerGrey">
                                Grey
                            </option>
                            <option className={styles.optionGreen} value="makerGreen">
                                Green
                            </option>
                            <option className={styles.optionPink} value="makerPink">
                                Pink
                            </option>
                            <option className={styles.optionShadow} value="makerShadow">
                                Shadow
                            </option>
                            <option className={styles.optionColorful} value="makerColorful">
                                Colorful
                            </option>
                            <option className={styles.optionWheat} value="makerWheat">
                                Wheat
                            </option>
                            <option className={styles.optionBlue} value="makerBlue">
                                Blue
                            </option>
                        </select>
                    </div>

                    <div className={styles.position} onChange={handleChangeinfo}>
                        <input ref={positionRef} placeholder="직책"></input>
                    </div>

                    <div className={styles.email} onChange={handleChangeinfo}>
                        <input ref={emailRef} type="email" placeholder="이메일"></input>
                    </div>

                    <div className={styles.Introduction} onChange={handleChangeinfo}>
                        <input ref={IntroductionRef} placeholder="소개글"></input>
                    </div>

                    <div className={styles.userImg} onChange={handleChangeinfo}>
                        <input alt="" ref={userImgRef} placeholder="사진"></input>
                    </div>
                    <button type="submit" className={styles.saveBtn} onClick={handleChangeinfo}>
                        저장
                    </button>
                </section>

                <section className={styles.cardPreviewPlatForm}>{userInfo && <Preview userInfo={userInfo} />}</section>
            </div>
        </>
    );
}

export default CreateCardTemplate;
