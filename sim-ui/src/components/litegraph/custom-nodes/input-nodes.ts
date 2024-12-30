/* @description Union joins two tables
 * @returns {void}
 */
export function FIXOrderStdTemplate(this: any) {
  //add some output slots
  this.addOutput("table", "string");
}

//name to show on the canvas
FIXOrderStdTemplate.title = "FIX Order Template";

//function to call when the node is executed
FIXOrderStdTemplate.prototype.onExecute = function () {
  this.setOutputData(0, "select from .template.getOrder[`standard]");
};
