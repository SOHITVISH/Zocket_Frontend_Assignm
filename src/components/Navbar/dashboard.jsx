import { Layout } from "antd";
import Navbar from "./header";
import Sidebar from "./sidebar";



const { Content } = Layout;
const Dashboard = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      <Sidebar />
      <Layout>
        <Navbar />
        <Layout className="ml-[150px] bg-[#F6F9FF]">
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
