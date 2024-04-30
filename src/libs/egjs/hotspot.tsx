// hostspot component
interface HotspotProps {
  yaw: number;
  pitch: number;
  children: React.ReactNode;
}


export default function Hotspot({
  yaw = 0,
  pitch = 0,
  children = "Hotspot"
}: HotspotProps) {
  return (
    <div
      className="view360-hotspot
      bg-white rounded-full shadow-lg p-2
      w-8 h-8
      flex items-center justify-center
      aspect-square
      cursor-pointer hover:shadow-xl
      transition-opacity duration-700
      hover:opacity-20
      "
      data-yaw={yaw}
      data-pitch={pitch}
    >
      {children}
    </div>
  );
}