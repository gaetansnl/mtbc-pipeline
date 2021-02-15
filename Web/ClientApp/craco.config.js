const darkTheme = require("@ant-design/dark-theme").default;

module.exports = {
    plugins: [
        {
            plugin: require("craco-antd"),
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            ...darkTheme,
                            "primary-color": "#00ea6c",
                            "primary-1": "#e6ffed",
                            "primary-2": "#a3ffc2",
                            "primary-3": "#7affab",
                            "primary-4": "#52ff97",
                            "primary-5": "#29ff86",
                            "primary-6": "#00ff78",
                            "primary-7": "#00d96c",
                            "primary-8": "#00b35f",
                            "primary-9": "#008c4f",
                            "primary-10": "#00663d",
                            "error-color": "#ec232e",
                            "success-color": "#40c100",
                            "select-item-selected-bg": "@primary-10"
                        },
                    },
                },
            },
        },
    ],
};
