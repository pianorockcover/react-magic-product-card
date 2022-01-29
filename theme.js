/**
 * Theme of the package
 */
class Theme {
    /* Colors */
    default = "#444444";
    primary = "#0b8bf1";
    contrast = "#E91E63";
    warning = "#f69305";
    success = "#2ecc71";

    /* Sizes */
    borderRadius = "12px";

    /* Breakpoints */
    sm = 576;
    md = 768;
    lg = 992;
    xl = 1200;
    xxl = 1400;

    constructor() {
        this.extraSmall = `(max-width: ${this.sm}px)`;
        this.small = `(max-width: ${this.md}px)`;
        this.medium = `(max-width: ${this.lg}px)`;
        this.large = `(max-width: ${this.xl}px)`;
        this.extraLarge = `(max-width: ${this.xxl}px)`;
        this.largest = `(min-width: ${this.xl}px)`;
    }
}

const theme = new Theme();

module.exports = { theme };
