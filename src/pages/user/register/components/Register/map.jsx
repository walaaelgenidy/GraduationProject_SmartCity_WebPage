import { LockTwoTone,  UserOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './index.less';

export default {
  UserName: {
    props: {
      size: 'large',
      id: 'userName',
      prefix: (
        <UserOutlined
          style={{
            color: '#ffffff',
          }}
          className={styles.prefixIcon}
        />
      ),
      placeholder: 'admin',
    },
    rules: [
      {
        required: true,
        message: 'Please enter username!',
      },
    ],
  },
  Email: {
    props: {
      size: 'large',
      id: 'email',
      prefix: (
        <UserOutlined
          style={{
            color: '#ffffff',
          }}
          className={styles.prefixIcon}
        />
      ),
      placeholder: 'admin@gmail.com',
    },
    rules: [
      {
        required: true,
        message: 'Please enter email!',
      },
    ],
  },
  Password: {
    props: {
      size: 'large',
      prefix: <LockTwoTone className={styles.prefixIcon} />,
      type: 'password',
      id: 'password',
      placeholder: '888888',
    },
    rules: [
      {
        required: true,
        message: 'Please enter password!',
      },
    ],
  },
  
 
};
