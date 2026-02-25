import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tv/airing-today')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tv/airing-today"!</div>
}
