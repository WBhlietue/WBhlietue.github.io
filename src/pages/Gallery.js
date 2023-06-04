import { GalleryCard } from "../Components/GalleryCard";
import "../scss/gallery.scss";

import datas from "../json/data.json";
import { useEffect, useState } from "react";

export function Gallery(props) {
    const data = datas[props.type];
    const d = [];
    console.log("123");
    const [da, setDa] = useState([]);
    return (
        <div className="gallery">
            {data.map((i, index) => {
                return <GalleryCard data={i} key={index} />;
            })}
        </div>
    );
}
