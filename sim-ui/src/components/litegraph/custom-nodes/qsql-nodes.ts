/* @description Union joins two tables
 * @returns {void}
 */
export function Uj(this: any) {
  //add some input slots
  this.addInput("table(1)", "string");
  this.addInput("table(2)", "string");
  //add some output slots
  this.addOutput("merged", "string");
}

//name to show on the canvas
Uj.title = "Union Join";

//function to call when the node is executed
Uj.prototype.onExecute = function () {
  this.setOutputData(0, "testing");
};

/* @description Updates column
 * @returns {void}
 */

export function UpdateCol(this: any) {
  //add some input slots
  this.addInput("table(1)", "string");
  //add some output slots
  this.addOutput("table(1)", "string");
}

//name to show on the canvas
UpdateCol.title = "Update Columns";

//function to call when the node is executed
UpdateCol.prototype.onExecute = function () {
  this.setOutputData(0, "testing");
};
