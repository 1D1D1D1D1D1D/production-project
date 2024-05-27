

import Button from './Button';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  ThemeButton } from './Button';
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});``
Primary.args = {
    children: 'Text',
    
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE
};

// export const OutlineDark = Template.bind({});
// OutlineDark.args = {
//     children: 'Text',
// };