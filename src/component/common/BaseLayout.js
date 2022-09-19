import { Layout } from "antd";
import Background from "../background/Background";
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
