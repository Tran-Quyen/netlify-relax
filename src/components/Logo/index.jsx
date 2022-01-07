import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo-content">
        Relax
      </Link>
    </div>
  );
};

export default Logo;
