
const override = (config, ecn) => {
    require('react-app-rewire-postcss')(config, {
        plugins: loader => [
            require('postcss-px-to-viewport')({
                viewportWidth: 750, // (Number) The width of the viewport.
                viewportHeight: 1334, // (Number) The height of the viewport.
                unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
                viewportUnit: 'vw', // (String) Expected units.
                selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
                minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
                mediaQuery: false // (Boolean) Allow px to be converted in media queries.
            }),
            require('postcss-write-svg')({
                utf8: false
            }),
            require('cssnano')({
                preset: "advanced",
                autoprefixer: false,
                "postcss-zindex": false
            })
        ]
    });
    return config
}



module.exports = override