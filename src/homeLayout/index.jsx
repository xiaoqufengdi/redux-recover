import React, {Suspense, useEffect, useState} from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {useHistroy, useLocation, useNavigate} from 'react-router-dom';
import menuList from "../router/menu";
// import './index.less';

const { Header, Content, Sider } = Layout;


const HomeLayout = (props) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [selectedKeys, setSelectedKeys] = useState(["/base/demo0"]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        console.log('useEffect', location.pathname);
        setSelectedKeys([location.pathname]);
    }, [location.pathname]);

    const handleClick = (event) => {
        console.log('handleClick', event, event.item.path);
        const path = event.key;
        if (location.pathname !== path) {
            navigate(path);
        }
        // setSelectedKeys([path]);
    };


    return (
        <Layout className='page-layout' style={{height: '100vh'}}>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" >
                    <span><h1 style={{color: 'white'}}>redux demo</h1></span>
                </div>
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        selectedKeys={selectedKeys}
                        defaultSelectedKeys={["/base/demo0"]}
                        defaultOpenKeys={['base']}
                        onClick={handleClick}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={menuList}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    {/*<Breadcrumb*/}
                    {/*    style={{*/}
                    {/*        margin: '16px 0',*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            overflow: 'auto'
                        }}
                    >
                        {
                            props.children
                        }
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default HomeLayout;