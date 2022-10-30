import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import { ThemeInfo } from '../../components/ThemeInfo';

export default {
  title: 'Components/ThemeInfo',
  args:{
    name:"GitHub Dark",
    icon:"/github-dark.png",
    publisher:"GitHub",
    theme:"github-dark",
    description:"GitHub theme for VS Code"
  },
  argTypes:{
    name:{
      defaultValue:"GitHub Dark" || "Dracula" || "Ayu Dark" || "Ayu Mirage" || "Nord" || "Night Owl",
      type: 'string',
      description: "Nome do tema a ser selecionado"
    },
    description:{
      type: 'string',
      defaultValue: "GitHub theme for VS Code" || "Official Dracula Theme. A dark theme for many editors, shells, and more." || "A simple theme with bright colors." || "An arctic, north-bluish clean and elegant Visual Studio Code theme." || "A VS Code theme for the night owls out there.",
      description: "Descrição do tipo de tema a ser selecionado",
    },
    icon:{
      type: 'string',
      description: "Localização do icone do tema a ser selecionado",
      defaultValue: "/github-dark.png" || "/dracula.png" || "/ayu.png" || "/nord.png" || "/night-owl.png"
    },
    publisher:{
      defaultValue: "GitHub" || "Dracula Theme" || "teabyii" || "arcticicestudio" || "sarah.drasner",
      type: 'string',
      description: "Publisher theme"
    },
    theme:{
      defaultValue: "github-dark" || "dracula" || "ayu-dark" || "ayu-mirage" || "nord" || "night-owl",
      type: 'string',
      description: "Os temas disponiveis a serem selecionados"
    }
  },
  component: ThemeInfo
} as ComponentMeta<typeof ThemeInfo>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeInfo> = (args) => <ThemeInfo {...args}/>;
 export const Default = Template.bind({}); 

 export const GitHub = Template.bind({}); 
 GitHub.args = {
  name:"GitHub Dark",
  icon:"/github-dark.png",
  publisher:"GitHub",
  theme:"github-dark",
  description:"GitHub theme for VS Code"
 }
 export const Dracula = Template.bind({}); 
 Dracula.args = {
  name:"Dracula",
  icon:"/dracula.png",
  publisher:"Dracula Theme",
  theme:"dracula",
  description:"Official Dracula Theme. A dark theme for many editors, shells, and more."
 }
 export const AyuDark = Template.bind({}); 
 AyuDark.args = {
  name:"Ayu Dark",
  icon:"/ayu.png",
  publisher:"teabyii",
  theme:"ayu-dark",
  description:"A simple theme with bright colors."
 }
 export const AyuMirage = Template.bind({}); 
 AyuMirage.args = {
  name:"Ayu Mirage",
  icon:"/ayu.png",
  publisher:"teabyii",
  theme:"ayu-mirage",
  description:"A simple theme with bright colors."
 }
 export const Nord = Template.bind({}); 
 Nord.args = {
  name:"Nord",
  icon:"/nord.png",
  publisher:"arcticicestudio",
  theme:"nord",
  description:"An arctic, north-bluish clean and elegant Visual Studio Code theme."
 }
 export const NightOwl = Template.bind({}); 
 NightOwl.args = {
  name:"Night Owl",
  icon:"/night-owl.png",
  publisher:"sarah.drasner",
  theme:"night-owl",
  description:"A VS Code theme for the night owls out there."
 }
