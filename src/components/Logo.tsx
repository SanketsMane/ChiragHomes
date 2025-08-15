// Logo for MakeMyPropertyz
// This is a React component rendering the logo as an <img> tag.

import logo from '../assets/mmp-logo.webp';

export default function Logo({ className = '', ...props }) {
  return (
    <img
      src={logo}
      alt="MakeMyPropertyz Logo"
      className={`h-10 w-auto ${className}`}
      {...props}
    />
  );
}
