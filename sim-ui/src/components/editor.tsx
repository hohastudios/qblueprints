import useGlobalStateStore from "@/states/globalstate";
import { saveAs } from "file-saver";
import { LGraph, LGraphCanvas } from "litegraph.js";
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

  useEffect(() => {
    var canvas = new LGraphCanvas("#simgraph", graph, { autoresize: true });
    graph.start();
  }, []);

  return (
    <>
      <canvas id="simgraph" width="1600" height="920" />
    </>
  );
}

export default Editor;
