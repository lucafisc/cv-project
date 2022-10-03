import SidebarItem from "./SidebarItem";
import SectionTitle from "./SectionTitle";
import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function SidebarSection(props) {
  const { fields, title } = props;
  const sideBarItems = [];
  Object.keys(fields).forEach((key, index) => {
    sideBarItems.push(<SidebarItem field={fields[key]} key={key} />);
  });
  return (
    <div className="sidebar-section">
      {sideBarItems && <SectionTitle title={title} />}
      {sideBarItems}
    </div>
  );
}
