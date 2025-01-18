import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full border border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
            !!error && "border-destructive focus-visible:ring-destructive"
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-[6px] text-sm text-destructive">{error}</p>}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
