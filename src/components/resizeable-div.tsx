"use client";

import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

// Make sure to use the native DOM Event types for the handler functions
type DragEventType = globalThis.MouseEvent | globalThis.TouchEvent;

export default function ResizableBottomSheet({
  children,
  initialHeight,
}: {
  children: React.ReactNode;
  initialHeight: number;
}) {
  const [height, setHeight] = useState(initialHeight);
  const [isDragging, setIsDragging] = useState(false);
  const initialYRef = useRef(0);
  const startHeightRef = useRef(initialHeight);

  // Use a function that is compatible with both native DOM and React events for convenience.
  // Note that this function now accepts a broader type.
  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    startHeightRef.current = height;
    initialYRef.current =
      "touches" in e.nativeEvent
        ? e.nativeEvent.touches[0].clientY
        : e.nativeEvent.clientY;
  };


  useEffect(() => {
    if (!isDragging) return;

    const handleNativeDragMove = (e: DragEventType) => {
      const currentY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      const deltaY = currentY - initialYRef.current;
      const newHeight = startHeightRef.current + deltaY;
      setHeight(Math.max(100, Math.min(window.innerHeight - 50, newHeight)));
    };

    const handleNativeDragEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleNativeDragMove);
    window.addEventListener('mouseup', handleNativeDragEnd);
    window.addEventListener('touchmove', handleNativeDragMove as unknown as EventListener);
    window.addEventListener('touchend', handleNativeDragEnd);

    return () => {
      window.removeEventListener('mousemove', handleNativeDragMove);
      window.removeEventListener('mouseup', handleNativeDragEnd);
      window.removeEventListener('touchmove', handleNativeDragMove as unknown as EventListener);
      window.removeEventListener('touchend', handleNativeDragEnd);
    };
  }, [isDragging]);

  const sheetClasses = clsx(
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "bg-background",
    "border-b",
    "border-border",
    "rounded-b-3xl",
    "shadow-2xl",
    !isDragging && "transition-transform duration-300 ease-in-out",
    "flex",
    "flex-col"
  );

  return (
    <div className={sheetClasses} style={{ height: `${height}px` }}>
      <div className="flex-1 overflow-auto p-4">{children}</div>
      <div
        className="w-12 h-1.5 bg-gray-600 rounded-full mb-2 mx-auto cursor-ns-resize"
        onMouseDown={onDragStart}
        onTouchStart={onDragStart}
      />
    </div>
  );
}
