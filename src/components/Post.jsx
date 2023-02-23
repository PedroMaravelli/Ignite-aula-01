import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { cs } from 'date-fns/locale'


export function Post({author, publishedAt, content}){

    const [comments, setComments] = useState([
        'forte abaraço bigode',
    ])

    const [newComment, setNewComment] = useState('')



    const formatedPublishedDate = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'" ,{
        locale: ptBR,
    })

    const publishedDateRelativeNow =  formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true,
    })

    function handleCommentsPost(){
        event.preventDefault()

        setComments([...comments, newComment])

        setNewComment('')
    }
    function handleNewCommentPost(){
        setNewComment(event.target.value)
    }

    function deleteComment (commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter((comment =>{
            return comment !== commentToDelete
        }))

        setComments(commentsWithoutDeletedOne)

    }


    return(
        <div className={styles.post}>
            <header  >
                <div className={styles.author}>
                    <Avatar hasBorder={false} src={author.avatarUrl}></Avatar>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <p>{author.role}</p>
                    </div>
                </div>
                <time title={formatedPublishedDate} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>

            <div className={styles.content}>
                {content.map((line =>{
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if (line.type === 'link'){
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                }))
                
                }
            </div>

            <form onSubmit={handleCommentsPost} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                name='comment'
                value={newComment}
                onChange={handleNewCommentPost}
                placeholder='Escreva um comentário...'
                ></textarea>
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map(comment =>{
                        return <Comment key={comment} content={comment} onDeleteComment={deleteComment}></Comment> 
                    })
                }
            </div>

        </div>
    )
}