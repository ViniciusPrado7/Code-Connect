import Image from "next/image"
import styles from "./avatar.module.css"

export const Avatar = ({name, imageSrc}) => {
    return(
        <ul className={styles.avatar}>
            <li>
                <Image src={imageSrc} alt={`Avatar do(a) ${name}`} height={32} width={32} />
            </li>
            <li>@{name}</li>
        </ul>
    )
}