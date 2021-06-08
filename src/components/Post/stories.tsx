import { Story, Meta } from '@storybook/react/types-6-0'
import Post, { PostProps } from '.'

export default {
  title: 'Post',
  component: Post
} as Meta

export const Default: Story<PostProps> = (args) => <Post {...args} />
