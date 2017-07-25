export interface ImenuLeft {
    icon?: string;
    title: string;
    route?: string;
    children?: [ImenuLeft];
}

export interface chNotice {
    type: string;
    title: string;
    text: string;
    isAotDis?: boolean;
}
