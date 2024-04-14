import {useEffect, useState} from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'


export default function CommentApp(){
    const [comments, setState] = useState([]);

    useEffect(()=>{
        _loadComments()
    }, [])

    function _loadComments () {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            setState(comments)
        }
    }
    function _saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    const handleSubmitComment = (comment)=> {
        console.log('comment', comment);
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')

        const _comments = comments.concat(comment)
        setState(_comments);
        _saveComments(_comments)
    }

    const handleDeleteComment = (index)=> {
        console.log(index)
        const _comments = [...comments];
        _comments.splice(index, 1)
        setState(_comments)
        _saveComments(_comments)
    }

    return (
        <div className='wrapper'>
            <CommentInput onSubmit={ handleSubmitComment } />
            <CommentList comments={comments}  handleDeleteComment={handleDeleteComment}  />
        </div>)
}
