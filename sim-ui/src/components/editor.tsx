import useGlobalStateStore from "@/states/globalstate";
import { LGraph, LGraphCanvas } from "litegraph.js";
import { useEffect } from "react";

function Editor() {
  var graph = new LGraph();

  const { saving, toggleSave } = useGlobalStateStore();
  if (saving) {
    console.log(JSON.stringify(graph.serialize()));
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
