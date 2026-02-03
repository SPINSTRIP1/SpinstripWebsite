"use client";
import { ComponentPropsWithoutRef } from "react";

interface MaxWidthWrapperProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

const MaxWidthWrapper = ({
  className,
  children,
  ...props
}: MaxWidthWrapperProps) => {
  return (
    <div
      {...props}
      className={`h-full mx-auto max-w-296 w-full p-3 lg:py-5 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
