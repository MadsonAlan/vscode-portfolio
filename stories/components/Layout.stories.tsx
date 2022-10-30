import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import { Layout } from '../../components/Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes:{
    children: {
      description: 'Recebe um componente que será mostrado internamente no layout'
    }
  }
} as ComponentMeta<typeof Layout>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args}/>;
 export const Default = Template.bind({}); 