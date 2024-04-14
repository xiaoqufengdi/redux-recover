import Comment from './Comment'

export default function CommentList(props) {

    return(
        <div>
            {
                (props.comments||[]).map((comment, i) => <Comment onDeleteComment={props.onDeleteComment}   index={i} comment={comment} key={i} />)
            }
        </div>
    )
}