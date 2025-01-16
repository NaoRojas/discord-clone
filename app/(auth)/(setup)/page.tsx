import { initialProfile } from '@/lib/initial-profile'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'

const SetUpPage = async () => {
  const profile = await initialProfile()

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  })

  if (server) {
    return redirect(`/servers/${server.id}`)
  }

  return (
    <div>
      <h1>Create a Server</h1>
    </div>
  )
}

export default SetUpPage
