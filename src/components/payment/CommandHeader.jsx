import React from 'react';

// Reusable header with Luxaris styling
export default function CommandHeader({ title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
      <h2 style={{ 
        fontSize: '2.5rem', 
        fontWeight: '300', 
        color: '#111', 
        margin: '0', 
        letterSpacing: '4px', 
        textTransform: 'uppercase' 
      }}>
        {title} <span style={{ color: '#4a0b19', fontWeight: '600' }}>{subtitle}</span>
      </h2>
      <div style={{ 
        width: '50px', 
        height: '1px', 
        backgroundColor: '#4a0b19', 
        margin: '15px auto 0 auto' 
      }}></div>
    </div>
  );
}