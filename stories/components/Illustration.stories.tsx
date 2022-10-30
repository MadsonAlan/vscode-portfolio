import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import { Illustration } from '../../components/Illustration';

export default {
  title: 'Components/Illustration',
  component: Illustration
} as ComponentMeta<typeof Illustration>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Illustration> = (args) => <Illustration {...args}/>;
 export const Default = Template.bind({}); 