import React from 'react';

const Skeleton = () => (
  <div style={{ padding: '100px 0', textAlign: 'center', background: '#0a0a0a', color: '#333' }}>
    <div className="w">
      <div style={{ height: '300px', background: '#111', borderRadius: '12px', animate: 'pulse 2s infinite' }}>
        <p style={{ paddingTop: '140px' }}>Loading section...</p>
      </div>
    </div>
  </div>
);

export default Skeleton;
