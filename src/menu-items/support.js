// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';
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
  AppstoreAddOutlined,
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'management_c',
  title: 'CustomerManagement',
  type: 'customer',
  children: [
    {
      id: 'util-customer_c',
      title: 'Customer',
      type: 'item',
      url: '/customerManage',
      icon: icons.ShoppingCartOutlined
    },
    {
      id: 'util-chart_c',
      title: 'Chart',
      type: 'item',
      url: '/chart',
      icon: icons.LineChartOutlined,
      breadcrumbs: false
    },
    {
      id: 'ant-icons_c',
      title: 'Ant Icons',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    }
  ]
};

export default support;
