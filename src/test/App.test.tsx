import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('MakeMyPropertyz')).toBeInTheDocument();
  });

  it('renders the home page by default', () => {
    render(<App />);
    expect(screen.getByText('Find Your Perfect')).toBeInTheDocument();
  });
});
