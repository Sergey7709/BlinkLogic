import { Statistics } from '@/service/hooks/useGetData';

export const handleExtendData = (data: Statistics | undefined) => {
  if (data) {
    return data.data.map((el) => ({
      ...el,
      readyShort: `https://front-test.hex.team/s/${el.short}`,
    }));
  }
  return [];
};
