import { LGraphNode } from "litegraph.js";

//Watch a value in the editor

export class Watch extends LGraphNode {
  title = "Watch";
  desc = "Show value of input";
  value = 0;

  constructor() {
    super();
    this.size = [60, 30];
    this.addInput("value", "", { label: "" }); // api requires 0 as generic type
  }

  override onExecute() {
    if (this.inputs[0]) {
      this.value = this.getInputData(0);
    }
  }

  valueToString(o: any): string {
    if (o == null) {
      return "null";
    } else if (o.constructor === Number) {
      return o.toFixed(3);
    } else if (o.constructor === Array) {
      var str = "[";
      for (var i = 0; i < o.length; ++i) {
        str += this.valueToString(o[i]) + (i + 1 != o.length ? "," : "");
      }
      str += "]";
      return str;
    } else {
      return String(o);
    }
  }

  onDrawBackground(ctx: any) {
    //show the current value
    this.inputs[0].label = this.valueToString(this.value);
  }
}
