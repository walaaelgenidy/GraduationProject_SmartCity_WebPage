import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
import React, { useState } from 'react';
import {  connect } from 'umi';
import RegisterForm from './components/Register';
import styles from './style.less';

const { Tab, UserName, Email , Password, Submit } = RegisterForm;

const RegisterMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Register = (props) => {
  const { userRegister = {}, submitting } = props;
  const { status, type: RegisterType } = userRegister;
  const [type, setType] = useState('account');

  const handleSubmit = (values) => {
    const { dispatch } = props;
    dispatch({
      type: 'register/register',
      payload: { ...values, type },
    });
  };

  return (
    <div className={styles.main}>
      <RegisterForm activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account">
          {status === 'error' && RegisterType === 'account' && !submitting && (
            <RegisterMessage content="（admin@gmail.com/admin/ant.design）" />
          )}
            <Email
            style={{'border-radius': '10rem'}}
            name="email"
            placeholder=" admin or user @gmail"
            rules={[
              {
                required: true,
                message: 'Enter your email please',
              },
            ]}
          />
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

           loading={submitting}>Register</Submit>
        
      </RegisterForm>
    </div>
  );
};

export default connect(({ register, loading }) => ({
  userRegister: register,
  submitting: loading.effects['register/register'],
}))(Register);
