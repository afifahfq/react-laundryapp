import React from 'react';

import { CgHome } from 'react-icons/cg';
import { AiOutlineFolderOpen, AiOutlineLineChart } from 'react-icons/ai';
import { CiSettings } from 'react-icons/ci';
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { FiCreditCard } from 'react-icons/fi';
import { TiTick } from 'react-icons/ti';

export const links = [
  {
    title: 'Menu',
    links: [
      {
        name: 'Home',
        to: '',
        icon: <CgHome />,
      },
      {
        name: 'Products',
        to: 'products',
        icon: <AiOutlineFolderOpen />,
      },
      {
        name: 'Sales',
        to: 'sales',
        icon: <AiOutlineLineChart />,
      },
      {
        name: 'Settings',
        to: 'settings',
        icon: <CiSettings />,
      },
    ],
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
];

export const barXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Date Creation',
};

export const barYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  // labelFormat: '{value}°C',
  title: 'Total Sold',
};

export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: '+$350',
    title: 'Paypal Transfer',
    desc: 'Money Added',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsShield />,
    amount: '-$560',
    desc: 'Bill Payment',
    title: 'Wallet',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <FiCreditCard />,
    amount: '+$350',
    title: 'Credit Card',
    desc: 'Money reversed',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',

    pcColor: 'green-600',
  },
  {
    icon: <TiTick />,
    amount: '+$350',
    title: 'Bank Transfer',
    desc: 'Money Added',

    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: <BsCurrencyDollar />,
    amount: '-$50',
    percentage: '+38%',
    title: 'Refund',
    desc: 'Payment Sent',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const barSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    // name: 'Gold',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Gold',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Silver',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Bronze',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
];

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const addProductFields = [
  {
      labelFor:"product-name",
      id:"product-name",
      name:"product-name",
      type:"text",
      // autoComplete:"email",
      isRequired:true,
      placeholder:"Product Name"   
  },
  {
      labelFor:"product-desc",
      id:"product-desc",
      name:"product-desc",
      type:"text",
      // autoComplete:"current-password",
      isRequired:true,
      placeholder:"Description"   
  },
  {
    labelFor:"product-sku",
    id:"product-sku",
    name:"product-sku",
    type:"text",
    // autoComplete:"current-password",
    isRequired:true,
    placeholder:"SKU"   
  },
  {
    labelFor:"product-stock",
    id:"product-stock",
    name:"product-stock",
    type:"number",
    // autoComplete:"current-password",
    isRequired:true,
    placeholder:"Stock"   
  },
]

export const addProductCategory = [
  {
    labelFor:"wash-fold",
    value:"wash-fold",
    id:"wash-fold",
    name:"wash-fold",
    placeholder:"Wash and Fold"   
  },
  {
    labelFor:"dry-clean",
    value:"dry-clean",
    id:"dry-clean",
    name:"dry-clean",
    placeholder:"Dry Clean"   
  },
  {
    labelFor:"home",
    value:"home",
    id:"home",
    name:"home",
    placeholder:"Home"   
  },
  {
    labelFor:"other",
    value:"other",
    id:"other",
    name:"other",
    placeholder:"Other"   
  },
]
