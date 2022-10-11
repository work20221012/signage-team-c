
const TabContent = (props) => {
  return (
    props.tabID === props.activeTab ? <div>{props.children}</div> : null
  );
}

export default TabContent;