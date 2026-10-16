import React from 'react';
import { Check, X } from 'lucide-react';

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-page px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Button({ href, children, variant = 'primary', size = 'md', className = '', ...rest }) {
  const base =
    'btn-shine inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-bold tracking-tight text-center transition-[transform,background-color] duration-200 motion-safe:hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40';
  const variants = {
    primary: 'bg-accent text-dark hover:bg-accentHover shadow-lg shadow-accent/25',
    dark: 'bg-primary text-ivory hover:bg-secondary border border-accent/40',
  };
  const sizes = {
    md: 'px-6 py-4 text-[0.9rem] sm:px-7 sm:text-base',
    lg: 'px-6 py-4 text-[0.9rem] sm:px-8 sm:py-5 sm:text-lg',
    sm: 'px-5 py-3 text-sm',
    block: 'px-3 py-4 text-[0.9rem] sm:px-4 sm:text-base',
  };
  return (
    <a href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

export function H2({ children, className = '', tone = 'light' }) {
  const color = tone === 'light' ? 'text-white' : 'text-primary';
  return (
    <h2 className={`font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold leading-[1.08] ${color} ${className}`}>
      {children}
    </h2>
  );
}

export function CheckItem({ children, tone = 'light' }) {
  const ring = tone === 'light' ? 'bg-accent text-dark' : 'bg-primary text-accent';
  const text = tone === 'light' ? 'text-ivory/90' : 'text-primary/90';
  return (
    <li className="flex items-start gap-3">
      <span className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${ring}`}>
        <Check size={14} strokeWidth={3} aria-hidden="true" />
      </span>
      <span className={`text-base leading-relaxed ${text}`}>{children}</span>
    </li>
  );
}

export function XItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ivory/30 text-ivory/60">
        <X size={14} strokeWidth={3} aria-hidden="true" />
      </span>
      <span className="text-base leading-relaxed text-ivory/75">{children}</span>
    </li>
  );
}
