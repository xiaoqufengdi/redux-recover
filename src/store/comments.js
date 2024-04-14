// action types
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

// reducer
export default function (state, action){
    if(!state){
        state = { comments: []}
    }

    switch(action.type){
        case INIT_COMMENTS:
            // 从缓存读取初始化
            return { comments: action.comments }
        case ADD_COMMENT:
            // ADD
            return {
                comments: [...state.comments, action.comment]
            }

        case DELETE_COMMENT:
            // DELETE
            return {
                comments: [
                    ...state.comments.slice(0, action.commentIndex),
                    ...state.comments.slice(action.commentIndex + 1)
                ]
            }
        default:
            return state;
    }
}

// action creators
// dispatch({ type: 'INIT_COMMENTS', comments })
export const initComments = (comments)=>{
    return  { type: INIT_COMMENTS, comments}
}

export const addComment = (comment)=>{
    return { type: ADD_COMMENT, comment }
}

export const deleteComment = (commentIndex)=>{
    return { type: DELETE_COMMENT, commentIndex}
}

// dispatch(initComments(comments))

// 定义 action types
// 编写 reducer
// 跟这个 reducer 相关的 action creators