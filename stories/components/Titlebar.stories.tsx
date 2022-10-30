import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import { Titlebar } from '../../components/Titlebar';

export default {
  title: 'Components/Titlebar',
  component: Titlebar
} as ComponentMeta<typeof Titlebar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Titlebar> = () => <Titlebar/>;
 export const Default = Template.bind({}); 