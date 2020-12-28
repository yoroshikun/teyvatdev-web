import React, { InputHTMLAttributes, RefObject } from 'react';
import { FieldError } from 'react-hook-form';

interface Props {
  label: string;
  error?: FieldError;
  errorMessage?: string;
  required?: boolean;
}

const Input = React.forwardRef<
  HTMLInputElement,
  Props & InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      label,
      name,
      error,
      required,
      errorMessage,
      ...props
    }: Props & InputHTMLAttributes<HTMLInputElement>,
    ref: RefObject<HTMLInputElement>,
  ) => {
    const labelId = name + '-label';

    return (
      <div className="my-2">
        <label
          className="font-bold text-md"
          title={label}
          id={labelId}
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className={`my-2 block w-full px-2 border-0 border-b-2 border-secondary focus:ring-0 focus:border-primary bg-secondary placeholder-primary-dark ${
            error && `focus:border-error`
          }`}
          name={name}
          ref={ref}
          placeholder={label}
          aria-labelledby={labelId}
          aria-label={label}
          required={required}
          title={label}
          {...props}
        />
        {error && <span className="text-error">{errorMessage}</span>}
      </div>
    );
  },
);

export default Input;
