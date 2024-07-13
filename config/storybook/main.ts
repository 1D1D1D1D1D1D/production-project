import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.stories.@(ts|tsx)'
    ],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        // "@storybook/addon-onboarding",
        // "@chromatic-com/storybook",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
       
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {
            builder: {
                useSWC: true
            }
        },
    },
    docs: {
        autodocs: "tag",
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
};
export default config;
