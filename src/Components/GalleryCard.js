import defaultImage from "../assets/pictures/moon.png";
import "../scss/galleryCard.scss";
import githubIcon from "../assets/images/github.png";
import webIcon from "../assets/images/website.png";
import playStoreIcon from "../assets/images/playStore.png";

const pictures = require.context("../assets/pictures", true);
export function GalleryCard(props) {
    return (
        <div className="galleryCard">
            <div className="viewData">
                <img
                    className="img"
                    src={
                        props.data.image == "" ? defaultImage : pictures("./"+props.data.image+".png")
                    }
                />
                <div className="name">{props.data.name}</div>
            </div>
            <div className="info">
                <div className="description">{props.data.description}</div>
                <div className="btnList">
                    {props.data.github == "" ? (
                        <div></div>
                    ) : (
                        <a
                            href={props.data.github}
                            className="btns"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={githubIcon}></img>
                        </a>
                    )}

                    {props.data.website == "" ? (
                        <div></div>
                    ) : (
                        <a
                            href={props.data.website}
                            className="btns"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={webIcon}></img>
                        </a>
                    )}
                    {props.data.playStore == "" ? (
                        <div></div>
                    ) : (
                        <a
                            href={props.data.playStore}
                            className="btns"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={playStoreIcon}></img>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
