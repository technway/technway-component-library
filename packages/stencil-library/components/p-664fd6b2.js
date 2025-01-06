/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
/**
 * Sanitizes input to prevent XSS and SQL injection vulnerabilities.
 *
 * @param input The input to sanitize and check for malicious patterns.
 * @returns The sanitized input if no malicious patterns are detected.
 */
function sanitizeInput(input) {
    // Remove XSS-related patterns
    const sanitized = input
        // Remove HTML tags except basic safe ones (e.g., <b>, <i>)
        .replace(/<\/?[^>]*>/gi, '')
        // Remove inline event handlers (e.g., onerror, onclick)
        .replace(/\b(on\w+)=["']?.*?["']?/gi, '')
        // Remove malicious JavaScript URLs (e.g., "javascript:")
        .replace(/javascript:/gi, '')
        // Remove control characters and invisible Unicode characters
        .replace(/[\x00-\x1F\x7F-\x9F]/g, '');
    // Remove SQL injection patterns
    const sqlSafe = sanitized
        // Remove common SQL keywords (case-insensitive)
        .replace(/\b(UNION|SELECT|DROP|INSERT|DELETE|UPDATE|WHERE|EXEC|CAST|DECLARE|ALTER|CREATE|REPLACE|TRUNCATE|MERGE)\b/gi, '')
        // Remove harmful characters used in SQL injection
        .replace(/['";$%{}()]/g, '')
        // Remove double-dashes used for comments in SQL
        .replace(/--/g, '')
        // Remove semicolons often used to chain SQL statements
        .replace(/;/g, '')
        .trim();
    // Escape remaining special characters
    return escapeHtml(sqlSafe);
}
/**
 * Escapes special HTML characters in a given input string to prevent XSS attacks.
 *
 * Replaces the following characters:
 * - '&' with '&amp;'
 * - '<' with '&lt;'
 * - '>' with '&gt;'
 * - '"' with '&quot;'
 * - '\'' with '&#39;'
 *
 * @param input The string to escape HTML characters in.
 * @returns The escaped string with HTML characters replaced.
 */
function escapeHtml(input) {
    return input
        .replace(/&/g, '&amp;') // Replace ampersand
        .replace(/</g, '&lt;') // Replace less-than
        .replace(/>/g, '&gt;') // Replace greater-than
        .replace(/"/g, '&quot;') // Replace double quotes
        .replace(/'/g, '&#39;'); // Replace single quotes
}
/**
 * Checks if the given input string contains any patterns that could be used for SQL injection or XSS.
 * Throws an error if a pattern is detected, otherwise returns false.
 *
 * The following patterns are currently detected:
 * - Double dashes '--' (used for comments in SQL)
 * - Semicolons ';' (used to chain SQL statements)
 * - Common SQL keywords: UNION, SELECT, DROP, INSERT, DELETE, UPDATE, WHERE, etc. (case-insensitive)
 * - <script> tags and their content
 * - HTML tags except basic safe ones
 * - Inline event handlers (e.g., onerror, onclick)
 * - Malicious JavaScript URLs
 * - Control characters and invisible Unicode characters
 * - Harmful characters used in SQL injection (e.g., single quotes, double quotes, semicolons)
 * - Unsafe HTML characters: &, <, >, ", '
 */
function containsSQLInjectionPatterns(input) {
    const forbiddenPatterns = [
        /--/, // Double dashes
        /;/, // Semicolon
        /\b(UNION|SELECT|DROP|INSERT|DELETE|UPDATE|WHERE|EXEC|CAST|DECLARE|ALTER|CREATE|REPLACE|TRUNCATE|MERGE)\b/i, // SQL keywords
        /<\/?[^>]*>/gi, // HTML tags
        /\b(on\w+)=["']?.*?["']?/gi, // Inline event handlers
        /javascript:/gi, // JavaScript URLs
        /[\x00-\x1F\x7F-\x9F]/g, // Control characters and invisible Unicode
        /['";$%{}()]/g, // Harmful SQL characters
        /&/g, // Ampersand
        /</g, // Less-than
        />/g, // Greater-than
        /"/g, // Double quotes
        /'/g, // Single quotes
    ];
    const detected = forbiddenPatterns.some((pattern) => pattern.test(input));
    return detected;
}

export { containsSQLInjectionPatterns as c, sanitizeInput as s };

//# sourceMappingURL=p-664fd6b2.js.map