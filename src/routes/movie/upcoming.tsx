import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movie/upcoming')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/movies/upcoming"!</div>
}
