import React, { memo, useEffect, useRef, useState } from "react";
import { ChangeState } from "../App";
import "../scss/leftBar.scss";
import data from "../json/data.json";

const DropDownChild = memo((props) => {
    const [hover, setHover] = useState("");
    return (
        <div
            className={"dropDownChild " + (props.top ? "top " : "") + hover}
            onClick={() => {
                if (!props.top) {
                    ChangeState(props.type + props.page);
                }
            }}>
            <div className={"text " + hover}>
                {props.page + (props.top ? "" : " (" + props.num + ")")}
            </div>
        </div>
    );
});

function DropDown(props) {
    const [active, setActive] = useState("");
    const re = useRef();
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(re.current.offsetHeight * (props.children.length + 1));
    }, []);
    function Main(props) {
        return (
            <div
                onClick={() => {
                    setActive(active == "" ? "active" : "");
                }}>
                <DropDownChild {...props}></DropDownChild>
            </div>
        );
    }

    return (
        <div
            ref={re}
            className={"dropDown " + active}
            style={{ "--maxHeight": height + "px" }}>
            <Main page={props.page} top />
            {props.children}
        </div>
    );
}

function ListBtn(props) {
    return (
        <div
            className="listBtn"
            onClick={() => {
                ChangeState(props.page);
            }}>
            <div className="text">{props.children}</div>
        </div>
    );
}

export function LeftBar() {
    const galleryData = [];
    let num = 0;
    for (let i in data) {
        galleryData.push(
            <DropDownChild page={i} key={num} type="G" num={data[i].length} />
        );
        num++;
    }

    return (
        <div className="leftBarParent">
            <div className="leftBar">
                <div className="main">
                    <div className="userImage"></div>
                    <div className="userName">HakuRan</div>
                    <ListBtn page="home">Home</ListBtn>
                    <DropDown page="Gallery">{galleryData}</DropDown>
                    <ListBtn page="work">Work Exp</ListBtn>
                    <ListBtn page="education">Education</ListBtn>
                    <ListBtn page="other">Other</ListBtn>

                </div>
                <div className="footer">
                    <br/>
                    <hr />
                    <div className="title">Location</div>
                    <div className="text">Ulaanbaatar, Mongolia</div>
                    <br/>
                    <div className="title">Contact</div>
                    <div className="text">&#x2709;: WBhlietue@gmail.com</div>
                    <div className="text">&#x2709;: Hakuran66@gmail.com</div>
                    <div className="text">&#9742;: +976 94xxxx30</div>
                    <div
                        className="text"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            window.open("https://wbhlietue.github.io/");
                        }}>
                        &#127760;: https://wbhlietue.github.io/
                    </div>
                    <hr/>
                    <div className="btnParent">
                        <img
                            src={require("../assets/images/githubWhite.png")}
                            onClick={()=>{
                                window.open("https://github.com/WBhlietue")
                            }}
                            class="btns"></img>
                        <img
                            src={require("../assets/images/playStore.png")}
                            onClick={()=>{
                                window.open("https://play.google.com/store/apps/developer?id=HR+Games")
                            }}
                            class="btns"></img>
                        <img
                            src={require("../assets/images/itch.png")}
                            onClick={()=>{
                                window.open("https://wbhlietue.itch.io/")
                            }}
                            class="btns"></img>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    );
}
