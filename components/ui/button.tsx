import * as React from 'react';

import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'default' | 'sm' | 'lg' | 'icon';

const baseClasses =
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

function variantStyles(variant: Variant = 'primary') {
  switch (variant) {
    case 'secondary':
      return 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
    case 'ghost':
      return 'text-muted-foreground hover:bg-muted/60';
    case 'outline':
      return 'border border-border text-foreground hover:bg-muted/60';
    default:
      return 'bg-primary text-primary-foreground shadow hover:bg-primary/90';
  }
}

function sizeStyles(size: Size = 'default') {
  switch (size) {
    case 'sm':
      return 'h-9 px-3';
    case 'lg':
      return 'h-11 px-8';
    case 'icon':
      return 'h-10 w-10 p-0';
    default:
      return 'h-10 px-4';
  }
}

export function buttonClassName({ variant = 'primary', size = 'default' }: { variant?: Variant; size?: Size } = {}) {
  return cn(baseClasses, variantStyles(variant), sizeStyles(size));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return <button ref={ref} className={cn(buttonClassName({ variant, size }), className)} {...props} />;
  }
);
Button.displayName = 'Button';
