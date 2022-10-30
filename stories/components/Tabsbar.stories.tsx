import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import { Tabsbar } from '../../components/Tabsbar';

export default {
  title: 'Components/Tabsbar',
  component: Tabsbar
} as ComponentMeta<typeof Tabsbar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabsbar> = () => <Tabsbar/>;
 export const Default = Template.bind({}); 