import { Test1 } from "../../App";

export function Router() {
  this.screenStyle = {};
  this.pages = [];
  this.className = "";
  this.Screen = ({page}) => {
    const urlParams = new URLSearchParams(window.location.search);
    const pa = urlParams.get("page");
    let num;
    if (pa == null) {
      num = page;
    } else {
      num = this.pages.findIndex((x) => x.name === pa);
    }
    let a = this.pages[num].page;
    return <div className={this.className}>{a}</div>;
  };
}
