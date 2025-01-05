export interface TnwBaseSelectOption {
    /**
     * The label to display in the dropdown.
     */
    label: string;

    /**
     * The value to emit when the option is selected.
     */
    value: string;

    /**
     * The aria-label to apply to the option.
     */
    ariaLabel?: string;

    /**
     * Whether the option is disabled.
     */
    disabled?: boolean;

    /**
     * Whether the option is selected.
     */
    selected?: boolean;
}

export interface TnwSelectOptionWithIconName extends TnwBaseSelectOption {
    /**
     * The name of the icon to display next to the option label.
     */
    iconName?: string;
}

export interface TnwSelectOptionWithSvgIcon extends TnwBaseSelectOption {
    /**
     * The SVG icon to display next to the option label.
     */
    svgIcon?: string;
}

export interface TnwSelectOptionWithImage extends TnwBaseSelectOption {
    /**
     * The source of the image to display next to the option label.
     */
    imageSource?: string;
}

export interface TnwSelectOptionWithStatus extends TnwBaseSelectOption {
    /**
     * The status of the option.
     */
    status?: 'success' | 'warning' | 'danger' | 'info' | 'primary' | 'secondary';
}

export interface TnwSelectOption
    extends TnwBaseSelectOption,
    TnwSelectOptionWithIconName,
    TnwSelectOptionWithSvgIcon,
    TnwSelectOptionWithImage,
    TnwSelectOptionWithStatus {}