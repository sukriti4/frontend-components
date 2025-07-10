import initialData from "./data";
import "./style.css";

const fileData = initialData;

const Nodes = ({data}) => {
  return (
    <ul className="list">
      {
        data?.map(item => (
          <li key={item?.id}>
            {item?.name}
            {
              item?.isFolder && item?.children.length > 0 &&
              <Nodes data={item?.children} />
            }
          </li>
        ))
      }
    </ul>
    
  )
}
const FileExplorer = () => {
  return (
    <section>
        <h2>File Explorer</h2>
        <Nodes data={fileData} />
    </section>
  )
}

export default FileExplorer;