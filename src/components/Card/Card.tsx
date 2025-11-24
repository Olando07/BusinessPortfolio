import React from "react";
import styled, { css } from "styled-components";
import type { CardProps } from "./Card.types";

const StyledCard = styled.div<{
    background?: string;
    disabled?: boolean;
    width?: string;
    height?: string;
}>`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid;
    transition: 0.3s ease;
    cursor: pointer;
    background-color: ${({ background }) => background || "#fff"};
    box-shadow: opx 2px 6px rgba(0, 0, 0, 0.1);
    width: ${({ width }) => width || "470px"};
    height: ${({ height }) => height} @media (min-width: 768px) {
        border-radius: 10px;
    }

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.55;
            cursor: not-allowed;
            pointer-events: none;
        `}
`;

const CardTitle = styled.h3`
    font-size: 1.2rem;
    margin: 12px 0 8px;
    text-align: center;
`;

const CardContent = styled.p`
    font-size: 0.95rem;
    margin: 0 0 auto 0;
    text-align: center;
    color: #333;
`;

const CardBody = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
`;

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
    justify-content: center;
`;

const TechTag = styled.span`
    padding: 4px 12px;
    background-color: #e0f2fe;
    color: #0369a1;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 9999px;
`;

const CardFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
`;

const LiveButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 8px 16px;
    background-color: #f97316;
    color: white;
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
        background-color: #fb923c;
    }
`;

const InDevLabel = styled.span`
    padding: 8px 16px;
    background-color: #e5e7eb;
    color: #6b7280;
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 8px;
`;

const CardImage = styled.img<{ src?: string }>`
    width: 100%;
    height: 250px;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    transition: transform 0.3;
    border-radius: 10px;

    &:hover {
        transform: scale(1.05);
    }
`;

const Card: React.FC<CardProps> = ({
    title,
    content = "Card description is shown here",
    disabled = false,
    image,
    isLive = false,
    liveDemo,
    techStack = [],
    background,
    className,
    width,
    height,
}) => {
    if (!title) throw new Error("Title cannot be empty");
    return (
        <StyledCard
            disabled={disabled}
            background={background}
            aria-disabled={disabled}
            className={className}
            width={width}
            height={height}
        >
            {image && <CardImage src={image} />}

            <CardBody>
                <CardTitle>{title}</CardTitle>
                {techStack.length > 0 && (
                    <TechStack>
                        {techStack.map((tech, index) => (
                            <TechTag key={index}>{tech}</TechTag>
                        ))}
                    </TechStack>
                )}
                <CardContent>{content}</CardContent>
                <CardFooter>
                    {isLive && liveDemo ? (
                        <LiveButton href={liveDemo} target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                            >
                                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                            </svg>
                            Live
                        </LiveButton>
                    ) : isLive ? (
                        <InDevLabel>No demo available😢</InDevLabel>
                    ) : null}
                </CardFooter>
            </CardBody>
        </StyledCard>
    );
};

export default Card;
