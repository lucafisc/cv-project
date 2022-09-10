import SidebarItem from "./SidebarItem";
export default function SidebarSection(props) {
  const { title, formData, fields } = props;
  //   const { phone, email, address1, address2, nationality, age } = formData;

  return (
    <div className="sidebar-section">
      <h1 className="section-title">{title}</h1>
    </div>
  );
}
