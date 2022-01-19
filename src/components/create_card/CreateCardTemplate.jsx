import React, { useRef } from "react";
import styles from "./CreateCardTemplate.module.css";

function CreateCardTemplate({ setUserInfo }, userInfo) {
    const nameRef = useRef();
    const companyRef = useRef();
    const positionRef = useRef();
    const emailRef = useRef();
    const IntroductionRef = useRef();
    const userImgRef = useRef();

    const handleChangeinfo = () => {
        const name = nameRef.current.value;
        const company = companyRef.current.value;
        const position = positionRef.current.value;
        const email = emailRef.current.value;
        const introduction = IntroductionRef.current.value;
        const userImg = userImgRef.current.value;

        setUserInfo({ ...userInfo, name, company, position, email, introduction, userImg });
    };
    const handleBgContoller = (color) => {
        const backgd = color.target.value;
    };

    return (
        <>
            <h1 className={styles.cardmaker}>Card Maker</h1>
            <div className={styles.cardTemplate}>
                <div className={styles.name}>
                    <span>이름</span>
                    <input ref={nameRef} onChange={handleChangeinfo}></input>
                </div>

                <div className={styles.company}>
                    <span>소속</span>
                    <input ref={companyRef} onChange={handleChangeinfo}></input>
                </div>

                <div className={styles.bgColor}>
                    <span className={styles.bgname}>배경</span>
                    <select onChange={(color) => handleBgContoller(color)}>
                        <option value="select">-------select-------</option>
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
                    <span>직책</span>
                    <input ref={positionRef}></input>
                </div>

                <div className={styles.email} onChange={handleChangeinfo}>
                    <span>이메일</span>
                    <input ref={emailRef} type="email"></input>
                </div>

                <div className={styles.Introduction} onChange={handleChangeinfo}>
                    <span>소개</span>
                    <input ref={IntroductionRef}></input>
                </div>

                <div className={styles.userImg} onChange={handleChangeinfo}>
                    <span>사진</span>
                    <input alt="" ref={userImgRef}></input>
                </div>
                <button type="submit" className={styles.saveBtn} onClick={handleChangeinfo}>
                    저장
                </button>
            </div>
        </>
    );
}

export default CreateCardTemplate;
