import "./scss/main.scss";
import { LeftBar } from "./Components/LeftBar";
import { useState } from "react";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { WorkExperience } from "./pages/WorkExp";
import { Education } from "./pages/Education";
import { Other } from "./pages/Other";

let changeState = () => {};

export function ChangeState(value) {
    changeState(value);
}

function Main() {
    const [page, setPage] = useState("home");
    changeState = setPage;
    return (
        <div className="content">
            {page == "home" ? (
                <Home />
            ) : page[0] == "G" ? (
                <Gallery type={page.substring(1, page.length)}></Gallery>
            ) : page == "work" ? (
                <WorkExperience />
            ) : page == "education" ? (
                <Education />
            ) : page == "other" ? (
                <Other />
            ) : (
                <Home />
            )}
        </div>
    );
}

export function App() {
    return (
        <div className="main">
            <LeftBar></LeftBar>
            <Main></Main>
        </div>
    );
}
