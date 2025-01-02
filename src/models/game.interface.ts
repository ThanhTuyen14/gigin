export interface IGame {
    id: number;
    name: string;
    description: string;
    link: string;
    img: string;
}

export interface ICard {
    id: number;
    imageName: string;
    revealed: boolean;
}