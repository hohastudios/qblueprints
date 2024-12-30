import useGlobalStateStore from "@/states/globalstate";
import { saveAs } from "file-saver";
import { LGraph, LGraphCanvas, LGraphNode, LiteGraph } from "litegraph.js";
import { Watch } from "@/components/litegraph/default-nodes";
import { Uj } from "@/components/litegraph/custom-nodes/qsql-nodes";
import { useEffect } from "react";

var graph = new LGraph();

function Editor() {
  const { saving, toggleSave } = useGlobalStateStore();
  if (saving) {
    var workspace = JSON.stringify(graph.serialize());
    var blob = new Blob([workspace], { type: "text/json;charset=utf-8" });
    saveAs(blob, "workspace.json");
    toggleSave();
  }

  function RegisterStartupNodes() {
    LiteGraph.registerNodeType("basic/watch", Watch);
    LiteGraph.registerNodeType("qsql/joins/uj", Uj);
  }

  useEffect(() => {
    var canvas = new LGraphCanvas("#simgraph", graph, { autoresize: true });
    LiteGraph.clearRegisteredTypes();
    RegisterStartupNodes();
    graph.start();
  }, []);

  return (
    <>
      <canvas id="simgraph" width="1600" height="920" />
    </>
  );
}

export default Editor;
