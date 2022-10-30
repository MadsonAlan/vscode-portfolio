import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import ContactCode from '../../components/ContactCode';

export default {
  title: 'Components/ContactCode',
  component: ContactCode
} as ComponentMeta<typeof ContactCode>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContactCode> = () => <ContactCode/>;
 export const Default = Template.bind({}); 