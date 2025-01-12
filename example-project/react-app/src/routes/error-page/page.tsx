import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        // error is type RouteError
        errorMessage = error.statusText || error.data;
    } else if (error instanceof Error) {
        // error is type Error
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        // error is a string
        errorMessage = error;
    } else {
        // fallback for any other type of error
        errorMessage = 'Unknown error occurred';
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorMessage}</i>
            </p>
        </div>
    );
}
