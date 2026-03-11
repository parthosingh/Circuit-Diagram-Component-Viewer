import { useState } from "react";

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

const DiagramViewer = ({ image, selectedComponent }) => {
  const [zoom, setZoom] = useState(1);

  const zoomIn  = () => setZoom((z) => Math.min(z + ZOOM_STEP, MAX_ZOOM));
  const zoomOut = () => setZoom((z) => Math.max(z - ZOOM_STEP, MIN_ZOOM));
  const reset   = () => setZoom(1);

  if (!image) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 
        min-h-[280px] sm:min-h-[360px] rounded-xl border border-slate-700 
        bg-slate-900 text-slate-500">
        <span className="text-4xl sm:text-5xl opacity-30">🔌</span>
        <p className="text-sm">No diagram loaded</p>
        <span className="text-xs text-slate-600">Upload an image to begin</span>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 overflow-hidden">

      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 
        border-b border-slate-700 bg-slate-800 flex-wrap">

        <button
          onClick={zoomOut}
          disabled={zoom <= MIN_ZOOM}
          className="w-8 h-8 rounded-md border border-slate-600 bg-slate-900 
            text-slate-200 text-lg grid place-items-center
            hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-950/30
            disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >−</button>

        <span className="font-mono text-xs text-slate-400 w-12 text-center">
          {Math.round(zoom * 100)}%
        </span>

        <button
          onClick={zoomIn}
          disabled={zoom >= MAX_ZOOM}
          className="w-8 h-8 rounded-md border border-slate-600 bg-slate-900 
            text-slate-200 text-lg grid place-items-center
            hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-950/30
            disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >+</button>

        <button
          onClick={reset}
          className="w-8 h-8 rounded-md border border-slate-600 bg-slate-900 
            text-slate-200 grid place-items-center
            hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-950/30 transition-all"
          title="Reset View"
        >↺</button>

        <span className="ml-auto font-mono text-xs text-slate-600 
          max-w-[120px] sm:max-w-[200px] truncate hidden sm:block">
          {image.name}
        </span>
      </div>

      <div className="overflow-auto min-h-[260px] sm:min-h-[320px] 
        max-h-[40vh] sm:max-h-[55vh] p-4 sm:p-6 flex justify-center bg-slate-950/50">
        <div
          className="relative inline-block transition-transform duration-200"
          style={{ transform: `scale(${zoom})`, transformOrigin: "center top" }}
        >
          <img
            src={image.url}
            alt="Circuit diagram"
            className="max-w-full block rounded shadow-2xl"
          />

          {selectedComponent && (
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 
              flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full
              bg-slate-950/85 backdrop-blur border border-slate-600 
              text-xs sm:text-sm font-semibold text-slate-100">
              <span style={{ color: selectedComponent.color }}>
                {selectedComponent.symbol}
              </span>
              {selectedComponent.name}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default DiagramViewer;