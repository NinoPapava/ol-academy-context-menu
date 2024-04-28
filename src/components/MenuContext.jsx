import { Menu } from "./Menu";

const MenuContext = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <Menu title={item.title} />
        </div>
      ))}
    </div>
  )
}

export { MenuContext }