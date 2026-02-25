import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tv/on-the-air')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tv/on-the-air"!</div>
}
