import * as React from 'react';

export interface MenuItemInterface {
    label: string;
    link?: string;
    newTab?: boolean;
    subMenu?: MenuItemInterface[];
}

export interface MenuItemProps {
    item: MenuItemInterface;
}

const MenuItem = (props: MenuItemProps) => {
    return (
        <li
            tabIndex={0}
            role="menuitem"
            style={{
                listStyle: 'none',
                fontSize: '16px',
                fontFamily: 'var(--tnw-font-text)',
                color: 'inherit',
            }}
        >
            {props.item.link ? (
                <a
                    href={props.item.link}
                    target={props.item.newTab ? '_blank' : '_self'}
                    rel={props.item.newTab ? 'noopener noreferrer' : undefined}
                    style={{
                        color: 'inherit',
                        fontSize: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    {props.item.label}
                </a>
            ) : (
                <span
                    style={{
                        color: 'inherit',
                        fontSize: 'inherit',
                    }}
                >
                    {props.item.label}
                </span>
            )}
        </li>
    )
};

export default MenuItem;
