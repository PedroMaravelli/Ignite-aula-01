import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src}){
    return(
        <div>
            <img className={hasBorder ? styles.avatar : styles.avatarBorder  }
            src={src}></img>
        </div>
    )
}