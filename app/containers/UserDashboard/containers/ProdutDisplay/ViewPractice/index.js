/*
 *
 * ViewPractice
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Toaster from 'components/Toaster';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from 'redux';
import {
  makeSelectUser
} from '../../../../App/selectors';
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectGetQuestion,
  makeSelectExamDisplay,
  makeSelectResultResponse,
  makeSelectSaveAnswerResponse
} from './selectors';
import {
  loadAllQuestionnaireRequest,
  clearMessage,
  postResultRequest,
  postQuestionScoreRequest,
  saveAnswerRequest
} from './actions';
import ViewPracticeQuestion from './ViewPracticeQuestion';

const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
  getQuestionSucces: makeSelectGetQuestion(),
  examData: makeSelectExamDisplay(),
  resultResponse: makeSelectResultResponse(),
  currentUser: makeSelectUser(),
  saveAnswerResponse: makeSelectSaveAnswerResponse()

});

const mapDispatchToProps = dispatch => ({
  getQuestionRequest: (id, package_id) =>
    dispatch(loadAllQuestionnaireRequest(id, package_id)),
  clearMessage: () => dispatch(clearMessage()),
  postResult: result => dispatch(postResultRequest(result)),
  postQuestionScore: score => dispatch(postQuestionScoreRequest(score)),
  saveAnswerRequest: payload => dispatch(saveAnswerRequest(payload))
});
var check = 0;
let score_arr = [];
class ViewPractice extends React.Component {

  state = {
    bit: false,
    tempValue: '',
    payload:{},
    page: 1,
    perPage: 1,
    query: {},
    data: {},
    questionIdx: 0,
    score: 0,
    full_score: 0,
    error_msg: '',
    correctAnswer: '',
    count: 0,
    fav_questions: [],
    previousUrl: window.location.href,
    saveAnswerResponse:{}
  };

  componentDidMount() {
    const { page, perPage, query } = this.state;
     const payload ={
          user_id: this.props.currentUser.toJS()._id,
          product_id: this.props.match.params.product_id,
          question_answer: {}
        }
        this.props.saveAnswerRequest(payload)
    let previousState = JSON.parse(
      localStorage.getItem(`previousState>${this.state.previousUrl}`),
    );
    if (
      window.location.href ===
      (previousState !== null ? previousState.previousUrl : '')
    ) {
      //......................................................
      let product_id = this.props.match.params.product_id
      ? this.props.match.params.product_id
      : null;
      if (product_id) {
        this.props.getQuestionRequest(product_id, '111');
      }
      this.setState(
        JSON.parse(
          localStorage.getItem(`previousState>${this.state.previousUrl}`),
        ),
      );
    } else {
      let product_id = this.props.match.params.product_id
        ? this.props.match.params.product_id
        : null;
      let url = window.location.href.split('/');
      this.setState({ url });
      this.setState({ product_id });
      if (product_id) {
        this.props.getQuestionRequest(product_id, '111');
      }
    }
  }

  componentWillReceiveProps(nextProps) {

    if ((nextProps.saveAnswerResponse !== this.props.saveAnswerResponse) && nextProps.saveAnswerResponse.size > 0) {
      // console.log(nextProps.saveAnswerResponse && nextProps.saveAnswerResponse.toJS(),'>>>>>>>>>>>>>',this.props.saveAnswerResponse,'.......',nextProps.saveAnswerResponse == {})
      this.setState({
        saveAnswerResponse: nextProps.saveAnswerResponse && nextProps.saveAnswerResponse.toJS(),
      });
    }

    if (nextProps.getQuestionSucces !== this.props.getQuestionSucces) {
      this.setState(
        {
          data: nextProps.getQuestionSucces.toJS(),
        },
        () => {
          let correctAnswers = [];
          let full_score = 0;
          this.state.data &&
            this.state.data.length > 0 &&
            this.state.data.map((data, idx) => {
              data.answers.map(ans => {
                if (ans.is_answer_correct_option) {
                  correctAnswers[idx] = ans.answer;
                }
              });
            });
          this.setState({ correctAnswers: correctAnswers });
          if (this.state.data && this.state.data.length > 0)
            this.state.data.map((dat, idx) => {
              full_score = full_score + parseInt(dat.point);
              let newData = this.state.data;
              if (dat.multi_answer_applicable) {
                newData[idx].user_answers = [];
                newData[idx].user_answer_numbers = [];
              }
              this.setState({ data: newData });
            });
          this.setState({
            full_score: full_score,
          });
        },
      );
    }
    if (nextProps.examData !== this.props.examData) {
      this.setState({
        examData: nextProps.examData.toJS(),
      });
    }
    if (nextProps.resultResponse != this.props.resultResponse) {
      this.setState({ resultResponse: nextProps.resultResponse.toJS() });
    }
  }

  componentWillUnmount() {
    this.props.clearMessage();
  }

  saveSubjectiveAnswer = () => {
    this.props.saveAnswerRequest(this.state.payload)
  }
  
  handleAnswerChange = (e, event, answerIdx, mainIdx, questionId) => {
    // console.log(answerIdx,'sssss',mainIdx,'sssss>',event.value,'----',questionId,'=>>pro_id==',this.props.match.params.product_id,'...>',this.props.currentUser.toJS()._id)
    if(event.as != 'textarea' )  {
    const payload ={
      user_id: this.props.currentUser.toJS()._id,
      product_id: this.props.match.params.product_id,
      question_answer: {
        [questionId]: event.value
      }
    }
    this.props.saveAnswerRequest(payload)
  } else {
    this.setState({bit:true, tempValue: event.value})
    const payload ={
      user_id: this.props.currentUser.toJS()._id,
      product_id: this.props.match.params.product_id,
      question_answer: {
        [questionId]: event.value
      }
    }
    this.setState({payload:payload})
    // this.props.saveAnswerRequest(payload)
  }
    let newState = this.state.data;
    newState[mainIdx].user_answer = event.value;
    newState[mainIdx].user_answer_number = answerIdx;
    this.setState(
      {
        data: newState,
        showAnswer: false,
        error_msg: '',
      },
      () => {
        localStorage.setItem(
          `previousState>${this.state.previousUrl}`,
          JSON.stringify(this.state),
        );
      },
    );
    if (newState[mainIdx].multi_answer_applicable) {
      if (newState[mainIdx].user_answers.includes(event.value)) {
        this.handleAnswer(event.value, newState, mainIdx, answerIdx + 1);
      } else {
        newState[mainIdx].user_answers = [
          ...newState[mainIdx].user_answers,
          event.value,
        ];
        newState[mainIdx].user_answer_numbers = [
          ...newState[mainIdx].user_answer_numbers,
          answerIdx + 1,
        ];
        this.setState({ data: newState });
      }
    }
  };

  handleAnswer = (value, newState, mainIdx, answerIdx) => {
    const filter = newState[mainIdx].user_answers.filter(name => {
      return name !== value;
    });
    const filterAnsIdx = newState[mainIdx].user_answer_numbers.filter(name => {
      return name !== answerIdx;
    });
    let newData = this.state.data;
    newData[mainIdx].user_answers = filter;
    newData[mainIdx].user_answer_numbers = filterAnsIdx;
    this.setState({ data: newData });
  };

  handleNextButton = (event, mainIdx, questionId) => {
    let { questionIdx, payload } = this.state;
    questionIdx++;
    this.setState({
      questionIdx: questionIdx,
      showAnswer: false,
      is_radio_disabled: false,
    });
  };

 
  handleViewResultButton = (event, mainIdx) => {
    score_arr = [];
    let attempted_questions = this.state.data.filter(dat => {
      return Object.keys(dat).includes('user_answer');
    });
    this.setState({ attempted_length: attempted_questions.length });
    const correctAnswers = [];
    this.setState({
      show_final_result: true,
    });
    this.state.data.map((data, idx) => {
      data.answers.map(ans => {
        if (ans.is_answer_correct_option) {
          correctAnswers[idx] = ans.answer;
        }
      });
    });
    this.state.data.map((data, idx) => {
      if (data.multi_answer_applicable) {
        correctAnswers[idx].map(correct => {
          if (data.user_answers.includes(correct)) {
            score_arr[idx] = data.point;
          } else {
            score_arr[idx] = 0;
          }
        });
      } else {
        if (correctAnswers[idx] == data.user_answer) {
          score_arr[idx] = data.point;
        } else {
          score_arr[idx] = 0;
        }
      }
    });
    let total_score = null;
    let count = 0;
    score_arr.map(score => {
      total_score = total_score + score;
      if (score != 0) {
        count = count + 1;
      }
    });
    this.setState({ count });
    this.setState({ score: total_score }, () => {
    });
    localStorage.removeItem(`previousState>${this.state.previousUrl}`);
  };

  handleBackButton = (e, questionIdx) => {
    this.setState({
      questionIdx: questionIdx - 1,
      showAnswer: false,
      is_radio_disabled: false,
    });
  };
  handleJump = (e, index, ques_idx) => {
    let id = '';
    if (this.state.data[ques_idx].user_answer) {
      id = this.state.data[ques_idx].answers.filter(answer => {
        return answer.answer == this.state.data[ques_idx].user_answer;
      });
      let score = {
        product_id: this.state.product_id,
        questionnaire_id: this.state.data[ques_idx]._id,
        answer_id: id[0].id,
      };
      this.props.postQuestionScore(score);
    }
    this.setState({
      questionIdx: index,
      showAnswer: false,
      is_radio_disabled: false,
    });
  };

  render() {
    const {
      page,
      perPage,
      data,
      questionIdx,
      showAnswer,
      error_msg,
      show_final_result,
      score,
      full_score,
      is_radio_disabled,
      examData,
      resultResponse,
      url,
      fav_questions,
      favFailure,
      saveAnswerResponse,
      tempValue
    } = this.state;
    const { successResponse, errorResponse } = this.props;
    let message = null;
    // if (successResponse) {
    //   message = <Toaster message={successResponse} timeout={5000} success />;
    // }
    if (favFailure) {
      message = (
        <Toaster message={favFailure && favFailure} timeout={5000} error />
      );
    }
    console.log(this.state.questionIdx,'>>?????')
    return (
      <div>
        {message && message}
        {!show_final_result && (
          <h1 className="main_title">Questionnaire</h1>
        )}
        <ViewPracticeQuestion
          data={data}
          tempValue={tempValue}
          saveAnswerResponse={saveAnswerResponse}
          page={page}
          perPage={perPage}
          productId={this.state.product_id}
          saveSubjectiveAnswer={this.saveSubjectiveAnswer}
          handleAnswerChange={this.handleAnswerChange}
          handleNextButton={this.handleNextButton}
          questionIdx={questionIdx}
          showAnswer={showAnswer}
          handleViewResultButton={this.handleViewResultButton}
          error_msg={error_msg}
          show_final_result={show_final_result}
          score={score}
          full_score={full_score}
          is_radio_disabled={is_radio_disabled}
          time={examData && examData.time_limit}
          isCorrect={this.state.correctAnswer}
          count={this.state.count}
          resultResponse={resultResponse}
          url={url}
          handleBackButton={this.handleBackButton}
          fav_questions={fav_questions}
          handleJump={this.handleJump}
          correctAnswers={this.state.correctAnswers}
          attempted_length={this.state.attempted_length}
        />
      </div>
    );
  }
}

const withReducer = injectReducer({ key: 'viewPractice', reducer });
const withSaga = injectSaga({ key: 'viewPractice', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ViewPractice);
