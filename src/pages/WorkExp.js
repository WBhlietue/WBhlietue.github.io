import { TimeLineItem, TimeLineItem2 } from "./Education";

export function WorkExperience() {
    return (
        <div className="timeLine">
            <h1 className="title">Work Experience</h1>
            <div className="mainLine">
                <TimeLineItem
                    time="2021-2023"
                    text="Mirai Arts LLC (Game Developer)"
                />
            </div>
        </div>
    );
}
