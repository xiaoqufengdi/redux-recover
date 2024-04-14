import {useEffect, useRef, useState} from "react";

export default function Comment(props) {
    const [timeString, setTimeString] = useState('');

    function _updateTimeString () {
        const comment = props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        setTimeString(
            duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`
        )
    }

    useEffect(()=>{
        const timer = setInterval(_updateTimeString, 5000);
        return ()=>{
            console.log('clear timer')
            clearTimeout(timer)
        }
    }, [])

    const handleDeleteComment = ()=> {
        if (props.onDeleteComment) {
            props.onDeleteComment(props.index)
        }
    }

    const _getProcessedContent = (content)=> {
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    return (
        <div className='comment'>
            <div className='comment-user'>
                <span>{props.comment.username} </span>：
            </div>
            <p dangerouslySetInnerHTML={{
                __html: _getProcessedContent(props.comment.content)
            }}/>
            <span className='comment-createdtime'>
              {timeString}
            </span>
            <span className='comment-delete' onClick={handleDeleteComment}>
              删除
            </span>
        </div>
    )
}