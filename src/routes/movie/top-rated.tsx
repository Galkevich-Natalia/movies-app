import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movie/top-rated')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/movies/top-rated"!</div>
}
