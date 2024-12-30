import useGlobalStateStore from "@/states/globalstate";
import { saveAs } from "file-saver";
import { LGraph, LGraphCanvas, LiteGraph } from "litegraph.js";
import { Watch } from "@/components/litegraph/default-nodes";
import { Uj, UpdateCol } from "@/components/litegraph/custom-nodes/qsql-nodes";
import { useEffect } from "react";
import { FIXOrderStdTemplate } from "./litegraph/custom-nodes/input-nodes";

var graph = new LGraph();

function Editor() {
  const {
    clearnodes,
    loading,
    saving,
    toggleClearNodes,
    toggleLoad,
    toggleSave,
  } = useGlobalStateStore();

  function InitWorkspace() {
    var canvas = new LGraphCanvas("#simgraph", graph, { autoresize: true });
    LiteGraph.clearRegisteredTypes();
    RegisterStartupNodes();
    graph.start();
  }

  function ClearWorkspace() {
    graph.clear();
    graph.start();
    toggleClearNodes();
  }

  if (saving) {
    var workspace = JSON.stringify(graph.serialize());
    var blob = new Blob([workspace], { type: "text/json;charset=utf-8" });
    saveAs(blob, "workspace.json");
    toggleSave();
  }

  if (clearnodes) {
    ClearWorkspace();
  }

  function RegisterStartupNodes() {
    LiteGraph.registerNodeType("basic/watch", Watch);
    LiteGraph.registerNodeType(
      "input/templates/fix-std-template",
      FIXOrderStdTemplate
    );
    LiteGraph.registerNodeType("qsql/joins/uj", Uj);
    LiteGraph.registerNodeType("qsql/manipulations/updatecols", UpdateCol);
  }

  useEffect(() => {
    InitWorkspace();
  }, []);

  return (
    <>
      <canvas id="simgraph" width="1600" height="920" />
    </>
  );
}

export default Editor;
