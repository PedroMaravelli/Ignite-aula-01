import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment ({content}){
    return(
        <div className={styles.comment}>
            <Avatar src='https://github.com/PedroMaravelli.png'></Avatar>
            

            <div className={styles.commentBox}>
                <div className={styles.contentComment}>
                    <header>
                        <div className={styles.authorName}>
                            <strong>Pedro Maravelli</strong>
                            <time title='11 de Fevereiro ás 16:19h' dateTime='2023-02-21 16:19:30'>Cerca de 1h atrás</time>
                        </div>
                        <button  title='Deletar comentário'>
                            <Trash size={20}></Trash>
                        </button>

                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp className={styles.thumbsUp} size={20}></ThumbsUp>
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}