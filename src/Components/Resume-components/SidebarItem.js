import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function SidebarItem(props) {
  const { field } = props;
  return field && <h4 className="sidebar-item">{field}</h4>;
}
