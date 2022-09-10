export default function SidebarItem(props) {
  const { field } = props;
  return field && <h4 className="sidebar-item">{field}</h4>;
}
