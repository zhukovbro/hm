const Doc = async ({doc}) => {
  console.log(doc.attributes.fio)

  return (
    <div>
    {doc.attributes.fio}<br/>
    {doc.attributes.slug}<br/>
    </div>
  );
}
export default Doc