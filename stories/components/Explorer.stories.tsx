import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import { Explorer } from '../../components/Explorer';

export default {
  title: 'Components/Explorer',
  component: Explorer
} as ComponentMeta<typeof Explorer>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Explorer> = () => <Explorer/>;
 export const Default = Template.bind({}); 