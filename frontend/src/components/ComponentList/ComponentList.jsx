const ComponentList = ({ components, selectedId, onSelect, loading }) => {
    return (
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-4 sm:p-5">
  
        <div className="flex items-center gap-2 mb-4">
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Detected Components
          </h2>
          <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-950 
            text-cyan-400 border border-cyan-800">
            {components.length}
          </span>
        </div>
  
        {loading ? (
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-14 rounded-lg bg-slate-800 animate-pulse" />
            ))}
          </div>
        ) : (
          <ul className="flex flex-col gap-1.5 max-h-[50vh] overflow-y-auto pr-1">
            {components.map((comp) => {
              const isActive = comp.id === selectedId;
              return (
                <li
                  key={comp.id}
                  onClick={() => onSelect(isActive ? null : comp)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg 
                    cursor-pointer transition-all duration-150 select-none
                    ${isActive
                      ? "bg-cyan-950/40 border border-cyan-700/50 shadow-sm shadow-cyan-900/20"
                      : "border border-transparent hover:bg-slate-800 hover:border-slate-700"
                    }`}
                >
                  <span
                    className="w-9 h-9 rounded-md bg-slate-950 grid place-items-center 
                      text-sm font-bold flex-shrink-0"
                    style={{ color: comp.color }}
                  >
                    {comp.symbol}
                  </span>
  
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-sm font-medium text-slate-200 truncate">
                      {comp.name}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {comp.label}
                    </span>
                  </div>
  
                  {isActive && (
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "#00d4ff", boxShadow: "0 0 6px #00d4ff" }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        )}
  
        {selectedId && (
          <button
            onClick={() => onSelect(null)}
            className="w-full mt-4 py-2 rounded-lg border border-slate-700 
              text-sm text-slate-400 hover:border-red-700 hover:text-red-400 
              transition-all"
          >
            Clear Selection
          </button>
        )}
      </div>
    );
  };
  
  export default ComponentList;