module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        Plugin: [
            "module-resolver",
            {
                "root": ["./App.tsx"],
                "extensions": [".js", ".jsx", ".es", ".es6", ".mjs"],
                "alias": {
                    "@assets": "./src/assets",
                    "@components": "./src/components",
                    "@config": "./src/config",
                    "@hooks": "./src/hooks",
                    "@routes": "./src/routes",
                    "@screens": "./src/screens",
                    "@services": "./src/services",
                    "@utils": "./src/utils",
                    "@styles": "./src/styles",
                },
            },
        ],
    };
};
