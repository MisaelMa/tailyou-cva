import { cva } from 'class-variance-authority';
export const THeader = cva(
  '',

  {
    variants: {
      Vheader: {
        default:
          'justify-between bg-gradient-to-tr from-indigo-600 to-blue-400 rounded-md py-2 px-6 text-white font-bold text-md',
        second: 'justify-between bg-white text-black font-normal font-light',
        flat: ' text-black font-semibold m-2',
      },
    },
    defaultVariants: {
      Vheader: 'default',
    },
  }
);
