'use client';

import { TnwCard } from '@technway/next-library/src/components';

type ArticleCardProps = {
    layout?: 'vertical' | 'horizontal';
    appearance?: "transparent" | "none" | "solid" | "outlined" | "mixed";
    appearanceColor?: "primary" | "secondary" | "auto" | "inverse" | "light" | "white" | "black";
    padding?: "sm" | "md" | "lg" | "none";
    imageHeight?: string;
    largerImage?: boolean;
}

const ArticleCard = (props: ArticleCardProps) => {
    const randomHeight = Math.floor(Math.random() * (300 - 250 + 1)) + 250;
    const imageSrc = `https://picsum.photos/512/${randomHeight}`;
    const heading = "Agile Project Management: Tips for Effective Team Collaboration";
    const description = "Agile project management has become increasingly popular in recent years as more and more organizations recognize the value of a flexible, collaborative approach to project management. In this article, we will provide some tips for achieving effective team collaboration in an agile project management context.";
    const link = "#";
    const date = "March 2023";
    const category = "Project Management";

    return (
        <TnwCard
            badgeLabel={category}
            buttonLabel="Read more"
            buttonHref={link}
            buttonRadius="full"
            contentSpacing="md"
            date={date}
            description={description}
            heading={heading}
            imageSrc={imageSrc}
            imageAlt={heading}
            layout={props.layout || 'vertical'}
            appearance={props.appearance || 'none'}
            appearanceColor={props.appearanceColor || 'auto'}
            padding={props.padding || 'none'}
            spacing="md"
            imageHeight={props.imageHeight}
            largerImage={props.largerImage || false}
        />
    );
};

export default ArticleCard;
