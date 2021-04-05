const { default: ajax } = require('api/api');

// 1. 액션 타입 지정 (상수)
const SIGNUP_LOADING = 'auth/SIGNUP_LOADING';
const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'auth/SIGNUP_ERROR';

const SIGNIN_LOADING = 'auth/SIGNIN_LOADING';
const SIGNIN_SUCCESS = 'auth/SIGNIN_SUCCESS';
const SIGNIN_ERROR = 'auth/SIGNIN_ERROR';

const SIGNOUT = 'auth/SIGNOUT';

// 2. 초기 상태 정의 (배열, 객체, 원시값 자유)
const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

// 3. reducer 함수
const authReducer = (state = initialState, action) => {
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
        currentUser: action.payload.userInfo,
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
    case SIGNOUT:
      return initialState;
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

// signoutAction은 미들웨어가 필요없기 때문에 바로 내보내줬음
export const signoutAction = () => ({ type: SIGNOUT });

// 5. 썽크 액션 크리에이터
export const signUpAsync = payload => async dispatch => {
  // 요청이 시작됨
  dispatch(signupLoadingAction());
  try {
    // API를 호출
    const res = await ajax.signUp(payload);
    const { userInfo } = res;
    // 성공했을때
    dispatch({ ...signupSuccessAction(), payload: userInfo });
  } catch (error) {
    // 실패했을떄
    dispatch({ ...signupErrorAction(), error });
  }
};

export const signInAsync = email => async dispatch => {
  dispatch(signinLoadingAction());
  try {
    const res = await ajax.signIn(email);
    const { userInfo } = res;
    dispatch({ ...signinSuccessAction(), userInfo });
  } catch (error) {
    dispatch({ ...signinErrorAction(), error });
  }
};

export default authReducer;
