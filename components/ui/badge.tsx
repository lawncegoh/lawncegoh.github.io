import * as React from 'react';

import { cn } from '@/lib/utils';

type Variant = 'solid' | 'outline';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export function Badge({ className, variant = 'solid', ...props }: BadgeProps) {
  const styles =
    variant === 'outline'
      ? 'border border-border text-foreground'
      : 'border-transparent bg-secondary/70 text-secondary-foreground';
  return <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold', styles, className)} {...props} />;
}
