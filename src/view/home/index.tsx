import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import LayoutHeader from "../../component/Header";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("home组件初始化")
  },[])
  return (
    <Layout>
      <Header style={{ padding: 0 }}>
        <LayoutHeader></LayoutHeader>
      </Header>
      <Layout>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Home;
