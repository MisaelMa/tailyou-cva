import { cva } from 'class-variance-authority';
export const auxilaryInput = cva('', {
  variants: {
    variant: {
      default:
        'absolute inset-y-0 justify-self-end flex items-center pr-3 text-gray-700',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
