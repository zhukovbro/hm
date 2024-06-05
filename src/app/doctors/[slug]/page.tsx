import Doc from '@/app/components/Doc'

async function fetchDoc(slug) {
  const res = await fetch('http://127.0.0.1:1337/api/doctors?filters[slug][$eq]=' + slug);
  const result = await res.json();
  return result.data;
}

const Doctor = async ({params}) => {
  // console.log(params.slug)
  const doc = await fetchDoc(params.slug);
  // console.log(doc[0].attributes.fio)

  return (
    <div>
    {doc.map(el => (
        <Doc key="el.id" doc={el} />
    ))}
    </div>
    )
}
export default Doctor