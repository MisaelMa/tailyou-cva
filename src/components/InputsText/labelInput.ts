import { cva } from 'class-variance-authority';
export const labelInput = cva('', {
  variants: {
    variant: {
      default: 'block text-sm  text-gray-700',
      isValid:
        'absolute inset-y-0 justify-self-end flex items-start pr-3 block text-xs text-green-500',
      inValid:
        'absolute inset-y-0 justify-self-end flex items-start pr-3 block text-xs text-red-300',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
