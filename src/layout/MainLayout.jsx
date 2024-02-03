/* eslint-disable react/prop-types */
import { Layout } from "antd";

import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ minHeight: "100vh" }}>
        <Outlet />
      </Content>

      <Footer />
    </Layout>
  );
};

export default MainLayout
