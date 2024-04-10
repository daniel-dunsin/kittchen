import { ButtonHTMLAttributes } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
}

export function ButtonContained({ isLoading, loadingText, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-main-gradient border-[1.5px] border-main text-white w-full py-2 px-3 outline-none rounded-md text-[.8rem] disabled:text-[#fff] disabled:bg-[#999] disabled:border-[#999]   flex items-center gap-2 justify-center ${props.className}`}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <>
          <BiLoaderAlt size={24} className="animate-spin" />
          {loadingText || 'Loading'}
        </>
      ) : (
        <>{props.children}</>
      )}
    </button>
  );
}

export function ButtonContainedWhite({ isLoading, loadingText, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-white border-[1.5px] border-white text-[#222] w-full py-2 px-3 outline-none rounded-md text-[.8rem] disabled:text-[#fff] disabled:bg-[#999] disabled:border-[#999]   flex items-center gap-2 justify-center ${props.className} hover:opacity-[.96]`}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <>
          <BiLoaderAlt size={24} className="animate-spin" />
          {loadingText || 'Loading'}
        </>
      ) : (
        <>{props.children}</>
      )}
    </button>
  );
}

export function ButtonOutlined({ isLoading, loadingText, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`text-main hover:text-white hover:bg-main-gradient border-[1.5px] border-main w-full py-2 px-3 outline-none rounded-md text-[.8rem] disabled:text-[#fff] disabled:bg-[#999] disabled:border-[#999]  transition-all duration-300 flex items-center justify-center gap-2 ${props.className}`}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <>
          <BiLoaderAlt size={24} className="animate-spin" />
          {loadingText || 'Loading'}
        </>
      ) : (
        <>{props.children}</>
      )}
    </button>
  );
}
