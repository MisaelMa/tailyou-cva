import { cva } from 'class-variance-authority';
export const cardGral = cva('', {
  variants: {
    variant: {
      default: 'border shadow-lg bg-white rounded-md',
      boxContent: 'bg-white box-border',
      smll: 'object-cover rounded border',
    },

    size: {
      default: 'w-60 h-24',
      chartCard: 'w-[39rem] h-[23rem]',
      miniChartCard: 'w-[17rem] h-[26rem]',
      autoHcard: 'w-[39rem] h-auto',
      boxContent: 'w-auto h-auto',
      smll: 'w-12 h-12 mr-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
