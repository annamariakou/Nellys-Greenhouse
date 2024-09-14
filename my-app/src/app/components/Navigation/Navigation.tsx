
"use client"

import Link from 'next/link';
import './Navigation.css';

export default function Navigation() {
  return (
    <div className='header'>
      <p>Nelly's Greenhouse</p>
      <div className='nav'>
      <p>Home</p>
      <p>Contact</p>
      </div>
    </div>
  );
}