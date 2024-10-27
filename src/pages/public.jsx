import { createClient } from '@/utils/db/static-props'

export default function PublicPage({ data }) {
  return <pre>{data && JSON.stringify(data, null, 2)}</pre>
}

export async function getStaticProps() {
  const supabase = createClient()

  const { data, error } = await supabase.from('countries').select()

  if (error || !data) {
    return { props: {} }
  }

  return { props: { data } }
}