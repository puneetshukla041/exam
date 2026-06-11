export function calculateNegativeMarkScore(correct: number, wrong: number, marksPerQuestion = 1) {
  return Number(((correct * marksPerQuestion) - (wrong * marksPerQuestion) / 3).toFixed(2));
}

export function percentage(part: number, total: number) {
  if (!total) return 0;
  return Math.round((part / total) * 100);
}

export function masteryScore(accuracy: number, coverage: number, attempts: number) {
  const attemptFactor = Math.min(100, attempts * 5);
  return Math.round(accuracy * 0.55 + coverage * 0.3 + attemptFactor * 0.15);
}

export function readinessScore(input: { accuracy: number; coverage: number; consistency: number; mockAverage: number }) {
  return Math.round(input.accuracy * 0.35 + input.coverage * 0.25 + input.consistency * 0.2 + input.mockAverage * 0.2);
}
