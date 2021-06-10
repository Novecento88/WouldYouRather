import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA"

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_ANSWER = "ADD_ANSWER"

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    answer,
  }
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    _saveQuestion({
      optionOne,
      optionTwo,
      author: authedUser,
    }).then((question) => {
      dispatch(addQuestion(question))
    })
  }
}

export function handleAddAnswer(questionID, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    _saveQuestionAnswer({
      authedUser,
      questionID,
      answer,
    }).then(() => {
      dispatch(addAnswer(answer))
    })
  }
}