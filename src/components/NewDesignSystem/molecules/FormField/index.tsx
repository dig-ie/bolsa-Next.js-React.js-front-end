"use client";

import { ReactNode } from "react";
import { FormLabel } from "../../atoms/FormLabel";

type FormFieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

export function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <FormLabel text={label} />
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
