import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import { Tab } from '../../components/Tab';

export default {
  title: 'Components/Tab',
  args: {
    icon:"/react_icon.svg", filename:"home.tsx", path:"/"
  },
  component: Tab
} as ComponentMeta<typeof Tab>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args}/>;
 export const Default = Template.bind({});
 export const Github = Template.bind({});
 Github.args ={
  icon:"/markdown_icon.svg", filename:"github.md", path:"/github"
 } 
 export const Projects = Template.bind({});
 Projects.args ={
  icon:"/typescript.svg", filename:"projects.ts", path:"/projects"
 } 
 export const Contacts = Template.bind({});
 Contacts.args ={
  icon:"/css_icon.svg", filename:"contact.css", path:"/contact"
 } 
 export const About = Template.bind({});
 About.args ={
  icon:"/html_icon.svg", filename:"about.html", path:"/about"
 } 