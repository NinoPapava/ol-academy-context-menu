import { Menu } from "./Menu";
import '../styles/MenuContext.scss'

const MenuContext = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div className="box" key={item.id}>
          <Menu title={item.title} />
        </div>
      ))}
    </div>
  )
}

export { MenuContext }