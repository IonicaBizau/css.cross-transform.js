// Dependencies
var Crossy = require("crossy");

/**
 * CSSCrossTransform
 * Create css transform properties with cross-browser support.
 *
 * @name CSSCrossTransform
 * @function
 * @param {String|Element|NodeList} elm A stringified query selector, an element or a node list.
 * @param {String} value The CSS transform value.
 * @return {NodeList|Array} The selected elements.
 */
function CSSCrossTransform(elm, value) {
    return Crossy(elm, "transform", value);
}

module.exports = CSSCrossTransform;
