## Code Examples

### Basic HTML Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsletter Subscription</title>
    <script type="module" src="/path/to/stencil-library/dist/tnw-subscription-form.js"></script>
</head>
<body>
    <!-- Basic Implementation -->
    <tnw-subscription-form
        buttonLabel="Subscribe Now"
        inputPlaceholder="Your email address"
        successMessage="Welcome to our newsletter!"
        theme="primary"
        borderRadius="rounded"
    ></tnw-subscription-form>

    <!-- Custom Styled Implementation -->
    <tnw-subscription-form
        variant="button-inside"
        theme="secondary"
        borderRadius="pill"
        formAttributes="data-analytics=newsletter-signup"
        style="--tnw-subscription-form-width: 400px;"
    ></tnw-subscription-form>
</body>
</html>
```

### Complete Newsletter Subscription Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsletter Subscription</title>
    <script type="module" src="/path/to/stencil-library/dist/tnw-subscription-form.js"></script>
    <style>
        .newsletter-section {
            max-width: 600px;
            margin: 2rem auto;
            padding: 2rem;
            background: #f8f9fa;
            border-radius: 8px;
        }

        tnw-subscription-form {
            --tnw-subscription-form-width: 100%;
            --tnw-subscription-form-gap: 1rem;
        }

        .custom-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    </style>
</head>
<body>
    <div class="newsletter-section">
        <h2>Join Our Newsletter</h2>
        <p>Stay updated with our latest news and updates.</p>
        
        <tnw-subscription-form
            id="newsletterForm"
            buttonLabel="Subscribe"
            inputPlaceholder="Enter your email address"
            successMessage="Thank you for subscribing! Please check your email to confirm."
            emailErrorMessage="Please enter a valid email address"
            theme="primary"
            borderRadius="rounded"
            formAttributes="data-source=website; data-campaign=main-newsletter"
        ></tnw-subscription-form>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('newsletterForm');
            
            // Handle form submission
            form.addEventListener('tnwSubscribe', async (event) => {
                const { email } = event.detail;
                
                try {
                    // Example API call
                    const response = await fetch('https://api.example.com/subscribe', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email })
                    });

                    if (!response.ok) {
                        throw new Error('Subscription failed');
                    }

                    // Success is automatically handled by the component
                } catch (error) {
                    // Dispatch error event to show error message
                    form.dispatchEvent(new CustomEvent('tnwError', {
                        detail: { 
                            message: 'Unable to subscribe at this time. Please try again later.'
                        }
                    }));
                }
            });

            // Track email input changes
            form.addEventListener('tnwEmailChange', (event) => {
                const { email, valid } = event.detail;
                console.log('Email changed:', email, 'Valid:', valid);
            });
        });
    </script>
</body>
</html>
```

### React Implementation Example

```jsx
import React, { useEffect, useRef } from 'react';

const NewsletterSection = () => {
    const formRef = useRef(null);

    useEffect(() => {
        const form = formRef.current;

        const handleSubscribe = async (event) => {
            const { email } = event.detail;
            
            try {
                const response = await fetch('https://api.example.com/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });

                if (!response.ok) {
                    throw new Error('Subscription failed');
                }
            } catch (error) {
                form.dispatchEvent(new CustomEvent('tnwError', {
                    detail: { 
                        message: 'Subscription failed. Please try again.'
                    }
                }));
            }
        };

        form.addEventListener('tnwSubscribe', handleSubscribe);
        
        return () => {
            form.removeEventListener('tnwSubscribe', handleSubscribe);
        };
    }, []);

    return (
        <div className="newsletter-section">
            <h2>Subscribe to Our Newsletter</h2>
            <tnw-subscription-form
                ref={formRef}
                buttonLabel="Join Now"
                inputPlaceholder="Your email address"
                successMessage="Welcome aboard! 🎉"
                theme="primary"
                borderRadius="rounded"
                formAttributes="data-source=react-app"
            ></tnw-subscription-form>
        </div>
    );
};

export default NewsletterSection;