import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
import React from 'react';

const Header: React.FC = () => {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
    },
    {
      label: 'Products',
      icon: 'pi pi-fw pi-shopping-cart',
      items: [
        {
          label: 'Category 1',
          icon: 'pi pi-fw pi-bookmark',
        },
        {
          label: 'Category 2',
          icon: 'pi pi-fw pi-bookmark',
        },
      ]
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info-circle',
    },
    {
      label: 'Contact',
      icon: 'pi pi-fw pi-envelope',
    },
  ];

  const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="10" className="mr-2 h-10"></img>;
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
      <Button label="Login" icon="pi pi-user" className="p-button-outlined" />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}

export default Header;