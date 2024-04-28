import { MenuContext } from "./MenuContext";

const Menu = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <MenuContext title={item.title} />
        </div>
      ))}
    </div>
  )
}

export { Menu }