export interface IGame {
    id: number;
    name: string;
    description: string;
    link: string;
}

export interface ICard {
    id: number;
    imageName: string;
    revealed: boolean;
}