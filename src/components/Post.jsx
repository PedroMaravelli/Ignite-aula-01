import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export function Post({author, publishedAt, content}){


    const formatedPublishedDate = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'" ,{
        locale: ptBR,
    })

    const publishedDateRelativeNow =  formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true,
    })


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
                        return <p>{line.content}</p>
                    }else if (line.type === 'link'){
                        return <p><a href='#'>{line.content}</a></p>
                    }
                }))
                
                }
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Escreva um comentário...'></textarea>
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment></Comment>
            </div>

        </div>
    )
}