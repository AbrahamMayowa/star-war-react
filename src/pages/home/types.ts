export interface IPeople {
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: string;
}

export interface IPeoples {
    count: string;
    next: number | null;
    peoples: IPeople[];
}

export interface IFooterProps {
    handlePagination: Function;
    next: number | null;
}