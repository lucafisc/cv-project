import SidebarItem from "./SidebarItem";
export default function SidebarSection(props) {
  const { fields, title } = props;
  const sideBarItems = [];
  Object.keys(fields).forEach((key, index) => {
    sideBarItems.push(<SidebarItem field={fields[key]} key={key} />);
  });

  return (
    <div className="sidebar-section">
      <h1 className="section-title">{title}</h1>
      {sideBarItems}
    </div>
  );
}
