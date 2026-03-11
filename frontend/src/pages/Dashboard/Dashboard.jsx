import { useState, useEffect } from "react";
import UploadBox from "../../components/UploadBox/UploadBox";
import DiagramViewer from "../../components/DiagramViewer/DiagramViewer";
import ComponentList from "../../components/ComponentList/ComponentList";
import { fetchComponents } from "../../services/api";

const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComponents().then((data) => {
      setComponents(data);
      setLoading(false);
    });
  }, []);

  const handleUpload = (imageData) => {
    setImage(imageData);
    setSelectedComponent(null);
  };

  const handleReplace = () => {
    if (image?.url) URL.revokeObjectURL(image.url);
    setImage(null);
    setSelectedComponent(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-7 flex flex-col gap-5 sm:gap-6">

        
        <header className="flex items-center gap-3 pb-4 sm:pb-5 border-b border-slate-800">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-950 border border-cyan-600 
            grid place-items-center text-lg sm:text-xl shadow-lg shadow-cyan-900/30 flex-shrink-0">
            ⚡
          </div>
          <div>
            <h1 className="font-mono font-bold text-base sm:text-lg text-slate-100 tracking-tight">
              Circuit Diagram Dashboard
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Upload & Analyze Circuit Diagrams
            </p>
          </div>
        </header>

       
        <section>
          {!image ? (
            <UploadBox onUpload={handleUpload} />
          ) : (
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl 
              bg-slate-900 border border-slate-700 flex-wrap sm:flex-nowrap">
              <span className="text-lg flex-shrink-0">🖼</span>
              <span className="flex-1 font-mono text-xs sm:text-sm text-cyan-400 
                truncate min-w-0">
                {image.name}
              </span>
              <button
                onClick={handleReplace}
                className="px-3 sm:px-4 py-1.5 rounded-lg border border-slate-600 
                  text-xs sm:text-sm text-slate-400 flex-shrink-0
                  hover:border-red-600 hover:text-red-400 transition-all"
              >
                Replace Image
              </button>
            </div>
          )}
        </section>

        
        <main className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 sm:gap-5 items-start">
          <section>
            <DiagramViewer
              image={image}
              selectedComponent={selectedComponent}
            />
          </section>
          <aside>
         <ComponentList
           components={components}
           selectedId={selectedComponent?.id}
           onSelect={(comp) => setSelectedComponent(comp)}  
           loading={loading}
          />
          </aside>
        </main>

      </div>
    </div>
  );
};

export default Dashboard;