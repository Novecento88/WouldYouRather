import { GET_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question,
      };
    case ADD_ANSWER:
      const { authedUser, questionID, answer } = action;

      const questions = state;
      const updatedQuestion = questions[questionID];
      updatedQuestion[answer].votes.push(authedUser);

      return {
        ...state,
        [updatedQuestion.id]: updatedQuestion,
      };
    default:
      return state;
  }
}
