import useGlobalStateStore from "@/states/globalstate";
import { saveAs } from "file-saver";
import { LGraph, LGraphCanvas, LiteGraph } from "litegraph.js";
import { Watch } from "@/components/litegraph/default-nodes";
import { Uj, UpdateCol } from "@/components/litegraph/custom-nodes/qsql-nodes";
import { useEffect } from "react";
import { FIXOrderStdTemplate } from "./litegraph/custom-nodes/input-nodes";
import "./editor.css";
import { useWindowSize } from "@uidotdev/usehooks";

var graph = new LGraph();

function Editor() {
  function setLGDefaults() {
    LiteGraph.release_link_on_empty_shows_menu = true;
    LiteGraph.dialog_close_on_mouse_leave = true;
  }

  const {
    clearnodes,
    loading,
    saving,
    toggleClearNodes,
    toggleLoad,
    toggleSave,
  } = useGlobalStateStore();

  function InitWorkspace() {
    var canvas = new LGraphCanvas("#simgraph", graph);
    setLGDefaults();
    canvas.allow_searchbox = true;

    //LiteGraph.clearRegisteredTypes();
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

  if (loading) {
    toggleLoad();
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

  useWindowSize();

  return (
    <>
      <canvas
        id="simgraph"
        width={parent.innerWidth - 5}
        height={parent.innerHeight - 40}
      >
        Your browser does not support canvas
      </canvas>
    </>
  );
}

export default Editor;
