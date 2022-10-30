import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import { ProjectCard } from '../../components/ProjectCard';

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  argTypes:{
    project: {
      description: 'Esses valores são carregados dos projetos do github que possuem uma pagina publicada ligada a ele. Esses valores são carregados automaticamente',
      defaultValue: {
        id: 'idexample',
        name: 'Project Example',
        description: 'This is a example description of the project',
        tags: ['TypeScript','CSS','JavaScript'],
        source_code: 'string',
        demo: 'string'
      }
    }
  }
} as ComponentMeta<typeof ProjectCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args}/>;
 export const Default = Template.bind({}); 