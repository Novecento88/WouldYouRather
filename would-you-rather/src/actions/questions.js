import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addAnswer(authedUser, questionID, answer) {
  return {
    type: ADD_ANSWER,
    authedUser,
    questionID,
    answer,
  };
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    _saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
      })
      .catch((error) => {
        console.log("ADD QUESTION ERROR: ", error);
      });
  };
}

export function handleAddAnswer(questionID, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    _saveQuestionAnswer({
      authedUser: authedUser,
      qid: questionID,
      answer: answer,
    })
      .then(() => {
        dispatch(addAnswer(authedUser, questionID, answer));
      })
      .catch((error) => {
        console.log("ADD ANSWER ERROR: ", error);
      });
  };
}
