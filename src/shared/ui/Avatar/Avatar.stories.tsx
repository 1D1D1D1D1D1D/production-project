import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {};
Primary.args = {
    height: 350,
    width: 300,
    src: 'https://static29.tgcnt.ru/posts/_0/43/435320ad49357bcf742cdd6cc18fd28c.jpg'
};

export const Rounded: Story = {};
Rounded.args = {
    height: 300,
    width: 300,
    round: true,
    src: 'https://static29.tgcnt.ru/posts/_0/43/435320ad49357bcf742cdd6cc18fd28c.jpg'

};