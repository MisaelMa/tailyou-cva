import { cva } from 'class-variance-authority';
export const card = cva('', {
  variants: {
    variant: {
      default: 'border shadow-lg bg-white rounded-md',
      boxContent: 'bg-white box-border',
      smll: 'object-cover rounded border',
      ul: 'bg-[#eff2f5] border rounded border-[#c9cccf] p-[10px]',
      sstyle: 'bg-white mx-2',
    },

    size: {
      default: 'w-60 h-24',
      chartCard: 'w-[39rem] h-[23rem]',
      miniChartCard: 'w-[17rem] h-[26rem]',
      autoHcard: 'w-[39rem] h-auto',
      boxContent: 'w-auto h-auto',
      smll: 'w-12 h-12 mr-4',
      xsmll: 'w-8 h-8',
      auto: 'w-auto h-auto',
      chartCardauto: 'w-[39rem] h-auto',
      miniChartCardauto: 'w-[17rem] h-auto',
      fullW: 'w-full h-auto',
      dialogBig: 'w-[33rem] h-[auto]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
