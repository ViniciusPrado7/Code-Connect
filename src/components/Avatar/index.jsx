import Image from "next/image"

export const Avatar = ({name, imageSrc}) => {
    return(
        <ul>
            <li>
                <Image src={imageSrc} alt={`Avatar do(a) ${name}`} height={32} width={32} />
            </li>
            <li>@{name}</li>
        </ul>
    )
}