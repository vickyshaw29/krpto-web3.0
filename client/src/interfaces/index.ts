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

export interface InputProps{
    name:string;
    label:string;
    value:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
    disabled:boolean;
    inlineStyle?:any;
    
}