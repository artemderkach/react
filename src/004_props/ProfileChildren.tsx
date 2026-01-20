import Avatar from './Avatar.tsx';
import type {ReactNode} from "react";

interface CardProps {
    children?: ReactNode;
}

function Card({ children }: CardProps) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export function Profile() {
    return (
        <Card>
            <div>Hello</div>
            <Avatar
                size={80}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    );
}
