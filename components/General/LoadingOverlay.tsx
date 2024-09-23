// LoadingOverlay.tsx
import React from 'react';

interface LoadingOverlayProps {
  loading: boolean;
  children: React.ReactNode;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ loading, children }) => {
  return (
    <div className="relative">
      {children}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-10">
          <div className="loader">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default LoadingOverlay;
