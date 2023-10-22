import { cva } from 'class-variance-authority';
export const THeader = cva(
  '',

  {
    variants: {
      Vheader: {
        default:
          'justify-between bg-gradient-to-tr from-indigo-600 to-blue-400 rounded-md py-2 px-6 text-white font-bold text-md',
      },
    },
    defaultVariants: {
      Vheader: 'default',
    },
  }
);
