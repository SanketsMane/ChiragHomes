// Logo for MakeMyPropertyz
// This is a React component rendering the logo as an <img> tag.

import logo from '../MMP LOGO.png';

export default function Logo({ className = '', ...props }) {
  return (
    <img
      src={logo}
      alt="MakeMyPropertyz Logo"
      className={`w-auto ${className}`}
      {...props}
    />
  );
}
