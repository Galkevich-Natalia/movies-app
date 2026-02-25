import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movie/now-playing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/movies/now_playing"!</div>
}
