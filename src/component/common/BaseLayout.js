import { Layout } from "antd";
import Header from "../header/Header";
const { Content } = Layout;

const BaseLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
    </Layout>
  );
};

export default BaseLayout;
