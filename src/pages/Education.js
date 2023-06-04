import "../scss/timeLine.scss";

function TimeLintChart(props) {
    return (
        <div className="timeLineChart" style={{ "--posX": "200px" }}>
            <div className="time">{props.time}</div>
            <div className="name">&#9679; {props.text}</div>
        </div>
    );
}

function TimeLineCircle() {
    return <div className="timeLineCircle"></div>;
}

export function TimeLineItem(props) {
    return (
        <div className="timeLineItem">
            <div className="timeLineChartEmpty" />
            <TimeLineCircle />
            <TimeLintChart {...props} />
        </div>
    );
}
export function TimeLineItem2(props) {
    return (
        <div className="timeLineItem">
            <TimeLintChart {...props} />
            <TimeLineCircle />
            <div className="timeLineChartEmpty" />
        </div>
    );
}

export function Education() {
    return (
        <div className="timeLine">
            <h1 className="title">Education</h1>
            <div className="mainLine">
                <TimeLineItem
                    time="2009-2021"
                    text="1st school of Ulaanbaatar"
                />
                <TimeLineItem2 time="2021-X" text="SICT MUST with IT major" />
            </div>
        </div>
    );
}
