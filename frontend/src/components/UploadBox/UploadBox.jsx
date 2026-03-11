import { useState, useRef, useCallback } from "react";

const UploadBox = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFile = useCallback(
    (file) => {
      if (!file || !["image/png", "image/jpeg"].includes(file.type)) return;
      const url = URL.createObjectURL(file);
      onUpload({ file, url, name: file.name });
    },
    [onUpload]
  );

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDrop={onDrop}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      className={`flex flex-col items-center justify-center gap-3 w-full p-10 sm:p-14 
        rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200
        ${isDragging
          ? "border-cyan-400 bg-cyan-950/30 shadow-lg shadow-cyan-900/20"
          : "border-slate-700 bg-slate-900 hover:border-slate-500 hover:bg-slate-800/50"
        }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />
      <span className="text-3xl sm:text-4xl">⚡</span>
      <p className="text-sm sm:text-base font-semibold text-slate-200 text-center">
        Drop circuit diagram here
      </p>
      <p className="text-xs sm:text-sm text-slate-400 text-center">
        PNG or JPG · Click or drag to upload
      </p>
    </div>
  );
};

export default UploadBox;