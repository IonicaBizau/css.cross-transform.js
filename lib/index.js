// Dependencies
var ElmSelect = require("elm-select")
  , CrossStyle = require("cross-style")
  ;

// Constants
var STYLES = CrossStyle("transform");

/**
 * CSSCrossTransform
 * Create css transform properties with cross-browser support.
 *
 * @name CSSCrossTransform
 * @function
 * @param {String|Element|NodeList} elm A stringified query selector, an element or a node list.
 * @param {String} value The CSS transform value.
 * @return {Element} First selected element.
 */
function CSSCrossTransform(elm, value) {
    var i = 0;

    if (typeof elm === "string") {
        elm = ElmSelect(elm, CSSCrossTransform, [value]);
        return elm[0];
    }

    for (; i < STYLES.length; ++i) {
        elm.style[styles[i]] = value;
    }

    return elm;
}

module.exports = CSSCrossTransform;
