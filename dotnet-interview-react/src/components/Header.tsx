import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
      <img src="/images/logo.jpeg" alt="Site Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
      <h1 style={{ margin: 0, fontSize: '1.5em' }}>.NET Interview Questions</h1>
    </header>
  );
};

export default Header;
