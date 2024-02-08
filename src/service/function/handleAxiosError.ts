import { AxiosError } from 'axios';

type ErrorResponseData = {
  detail: string;
};

export const handleAxiosError = (error: unknown) => {
  const axiosError = error as AxiosError;
  return axiosError?.response?.data as ErrorResponseData;
};
