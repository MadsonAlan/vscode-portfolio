import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import { RepoCard } from '../../components/RepoCard';

export default {
  title: 'Components/RepoCard',
  component: RepoCard,
  argTypes:{
    repo:{
      description: 'Esses valores são carregados automaticamente dos seus projetos públicos no github',
      defaultValue: {
        id: 'example-repo',
        name:'RepoCard Example',
        description: 'This description for the example',
        url:'string',
        stargazers_count: 123,
        homepage: null,
        languages_url: 'string',
        watchers: 321,
        forks: 231,
        html_url:'string'
      }
    }
  }
} as ComponentMeta<typeof RepoCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RepoCard> = (args) => <RepoCard {...args}/>;
 export const Default = Template.bind({}); 