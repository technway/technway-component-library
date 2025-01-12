export interface FooterData {
    brand?: {
        logo: string; // The URL of the brand logo
        name: string; // The name of the brand
    };
    links?: {
        heading: string; // The heading of the links section
        items?: Array<{
            label: string; // The label for the link
            url: string; // The URL for the link
            newTab?: boolean;
        }>;
        useCustomLinks?: boolean; // To enter custom elements useful for frameworks like react to use NavLink or Link.
        linksLength?: number; // used when `customItems` is enabled. To render slots to all links
    };
    contact?: {
        heading: string; // The heading of the contact section
        email?: string; // The contact email address
        phone?: string; // The contact phone number
    };
    socialmedia?: Array<{
        iconName: string; // The icon name (e.g., "github", "facebook")
        url: string; // The URL of the social media profile
    }>;
    subscription?: {
        heading: string; // The heading for the subscription section
        description?: string; // The description for the subscription section
        placeholder?: string; // Placeholder text for the email input field
        buttonText?: string; // Text for the submit button
    };
}