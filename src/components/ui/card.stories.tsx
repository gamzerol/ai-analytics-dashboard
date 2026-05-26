import type { Meta, StoryObj } from '@storybook/nextjs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
import { Button } from './button'
import { Badge } from './badge'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">Card content area.</p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Project Alpha</CardTitle>
        <CardDescription>Q2 2026 Analytics</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-muted-foreground text-sm">
          Total revenue increased by 24% compared to last quarter.
        </p>
        <Badge variant="secondary" className="w-fit">
          Active
        </Badge>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">View Details</Button>
      </CardFooter>
    </Card>
  ),
}

export const MetricCard: Story = {
  render: () => (
    <Card className="w-64">
      <CardHeader className="pb-2">
        <CardDescription>Total Users</CardDescription>
        <CardTitle className="text-3xl">24,521</CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="default" className="text-xs">
          +12% this month
        </Badge>
      </CardContent>
    </Card>
  ),
}
