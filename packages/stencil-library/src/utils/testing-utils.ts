import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { isNotEmptyString } from './utils';

/**
 * Utility to log errors if debug mode is enabled.
 *
 * @param error The error object.
 * @param debug Flag indicating whether debug mode is enabled.
 */
const logError = (error: Error, debug: boolean = false): void => {
    if (debug) {
        console.error(error);
    }
};

/**
 * Utility to create a new spec page with a component and HTML.
 *
 * @param component The component to render in the spec page.
 * @param html The HTML to render in the spec page.
 * @param debug If true, any errors encountered will be logged to the console.
 */
const createPage = async (component: any, html: string, debug: boolean): Promise<SpecPage> => {
    try {
        return await newSpecPage({
            components: [component],
            html: html,
        });
    } catch (error) {
        logError(error, debug);
        throw new Error('Failed to create spec page');
    }
};

/**
 * Utility to safely query an element from the shadow DOM or light DOM.
 *
 * @param pageRoot The root element of the page.
 * @param elementSelector The selector for the element to query.
 * @param enableShadowDom If true, the shadow DOM will be queried. Defaults to false.
 * @param debug If true, any errors encountered will be logged to the console. Defaults to false.
 */
export const queryElement = (pageRoot: HTMLElement, elementSelector?: string, enableShadowDom: boolean = true, debug: boolean = false): Element | null => {
    if (!isNotEmptyString(elementSelector)) return pageRoot;

    try {
        const queryRoot = enableShadowDom && pageRoot.shadowRoot ? pageRoot.shadowRoot : pageRoot;
        const element = queryRoot.querySelector(elementSelector);
        
        if (debug) {
            console.log("Received page root:", pageRoot.outerHTML);
            console.log(`Querying element with selector "${elementSelector}"`);
            console.log('Enable Shadow DOM:', enableShadowDom);
            console.log('Element found:', element.outerHTML);
        }
        
        return element;

    } catch (error) {
        logError(error, debug);
        throw new Error(`Failed to query the element using selector "${elementSelector}".`);
    }
};

/**
 * Creates a spec page for the component with the given HTML and optionally queries
 * for an element by a selector. If no selector is given, the root element of the page is returned.
 *
 * @param component The component to render in the spec page.
 * @param html The HTML to render in the spec page.
 * @param elementSelector The selector to query the spec page for. If not provided, the root element is returned.
 * @param debug If true, any errors encountered will be logged to the console.
 */
export const createSpecPage = async (
    component: any,
    html: string,
    elementSelector?: string,
    enableShadowDom?: boolean,
    debug: boolean = false
): Promise<Element | null> => {
    const page = await createPage(component, html, debug);

    if (page?.root === null || page?.root === undefined) {
        throw new Error('No root element found in the spec page');
    }

    return queryElement(page.root, elementSelector, enableShadowDom, debug);
};

/**
 * Utility to test if a component throws an error when rendered with a specific HTML.
 * @param component - The component being tested.
 * @param html - The HTML string to render.
 * @param expectedMessagePart - A part of the error message that is expected.
 * @param debug - If true, the error is logged to the console for easier debugging. Default is false.
 * @returns Nothing, but expects the error to be thrown.
 */
export const checkSpecPageError = async (
    component: any,
     html: string,
      expectedMessagePart: string, 
      debug: boolean = false
    ) => {
    let isErrorThrown = false;
    try {
        await createSpecPage(component, html, undefined, false, debug);
    } catch (error) {
        isErrorThrown = true;

        try {
            expect(error.message).toContain(expectedMessagePart);
        } catch (error) {
            if (debug) {
                console.error(error);
            }
        }

        if (debug) {
            console.error(error);
        }
    }
    if (debug) {
        console.log(!isErrorThrown ? "Error not thrown" : "");
    }
    expect(isErrorThrown).toBe(true);
};

    