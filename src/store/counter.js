
const ADD = 'add'
const MINUS = 'minus'

export const counterReducer = function(state = 0, action) {
    console.log(action);
    const num = action.payload || 1;
    switch (action.type) {
      case ADD:
        return state + num;
      case MINUS:
        return state - num;
      default:
        return state;
    }
  };


export const add = num => ({ type: ADD, payload: num }); // action creator
export const minus = (num) => ({ type: MINUS, payload: num }); // action creator

// 异步的返回的是函数
export const asyncAdd = (num) => async (dispatch, getState) => {
    console.log('asyncAdd', dispatch, getState);
    let res = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10);
        }, 1000)
    })
    console.log('res', res);
    if(res){
        dispatch({type: ADD, payload: num })
    }
};
