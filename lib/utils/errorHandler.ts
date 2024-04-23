import { toast } from 'react-toastify';

export default function errorHandler(error: any) {
  error = error?.response?.data?.error || error?.response?.data || error.message || 'oops! an error occured';

  toast.error(error, { toastId: new Date().getTime() });

  return error;
}
