export interface AvatarProps {
    person: PersonProps
    size: number
}

export interface PersonProps {
    name: string
    imageId: string
}


export default function Avatar({ person, size }: AvatarProps) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export function getImageUrl(person: PersonProps, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}
