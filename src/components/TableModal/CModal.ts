import { cva } from 'class-variance-authority';
export const CModal = cva(
  '',

  {
    variants: {
      VModal: {
        default:
          'fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 fixed inset-0 bg-black bg-opacity-50',
      },
    },
    defaultVariants: {
      VModal: 'default',
    },
  }
);
