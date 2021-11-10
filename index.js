const postcss = require("postcss");

const plugins = [
    require('postcss-safe-parser'),
    require('postcss-flexbugs-fixes')({
        bug4: false, bug6: false, bug81a: false
    }),
    require('postcss-preset-env')({
        autoprefixer: {},
        stage: 3,
    }),
];

const code = {
    less: `@vm:10px;
    .test{
        flex: 0 1 21 / @vm
    }
    `,
    scss: `$vm:10px;
    .test{
        flex: 0 1 21 / $vm
    }
    `,
    sass: `$vm:10px;
    .test
        flex: 0 1 21 / $vm;
    `
}

const syntax = {
    less: require("postcss-less"),
    scss: require("postcss-scss"),
    sass: require("postcss-sass"),
}

const run = (type) =>
    postcss(plugins).process(code[type], { syntax: syntax[type] }).then(res => {
        console.log(`\n----------${type} result---------\n${res.content}\n`);
    });

(async () => {
    await run("less");
    await run("scss");
    await run("sass");
})()
