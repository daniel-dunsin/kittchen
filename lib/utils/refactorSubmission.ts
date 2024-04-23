export default function refactorSubmission(data: { [question: string]: string }) {
  return Object.entries(data).map(([question, answer], index) => {
    return {
      question,
      answer,
    };
  });
}
