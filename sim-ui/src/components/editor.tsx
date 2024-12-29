import {LGraph, LGraphCanvas} from 'litegraph.js';
import { useEffect } from 'react';

function Editor() {

    useEffect(()=> {
      var graph = new LGraph();
      var canvas = new LGraphCanvas('#mygraph', graph);
      canvas.allow_searchbox=true;
      canvas.drag_mode=true;

      graph.start();
    },[])

    return(
        <>
          <div className='bg-black  border-none'>
          <div className='grid grid-cols-1 border-none'>
            <div>
                <canvas id='mygraph' width='1280vw' height='640vh' />
            </div>
            <div>1</div>
          </div>
          </div>
        </>
    );
}

export default Editor