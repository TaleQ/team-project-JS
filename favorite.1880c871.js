!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var o=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,r){i[e]=r},e.parcelRequired7c6=o),o("cFA0N"),o("6ShQF"),o("iOi8o"),o("45HTb"),o("iKITy"),o("ibL0t");var n=o("iOi8o"),t={cardListFavorite:document.querySelector(".cards__list-favorite")},a=(0,n.getFavorite)(),d=Object.values(a).map((function(e){var r=Boolean(null==a?void 0:a.hasOwnProperty(e.id));return(0,n.createMarkupForCard)(e,r,!0)})).join("");t.cardListFavorite.innerHTML=d}();
//# sourceMappingURL=favorite.1880c871.js.map