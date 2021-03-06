import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
import React, { useState } from 'react';
import {  connect } from 'umi';
import LoginForm from './components/Login';
import styles from './style.less';

const { Tab, UserName,  Password, Submit } = LoginForm;

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = (props) => {
  const { userLogin = {}, submitting } = props;
   const { status, type: LoginType } = userLogin;
  const [type, setType] = useState('account');

  const handleSubmit = (values) => {
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: { ...values, type },
    });
  };

  return (
    <div className={styles.main}>
      <LoginForm activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account">
          {status === 'error' && LoginType === 'account' && !submitting && (
            <LoginMessage content="（admin@gmail.com/admin/ant.design）" />
          )}
           
          <UserName
          style={{'border-radius': '10rem'}}
            name="userName"
            placeholder=" admin or user"
            rules={[
              {
                required: true,
                message: 'Enter your name please',
              },
            ]}
          />
          <Password
          style={{'border-radius': '10rem'}}
            name="password"
            placeholder=" ant.design"
            rules={[
              {
                required: true,
                message: 'Enter your password please',
              },
            ]}
          />
        </Tab>
        
           
       
        <Submit
         style={{
          ' border-radius': '10rem !important',
           'width': '100%' ,
           'margin-top': '24px'}} 

           loading={submitting}>Login</Submit>
        
      </LoginForm>
    </div>
  );
};

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
