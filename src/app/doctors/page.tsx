import Link from 'next/link';
import DocList from '../components/DocList';

async function fetchDocs() {
  const res = await fetch('http://127.0.0.1:1337/api/doctors/');
  const result = await res.json();
  return result.data;
}

export default async function Doctor() {
  const doctors = await fetchDocs();

  return (
    <div>
      
      {/*<DocList doctors={doctors} />*/}
      
      <ul>
       {doctors.map(doc => (
          <li>
            <Link href={'/doctors/' + doc.attributes.slug}>{doc.attributes.fio}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
