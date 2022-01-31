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
    sm = "576px";
    md = "768px";
    lg = "992px";
    xl = "1200px";
    xxl = "1400px";

    constructor() {
        this.extraSmall = `(max-width: ${this.sm})`;
        this.small = `(max-width: ${this.md})`;
        this.medium = `(max-width: ${this.lg})`;
        this.large = `(max-width: ${this.xl})`;
        this.extraLarge = `(max-width: ${this.xxl})`;
        this.largest = `(min-width: ${this.xl})`;
    }
}

const theme = new Theme();

module.exports = { theme };
