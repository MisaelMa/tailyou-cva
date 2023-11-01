import { cva } from 'class-variance-authority';
export const Count = cva('', {
  variants: {
    Vcount: {
      default:
        'absolute mb-4 ml-4 text-center bg-red-500 rounded-full h-auto w-auto flex items-center justify-center whitespace-nowrap top-[-.2rem]',
      delete: 'text-red-700',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vcount: 'default',
  },
});
