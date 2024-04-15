import React, { HTMLAttributes, InputHTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  InputProps?: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
  helperText?: string;
  helperTextProps?: HTMLAttributes<HTMLHeadingElement>;
  multiline?: boolean;
}

export function OutlinedTextField({ InputProps, label, helperText, helperTextProps, multiline, ...props }: Props) {
  return (
    <div {...props} className={`flex gap-1 flex-col w-full ${props.className}`}>
      {label && (
        <label htmlFor={InputProps?.id} className="text-[.9rem] text-[#555]">
          {label}
        </label>
      )}

      {multiline ? (
        <textarea
          {...InputProps}
          className={`w-full h-[150px] p-2 outline-none focus:border-main text-[.9rem] rounded-md border-[1.5px] resize-none ${InputProps?.className}`}
        />
      ) : (
        <input
          {...InputProps}
          className={`w-full p-2 outline-none focus:border-main text-[.9rem] rounded-md border-[1.5px] ${InputProps?.className}`}
        />
      )}

      {helperText && (
        <p {...helperTextProps} className={`pl-2 text-red-500 text-[.8rem] ${helperTextProps?.className}`}>
          {helperText}
        </p>
      )}
    </div>
  );
}

export function UnderlinedTextField({ InputProps, label, helperText, helperTextProps, multiline, ...props }: Props) {
  return (
    <div {...props} className={`flex gap-1 flex-col w-full ${props.className}`}>
      {label && (
        <label htmlFor={InputProps?.id} className="text-[.9rem] text-[#555]">
          {label}
        </label>
      )}

      {multiline ? (
        <textarea
          {...InputProps}
          className={`w-full h-[150px] p-2 outline-none focus:border-main text-[.9rem] transition duration-200 border-b-[1.5px] resize-none ${InputProps?.className}`}
        />
      ) : (
        <input
          {...InputProps}
          className={`w-full p-2 outline-none focus:border-main text-[.9rem] transition duration-200 border-b-[1.5px] ${InputProps?.className}`}
        />
      )}

      {helperText && (
        <p {...helperTextProps} className={`pl-2 text-red-500 text-[.8rem] ${helperTextProps?.className}`}>
          {helperText}
        </p>
      )}
    </div>
  );
}
