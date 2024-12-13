export function validateYearsProps(startYear?: number, endYear?: number, useCurrentYearAsStartYear?: boolean, useCurrentYearAsEndYear?: boolean): void {
    const currentYear = new Date().getFullYear();

    const startYearValue = useCurrentYearAsStartYear ? currentYear : startYear;
    const endYearValue = useCurrentYearAsEndYear ? currentYear : endYear;

    if (startYearValue !== undefined && endYearValue !== undefined && startYearValue > endYearValue) {
        throw new Error('Invalid year range: startYear cannot be greater than endYear');
    }
}