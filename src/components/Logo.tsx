// Logo for ChiragHomes
// This is a React component rendering the ChiragHomes logo

interface LogoProps {
  className?: string;
  [key: string]: any;
}

export default function Logo({ className = '', ...props }: LogoProps) {
  return (
    <img
      src="/chirag-homes-logo.png"
      alt="ChiragHomes - Building Dreams, Creating Futures"
      className={`w-auto ${className}`}
      {...props}
    />
  );
}
