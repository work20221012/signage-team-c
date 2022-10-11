import { useState } from "react";
import TabContent from "./TabContent";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const customTabStyle = {
    fontSize: 38
  }
  const tabContentStyle = {
    margin: 20
  }
  const tabMenuStyle = {
    margin: 20
  }
  const handleMenuChange = (menu) => {
    setActiveTab(menu);
  }
  return(
    <div>
      <nav className="nav nav-pills nav-fill" style={tabMenuStyle}>
        <a className={activeTab === "tab1" ? "nav-link active" : "nav-link"} onClick={()=>{handleMenuChange("tab1")}} style={customTabStyle}>Tab 1</a>
        <a className={activeTab === "tab2" ? "nav-link active" : "nav-link"} onClick={()=>{handleMenuChange("tab2")}} style={customTabStyle}>Tab 2</a>
        <a className={activeTab === "tab3" ? "nav-link active" : "nav-link"} onClick={()=>{handleMenuChange("tab3")}} style={customTabStyle}>Tab 3</a>
      </nav>      
      <div style={tabContentStyle}>
        <TabContent tabID="tab1" activeTab={activeTab}>
          <FirstTab />
        </TabContent>
        <TabContent tabID="tab2" activeTab={activeTab}>
          <SecondTab />
        </TabContent>
        <TabContent tabID="tab3" activeTab={activeTab}>
          <ThirdTab />
        </TabContent>
      </div>
    </div>
  );
}

export default Tabs;