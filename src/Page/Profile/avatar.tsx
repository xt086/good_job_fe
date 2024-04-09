
import React from "react";
import { useDropzone } from "react-dropzone";

interface AvatarProps {
  src: string;
  onDrop: (files: File[]) => void;
}

const Ava: React.FC<AvatarProps> = ({ src, onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="w-24 h-24 rounded-full mx-auto border-2 border-dashed border-gray-300"
    >
      <input {...getInputProps()} />
      <img src={src} alt="Avatar" className="w-full h-full rounded-full" />
    </div>
  );
};

export default Ava;
