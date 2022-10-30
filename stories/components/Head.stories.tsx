import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import { CustomHead } from '../../components/Head';

export default {
  title: 'Components/CustomHead',
  component: CustomHead
} as ComponentMeta<typeof CustomHead>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomHead> = () => <CustomHead/>;
 export const Default = Template.bind({}); 