// hostspot component
import React from "react";

interface HotspotProps {
  yaw: number;
  pitch: number;
  children: React.ReactNode;
  // rest of the props
  title?: string;
  size?: string;
}


export default function Hotspot({
  yaw = 0,
  pitch = 0,
  children = "Hotspot",
  ...props
}: HotspotProps) {
  return (
    <div
      about='hotspot'
      title={props.title}
      className="view360-hotspot
      bg-white rounded-full shadow-lg p-2
      w-8 h-8
      flex items-center justify-center
      aspect-square
      cursor-pointer hover:shadow-xl
      transition-opacity duration-700
      hover:opacity-20
      select-none
      "
      style={{
        transform: `scale(${props.size})`,
      }}

      data-yaw={yaw}
      data-pitch={pitch}
    >
      {children}
    </div>
  );
}