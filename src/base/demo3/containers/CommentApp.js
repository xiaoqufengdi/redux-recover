import CommentInput from './CommentInput'
import CommentList from './CommentList'
import TestThunk from './TestThunk'

export default function CommentApp(){
    return (
        <div className='wrapper'>
            <CommentInput/>
            <CommentList/>

            <TestThunk/>
        </div>)
}
