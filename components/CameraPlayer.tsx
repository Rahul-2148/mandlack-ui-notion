'use client';

export default function CameraPlayer() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-black rounded-lg overflow-hidden border border-gray-800 shadow-md">
      <video
        controls
        autoPlay
        muted
        loop
        className="w-full h-auto aspect-video object-cover"
      >
        <source src="/sample-footage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-4 py-2 bg-gray-900 text-gray-300 border-t border-gray-800 text-sm">
        <span className="whitespace-nowrap">Camera - 01</span>
        <span className="text-xs sm:text-sm text-gray-400">17/07/2023 - 01:27:37</span>
      </div>
    </div>
  );
}
