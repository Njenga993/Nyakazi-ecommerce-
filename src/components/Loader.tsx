import React from 'react';
import { Leaf } from 'lucide-react';
import '../styles/Loader.css'; // Adjust the path as necessary

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="leaf-spinner">
        <Leaf className="leaf-icon" size={48} />
      </div>
      <p className="loader-text">Loading Freshness...</p>
    </div>
  );
};

export default Loader;
