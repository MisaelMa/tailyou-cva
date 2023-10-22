import { cva } from 'class-variance-authority';
export const Title = cva(
  '',

  {
    variants: {
      Vtitle: {
        default:
          'text-4xl font-serif underline decoration-yellow-600 text-yellow-600 mx-auto',
        destructive: 'bg-black-300',
      },
    },
    defaultVariants: {
      Vtitle: 'default',
    },
  }
);
