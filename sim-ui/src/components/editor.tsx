import {LGraph, LGraphCanvas} from 'litegraph.js';
import { useEffect, useMemo } from 'react';

function Editor() {
    var graph = new LGraph();

    useEffect(() => {
      var canvas = new LGraphCanvas('#simgraph', graph, {autoresize:true});
      graph.start();
    },[]);
    
    return(
        <>
          <canvas id='simgraph' width='1600' height='920'/>
        </>
    );
}

export default Editor