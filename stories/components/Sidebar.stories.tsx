import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import { Sidebar } from '../../components/Sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar
} as ComponentMeta<typeof Sidebar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidebar> = () => <Sidebar/>;
 export const Default = Template.bind({}); 