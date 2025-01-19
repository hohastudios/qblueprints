import SimDefaultGraph from "../sim-node";

/* @description returns standard fix template
 *
 */
export class FIXOrderStdTemplate extends SimDefaultGraph {
  constructor() {
    super("FIX Standard Template", "Inputs a standard FIX message");
    //add some output slots
    this.addOutput("table", "string");
  }

  onExecute(): void {
    this.setOutputData(0, "select from .template.getOrder[`standard]");
  }
}
