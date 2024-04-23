'use client';
import { useMutation } from '@tanstack/react-query';
import { http } from '.';
import errorHandler from '@/lib/utils/errorHandler';
import refactorSubmission from '@/lib/utils/refactorSubmission';

export const useSubmitResponse = () => {
  const mutation = useMutation({
    mutationKey: ['useSubmitResponse'],
    mutationFn: async (data: { [question: string]: string }) => {
      const response = await http.post('/api/submit-questionnaire', refactorSubmission(data));
      return response?.data;
    },

    onError(error) {
      error = errorHandler(error);
      throw error;
    },
  });

  return mutation;
};
