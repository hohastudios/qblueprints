export function Uj(this: any) {
  //add some input slots
  this.addInput("table", "string");
  this.addInput("table", "string");
  //add some output slots
  this.addOutput("merged", "string");
}

//name to show on the canvas
Uj.title = "Union Join";

//function to call when the node is executed
Uj.prototype.onExecute = function () {
  this.setOutputData(0, "testing");
};
