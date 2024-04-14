import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../store/comments'

// CommentInputContainer
// 负责用户名的加载、保存，评论的发布
function CommentInputContainer (props) {
    const [username, setName] = useState('');

    useEffect(()=>{
        _loadUsername();
        // setName(props.username);
    }, []);

    function _loadUsername(){
        // 从 LocalStorage 加载 username
        // 然后可以在 render 方法中传给 CommentInput
        const username = localStorage.getItem('username')
        if (username) {
            setName(username);
        }
    }

    function _saveUsername (username) {
        // 看看 render 方法的 onUserNameInputBlur
        // 这个方法会在用户名输入框 blur 的时候的被调用，保存用户名
        localStorage.setItem('username', username)
    }

    function handleSubmitComment (comment) {
        // 评论数据的验证
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        // 新增评论保存到 LocalStorage 中
        const { comments } = props
        const newComments = [...comments, comment]
        localStorage.setItem('comments', JSON.stringify(newComments))
        // this.props.onSubmit 是 connect 传进来的
        // 会 dispatch 一个 action 去新增评论
        if (props.onSubmit) {
            props.onSubmit(comment)
        }
    }

    return(
        <CommentInput
            username={username}
            onUserNameInputBlur={_saveUsername}
            onSubmit={handleSubmitComment} />
    )
}

CommentInputContainer.propType = {
    comments: PropTypes.array,
    onSubmit: PropTypes.func
}

const mapStateToProps = (state) => {
    // state的数据结构，多个模块的state,在当前模块取值记得加上模块名
    // {
    //     commentsReducer:{comments: Array(0)}
    //     counterReducer:0
    // }
    return {
        comments: state.commentsReducer.comments
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSubmit: (comment)=>{
            dispatch(addComment(comment))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentInputContainer);