export interface IRoute {
    name: string;
    path: string;
    exact: boolean;
    component: (props: any) => any
    props?: any
}

// tab
export interface LinkTabProps {
    label?: string;
    href?: string;
  }