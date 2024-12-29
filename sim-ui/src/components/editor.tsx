import {LGraph, LGraphCanvas} from 'litegraph.js';
import { useEffect } from 'react';

function Editor() {

    useEffect(()=> {
      var graph = new LGraph();
      var canvas = new LGraphCanvas('#simgraph', graph, {autoresize:true});

      graph.start();
    },[])

    return(
        <>
          <canvas id='simgraph' width='100vh' height='100vh'/>
        </>
    );
}

export default Editor