import { Button, Col, Input, Row, Form, message } from 'antd';
import React, { useState, useCallback, useEffect } from 'react';
import omit from 'omit.js';
import ItemMap from './map';
import RegisterContext from './RegisterContext';
import styles from './index.less';

const FormItem = Form.Item;

const getFormItemOptions = ({ onChange, defaultValue, customProps = {}, rules }) => {
  const options = {
    rules: rules || customProps.rules,
  };

  if (onChange) {
    options.onChange = onChange;
  }

  if (defaultValue) {
    options.initialValue = defaultValue;
  }

  return options;
};

const RegisterItem = (props) => {
  const [count, setCount] = useState(props.countDown || 0);
  const [timing, setTiming] = useState(false); // 这么写是为了防止restProps中 带入 onChange, defaultValue, rules props tabUtil

  const {
    onChange,
    customProps,
    defaultValue,
    rules,
    name,
    updateActive,
    type,
    tabUtil,
    ...restProps
  } = props;
 
  useEffect(() => {
    let interval = 0;
    const { countDown } = props;

    if (timing) {
      interval = window.setInterval(() => {
        setCount((preSecond) => {
          if (preSecond <= 1) {
            setTiming(false);
            clearInterval(interval); // 重置秒数

            return countDown || 60;
          }

          return preSecond - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timing]);

  if (!name) {
    return null;
  } // get getFieldDecorator props

  const options = getFormItemOptions(props);
  const otherProps = restProps || {};

  
  return (
    <FormItem name={name} {...options}>
      <Input {...customProps} {...otherProps} />
    </FormItem>
  );
};

const RegisterItems = {};
Object.keys(ItemMap).forEach((key) => {
  const item = ItemMap[key];

  RegisterItems[key] = (props) => (
    <RegisterContext.Consumer>
      {(context) => (
        <RegisterItem
          customProps={item.props}
          rules={item.rules}
          {...props}
          type={key}
          {...context}
          updateActive={context.updateActive}
        />
      )}
    </RegisterContext.Consumer>
  );
});
export default RegisterItems;
