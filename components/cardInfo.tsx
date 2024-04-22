import React from 'react';

interface CardInfoProps {
    img: string;
    title: string;
    text: string;
}

const CardInfo: React.FC<CardInfoProps> = ({img, title, text}) => {
    return (
        <div>
            <img src={img} alt={title} />
            <p>{title}</p>
            <p>{text}</p>
        </div>
    );
}

export default CardInfo;
