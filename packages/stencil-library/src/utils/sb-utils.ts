import { JsonDocsProp, JsonDocsComponent } from '@stencil/core/internal';
import { isNotEmptyString, toCamelCase, toKebabCase } from './utils';
import componentDocs from '../../docs/stencil-generated/stencil-docs.json';

/**
 * Transforms raw component data into a valid JsonDocsComponent.
 *
 * @param rawComponent - The raw component data from JSON.
 * @return {JsonDocsComponent | null} A valid JsonDocsComponent or null if invalid.
 */
function transformToJsonDocsComponent(rawComponent: any): JsonDocsComponent | null {
    if (!isNotEmptyString(rawComponent.tag)) return null;

    // Validate and transform props
    const validProps = Array.isArray(rawComponent.props)
        ? rawComponent.props.map((prop: any): JsonDocsProp => ({
              name: prop.name || '',
              type: prop.type || 'unknown',
              mutable: !!prop.mutable,
              attr: prop.attr || undefined,
              reflectToAttr: !!prop.reflectToAttr,
              docs: prop.docs || '',
              default: prop.default || undefined,
              getter: !!prop.getter,
              setter: !!prop.setter,
              required: !!prop.required,
              docsTags: Array.isArray(prop.docsTags) ? prop.docsTags : [],
              values: Array.isArray(prop.values) ? prop.values : [],
              optional: prop.optional ?? true, 
          }))
        : [];

    return {
        filePath: rawComponent.filePath || '',
        encapsulation: rawComponent.encapsulation || 'none',
        tag: rawComponent.tag,
        readme: rawComponent.readme || '',
        docs: rawComponent.docs || '',
        docsTags: Array.isArray(rawComponent.docsTags) ? rawComponent.docsTags : [],
        usage: rawComponent.usage || {},
        props: validProps,
        methods: rawComponent.methods || [],
        events: rawComponent.events || [],
        styles: rawComponent.styles || [],
        slots: rawComponent.slots || [],
        parts: rawComponent.parts || [],
        dependencies: rawComponent.dependencies || [],
        dependents: rawComponent.dependents || [],
        deprecation: rawComponent.deprecation || undefined,
        listeners: rawComponent.listeners || [],
        dependencyGraph: rawComponent.dependencyGraph || {},
    };
}

/**
 * Retrieves a JsonDocsComponent by its tag name.
 *
 * @param {string} componentTagName - The tag name of the component to retrieve.
 * @return {JsonDocsComponent | undefined} The JsonDocsComponent if found, otherwise undefined.
 */
export function getComponentByTagName(componentTagName: string): JsonDocsComponent | undefined {
    const rawComponent = componentDocs.components.find(
        component => component.tag === componentTagName,
    );

    return rawComponent ? transformToJsonDocsComponent(rawComponent) : undefined;
}

/**
 * Splits a Stencil.js prop string into an array of strings,
 *
 * @param {JsonDocsProp} prop - The property to split the type string for.
 * @return {string[]} An array of strings, where each string is a type in the type string.
 */
export function getPropTypesAsArray(prop: JsonDocsProp): string[] {
    return prop.type
        .trim()
        .split('|')
        .map(type => type.trim().replace(/^['"]|['"]$/g, '')); // Remove surrounding quotes
}

/**
 * Determines the control type for a given property.
 *
 * @param {JsonDocsProp} prop - The property to determine the control type for.
 * @return {string} The control type, either 'boolean', 'number', 'select', 'radio', or 'text'.
 */
export function getPropControlType(prop: JsonDocsProp): string {
    const { type, default: defaultValue } = prop;
    const typesArr = getPropTypesAsArray(prop);

    if (typesArr.length > 1 && typesArr.length < 4) {
        return 'radio';
    }

    if (typesArr.length >= 4) {
        return 'select';
    }

    if (type === 'boolean' || typeof defaultValue === 'boolean') {
        return 'boolean';
    }

    if (type === 'number' || typeof defaultValue === 'number') {
        return 'number';
    }

    return 'text';
}

/**
 * Detects and returns the prop types of a given JsonDocsProp.
 *
 * @param {JsonDocsProp} prop - The property to detect prop types for.
 * @return {string[]} An array of detected prop types.
 */

export function detectPropTypes(prop: JsonDocsProp): string[] {
    const propTypes = prop.type.trim().split('|');
    const resultTypes = propTypes.reduce((acc: string[], propType: string) => {
        const type = propType.trim();
        const mappedType = {
            'boolean': 'boolean',
            'number': 'number',
            default: 'string'
        }[type] || 'string';
        if (!acc.includes(mappedType)) {
            acc.push(mappedType);
        }
        return acc;
    }, []);

    return resultTypes;
}

/**
 * Returns a Record object containing custom utilities argument type.
 *
 * @return {Record<string, any>} An object with custom utilities argument type.
 */
export function getCustomUtilsArgType(): Record<string, any> {
    return {
        customUtils: {
            control: { type: 'text' },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: null },
            },
        },
    };
}

/**
 * Generates a record of arg types for a given Stencil.js component.
 *
 * @param {JsonDocsComponent} component - The component to generate arg types for.
 * @param {boolean} [includeCustomUtils=false] - Whether to include custom utility argument types.
 * @return {Record<string, any>} A record of arg types for the component.
 */
export function generateComponentArgTypes(component: JsonDocsComponent, includeCustomUtils: boolean = false): Record<string, any> {
    const argTypes: Record<string, any> = {};

    if (component.props == undefined || component.props.length === 0) {
        return argTypes;
    }

    for (const prop of component.props) {
        const controlType = getPropControlType(prop);
        const propTypes = detectPropTypes(prop).join(' | ');
        const defaultValue = prop.default ?? null;

        argTypes[prop.name] = {
            control: { type: controlType },
            table: {
                type: { summary: propTypes },
                defaultValue: { summary: defaultValue },
            },
        };

        const typesArr = getPropTypesAsArray(prop);
        if (controlType === 'select' || controlType === 'radio') {
            const options = typesArr.filter((type) => type !== undefined && type !== null);
            if (options.length > 0) {
                argTypes[prop.name].options = options;
            }
        }
    }

    if (includeCustomUtils) {
        const customUtilsArgTypes = getCustomUtilsArgType();
        if (customUtilsArgTypes !== undefined) {
            Object.assign(argTypes, customUtilsArgTypes);
        }
    }

    return argTypes;
}

export function generateComponentSlots(component: JsonDocsComponent): Record<string, string> {
    const slots: Record<string, string> = {};

    component.slots.forEach(slot => {
        // Convert the slot name to kebab case, if the name is provided. If not, use "default"
        const slotName = isNotEmptyString(slot.name) ? toKebabCase(slot.name) : "default";
        slots[slotName] = "";
    });

    return slots;
}

function getComponentTagName(component): string {
    return component.tag;
}

/**
 * Generates a string of HTML attributes for a given component based on its argument types and story arguments.
 * 
 * @param {JsonDocsComponent} component - The component documentation object containing its metadata.
 * @param {boolean} includeCustomUtils - Flag indicating whether to include custom utility types in the generated attributes.
 * @param {Record<string, any>} storyArgs - An object that contains the values for the component properties, indexed by property names.
 * @returns {string} A string containing valid HTML attributes in kebab-case format for the component.
 */
function getComponentAttrs(component: JsonDocsComponent, includeCustomUtils: boolean, storyArgs: Record<string, any>): string {

    // Generate argument types for the component, including or excluding custom utilities
    const componentArgTypes = generateComponentArgTypes(component, includeCustomUtils);

    // Filter out the "customUtils" argument type if includeCustomUtils is false
    const filteredArgTypes = Object.keys(componentArgTypes)
        .filter(key => key !== "customUtils" || includeCustomUtils);

    // Filter out any argument types that have null, undefined, or empty string values in storyArgs
    const validArgTypes = filteredArgTypes
        .filter(key => storyArgs[key] !== null && storyArgs[key] !== undefined && storyArgs[key] !== '');

    // Generate the HTML attributes string for valid argument types in kebab case
    let attrs = validArgTypes
        .map(key => ` ${toKebabCase(key)}="${storyArgs[key]}"`)
        .join('\n');

    // Iterate over storyArgs and process keys that end with "Json", converting them to kebab-case attributes
    Object.keys(storyArgs).forEach(key => {
        if (key.endsWith("Json")) {
            const jsonKey = key.slice(0, -4); // Remove "Json" from the end of the key
            if (isNotEmptyString(jsonKey)) {
                // Append the kebab-cased JSON key attribute to the attributes string
                attrs += ` ${toKebabCase(jsonKey)}='${storyArgs[key]}'`;
            }
        }
    });

    return attrs;
}

function getComponentSlots(component, args, nSlots: number = 7): string {
    let slots = '';

    if (component.slots.length > 0) {
        component.slots.forEach(slot => {
            if (slot.name.endsWith("<n>")) {
                // if the slot ends with "<n>", generate a group of slots start replacing "<n>" with 1, 2, ... ,`nSlots`.
                for (let i = 0; i < nSlots; i++) {
                    const slotName = slot.name.replace('<n>', i + 1);
                    const slotFinalName = toCamelCase(slotName);
                    const slotContent = args[`${slotFinalName}Slot`];
                    if (slotContent) {
                        slots += slotContent;
                    }
                }
            } else {
                const slotName = slot.name;
                const slotFinalName = isNotEmptyString(slotName) ? toCamelCase(slotName) : 'default';
                const slotContent = args[`${slotFinalName}Slot`];
                if (slotContent) {
                    slots += slotContent;
                }
            }
        });
    }

    return slots;
}

function getComponentClassNames(args, customClassNames) {
    let classNames = '';

    const customUtilsClass = args['customUtils']
        ? ` ${args['customUtils']}`
        : '';

    const hasCustomClassNames = customClassNames.length > 0;
    const hasValidCustomUtilsClass = customUtilsClass.trim().length > 0;
    if (hasCustomClassNames || hasValidCustomUtilsClass) {
        classNames = `\n class="${[...customClassNames, customUtilsClass].filter(Boolean).join(' ').trim()}"`;
    }
    return classNames;
}

export function getComponentTemplate(
    storyArgs: Record<string, any>,
    component: JsonDocsComponent,
    useWrapperElement: boolean = false,
    wrapperWidth: string = '500px',
    includeCustomUtils: boolean = false,
    nSlotsNumber?: number,
    customClassNames: string[] = [],
    debug: boolean = true
): string {

    const tag = getComponentTagName(component);
    if (debug) {
        console.log('Component tag:', tag);
    }

    const attrs = getComponentAttrs(component, includeCustomUtils, storyArgs);
    if (debug) {
        console.log('Component attributes:', attrs);
    }

    let slots = getComponentSlots(component, storyArgs, nSlotsNumber);
    if (debug) {
        console.log('Component slots:', slots);
    }

    let classNames = getComponentClassNames(storyArgs, customClassNames);
    if (debug) {
        console.log('Class names:', classNames);
    }

    let template = `<${tag}${classNames}\n${attrs}\n>${slots.trim()}</${tag}>`;
    if (useWrapperElement) {
        template = `<div style="${`width: ${wrapperWidth}; max-width: 100%;`}">${template}</div>`;
    }
    if (debug) {
        console.log('Generated template:', template);
    }

    return template;
}