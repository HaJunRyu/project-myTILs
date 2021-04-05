const { default: ajax } = require('api/api');

// 1. 액션 타입 지정 (상수)
const SIGNUP_LOADING = 'auth/SIGNUP_LOADING';
const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'auth/SIGNUP_ERROR';

const SIGNIN_LOADING = 'auth/SIGNIN_LOADING';
const SIGNIN_SUCCESS = 'auth/SIGNIN_SUCCESS';
const SIGNIN_ERROR = 'auth/SIGNIN_ERROR';

// 2. 초기 상태 정의 (배열, 객체, 원시값 자유)
const initialState = {
  signup: {
    loading: false,
    currentUser: null,
    error: null,
  },
  signin: {
    loading: false,
    currentUser: null,
    error: null,
  },
};

// 3. reducer 함수
const authReducer = (state, action) => {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.currentUser,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SIGNIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.currentUser,
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

// 4. 액션 크리에이터
const signupLoadingAction = () => ({ type: SIGNUP_LOADING });
const signupSuccessAction = () => ({ type: SIGNUP_SUCCESS });
const signupErrorAction = () => ({ type: SIGNUP_ERROR });

const signinLoadingAction = () => ({ type: SIGNIN_LOADING });
const signinSuccessAction = () => ({ type: SIGNIN_SUCCESS });
const signinErrorAction = () => ({ type: SIGNIN_ERROR });

// 5. 썽크 액션 크리에이터
const signUpLoadingAsync = payload => async dispatch => {
  // 요청이 시작됨
  dispatch(signupLoadingAction());
  try {
    // API를 호출
    const posts = await ajax.signUp();
    // 성공했을때
    dispatch({ ...signupSuccessAction(), payload });
  } catch (error) {
    // 실패했을떄
    dispatch({ ...signupErrorAction(), error });
  }
};
