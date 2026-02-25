import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tv/top-rated')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tv/top-rated"!</div>
}
