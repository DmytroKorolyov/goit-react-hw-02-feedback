export const countTotalFeedback = state => {
    return state.good + state.neutral + state.bad
}




export const countPositiveFeedbackPercentage = state => {
const total = countTotalFeedback(state);
  return total > 0 ? Math.round((state.good / total) * 100) : 0;
}

