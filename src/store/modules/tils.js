const { default: ajax } = require('api/api');

const CREATE_TIL_LOADING = 'tils/CREATE_TIL_LOADING';
const CREATE_TIL_SUCCESS = 'tils/CREATE_TIL_SUCCESS';
const CREATE_TIL_ERROR = 'tils/CREATE_TIL_ERROR';
const READ_TIL_LOADING = 'tils/READ_TIL_LOADING';
const READ_TIL_SUCCESS = 'tils/READ_TIL_SUCCESS';
const READ_TIL_ERROR = 'tils/READ_TIL_ERROR';
const UPDATE_TIL_LOADING = 'tils/UPDATE_TIL_LOADING';
const UPDATE_TIL_SUCCESS = 'tils/UPDATE_TIL_SUCCESS';
const UPDATE_TIL_ERROR = 'tils/UPDATE_TIL_ERROR';
const DELETE_TIL_LOADING = 'tils/DELETE_TIL_LOADING';
const DELETE_TIL_SUCCESS = 'tils/DELETE_TIL_SUCCESS';
const DELETE_TIL_ERROR = 'tils/DELETE_TIL_ERROR';

// 2. 초기 상태 정의 (배열, 객체, 원시값 자유)
const initialState = {
  loading: false,
  tils: [
    /* 
  {
    idTIL: 1, // TIL 고유 id (til primary key)
    users_idusers: 1, // TIL을 쓴 유저의 id(user primary key)
    subject: '제목',
    contents: 'TIL 내용',
    created: 'TIL을 쓴 날짜',
  }
  */
  ],
  error: null,
};

// 3. 액션 크리에이터
export const createTilLoadingAction = () => ({
  type: CREATE_TIL_LOADING,
});

export const createTilSuccessAction = payload => ({
  type: CREATE_TIL_SUCCESS,
  payload,
});

export const createTilErrorAction = error => ({
  type: CREATE_TIL_ERROR,
  error,
});

// 4. reducer 함수
export const tilReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TIL_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TIL_SUCCESS:
      // action객체에 새로운 TIL객체 전달
      return {
        ...state,
        loading: false,
        tils: [...state.tils, action.payload],
      };
    case CREATE_TIL_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

// 5. 썽크 액션 크리에이터
export const createTilLoadingAsync = (subject, contents) => async dispatch => {
  dispatch(createTilLoadingAction());
  try {
    const res = await ajax.createTil(1, subject, contents);
    const posts = res.data;
    // const payload = {
    //   idTIL: 1,
    //   users_idusers: 1,
    //   subject,
    //   contents,
    //   created: new Date(),
    // };
    dispatch(createTilSuccessAction(posts));
  } catch (error) {
    dispatch(createTilErrorAction(error));
  }
};
