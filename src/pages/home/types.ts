export interface IPeople {
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: string;
}

export interface IPeoples {
    count: string;
    prev: number | null;
    next: number | null;
    peoples: IPeople[];
}

export interface IFooterProps {
    handlePagination: Function;
    next: number | null;
    prev: number | null;
}