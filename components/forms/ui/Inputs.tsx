import * as React from 'react';

import { InputProps, FormControlProps } from '@/lib/interfaces';

export const FormControl = ({ children, label }: FormControlProps) => {
  return (
    <div className='flex flex-col items-start mb-5 grow'>
      <label className='text-text font-medium mb-1'>{label}</label>
      {children}
    </div>
  );
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, label, ...props }, ref) => {
    return (
      <FormControl label={label}>
        <input
          type={type}
          className={`${className} border-2 border-slate-500 transition duration-2000 border-text-20 bg-transparent rounded-md p-2 w-full focus:border-sr-blue focus:outline-none`}
          {...props}
          ref={ref}
        />
      </FormControl>
    );
  }
);
