import { useState, useRef, useEffect } from 'react';
export default function CommentInput(props) {
    const textareaRef = useRef('');
    const [username, setName] = useState('');
    const [content, setContent] = useState('');

    useEffect(()=>{
        textareaRef.current.focus();
        _loadUsername();
    }, []);

    const handleClick = ()=>{
        props.onSubmit({username, content,
            createdTime: +new Date()
        })
        setContent('');
    }

    const _loadUsername =()=> {
        const username = localStorage.getItem('username')
        if (username) {
            setName(username)
        }
    }

    const _saveUsername = (username)=> {
        localStorage.setItem('username', username)
    }
    const handleUsernameBlur = (event)=> {
        _saveUsername(event.target.value)
    }

    const handleChangeUsername = (event)=>{
        setName(event.target.value);
    }

    const handleContentChange= (event)=> {
        setContent(event.target.value)

    }

    return(
        <div className='comment-input'>
            <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'>
                    <input value={username} onBlur={handleUsernameBlur} onChange={handleChangeUsername}/>
                </div>
            </div>
            <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'>
                    <textarea ref={textareaRef} value={content} onChange={handleContentChange}  />
                </div>
            </div>
            <div className='comment-field-button'>
                <button  onClick={handleClick}>
                    发布
                </button>
            </div>
        </div>)
}