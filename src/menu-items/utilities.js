// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LineChartOutlined
} from '@ant-design/icons'; 
// icons
const icons = {
  UserOutlined,
  ShoppingCartOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LineChartOutlined,
  AppstoreAddOutlined
};
import { useTranslation } from 'react-i18next';
// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'management_a',
  title: 'AdminManagement',
  type: 'admin',
  children: [
    {
      id: 'util-admin',
      title : 'Admin',
      type: 'item',
      url: '/adminManage',
      icon: icons.UserOutlined
    },
    {
      id: 'util-customer',
      title: 'Customer',
      type: 'item',
      url: '/customerManage',
      icon: icons.ShoppingCartOutlined
    },
    {
      id: 'util-chart',
      title: 'Chart',
      type: 'item',
      url: '/chart',
      icon: icons.LineChartOutlined,
      breadcrumbs: false
    },
    {
      id: 'ant-icons',
      title: 'Ant Icons',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    }
  ]
};

export default utilities;
