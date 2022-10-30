import React from 'react'
import { ComponentMeta, ComponentStory, Meta, StoryObj } from '@storybook/react'
import { Bottombar } from '../../components/Bottombar'

export default {
  title: 'Components/Bottombar',
  component: Bottombar
} as ComponentMeta<typeof Bottombar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Bottombar> = () => <Bottombar/>;
 export const Default = Template.bind({});