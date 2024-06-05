import React from 'react';
import Link from 'next/link';

const DocList = ({ doctors }) => {
  return (
    <div>
	    <ul>
	      {doctors.map((doc) => (
	        <li>
	          <Link href='#'>{doc.attributes.fio} | {doc.attributes.slug}</Link>
	        </li>
	      ))}
	    </ul>
    </div>
  );
};

export default DocList;