'use client';

import {
    TnwSubscriptionForm,
    TnwText,
    TnwHeading,
    TnwBanner
} from "@technway/next-library/src/components.server";

const NewsletterBanner = () => {

    return (
        <TnwBanner
            appearance="outlined"
            appearanceColor="auto"
            gap="3xl"
            layout="horizontal"
            textAlignment="start"
            slot="body"
            disableInternalContainer={true}
        >
            <TnwSubscriptionForm
                borderRadius="full"
                variant="secondary"
                slot="button"
            />
            <TnwText
                text="Get the latest updates and tips in your inbox."
                widthSize="sm"
                slot="description"
            />
            <TnwHeading
                slot="title"
                text="Stay in the Loop. Join Our Newsletter!"
                widthSize="sm"
            />
        </TnwBanner> 
    )
}

export default NewsletterBanner;