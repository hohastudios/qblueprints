import { LGraphCanvas, LGraphNode, LiteGraph, Vector2 } from "litegraph.js";
import "./sim-node.css";

export default class SimDefaultGraph extends LGraphNode {
  desc: string;
  constructor(title: string, desc: string) {
    super(title);
    this.desc = desc;
  }

  onMouseEnter(event: MouseEvent, pos: Vector2, graphCanvas: LGraphCanvas) {
    var para = document.createElement("div");
    para.id = "node_desc";
    para.style.cssText =
      "top:" +
      event.clientY.toString() +
      "px;" +
      "left:" +
      event.clientX.toString() +
      "px;";
    +"z-index:10";
    para.innerHTML = this.desc;
    document.getElementById("editor-content").appendChild(para);
  }

  onMouseLeave(
    event: MouseEvent,
    pos: Vector2,
    graphCanvas: LGraphCanvas
  ): void {
    const divs = document.querySelectorAll("#node_desc");
    divs.forEach((div) => div.remove());
  }
}
