import { createFileRoute } from '@tanstack/react-router'
import { EditPage } from '../components/EditPage'

export const Route = createFileRoute('/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><EditPage></EditPage></div>
}
