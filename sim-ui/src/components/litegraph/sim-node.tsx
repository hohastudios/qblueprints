import { LGraphCanvas, LGraphNode, LiteGraph, Vector2 } from "litegraph.js";
import "./sim-node.css";

export default class SimDefaultGraph extends LGraphNode {
  desc: string;
  constructor(title: string, desc: string) {
    super(title);
    this.desc = desc;
  }

  onMouseEnter(event: MouseEvent, pos: Vector2, graphCanvas: LGraphCanvas) {
    var nodeDescElement = document.createElement("div");
    nodeDescElement.id = "node_desc";
    nodeDescElement.style.cssText =
      "top:" +
      this.pos[1].toString() +
      "px;" +
      "left:" +
      this.pos[0].toString() +
      "px;";
    +"z-index:10";
    nodeDescElement.innerHTML = this.desc;
    var divElement = document.getElementById("editor-content");
    if (divElement != undefined) {
      divElement.appendChild(nodeDescElement);
    }
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
