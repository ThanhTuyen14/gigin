export interface IGame {
  id: number;
  name: string;
  description: string;
  link: string;
  img: string;
}

export interface ICard {
  id: number;
  image: string;
  flipped: boolean;
  matched: boolean;
}

export interface ICell {
  revealed: boolean;
  mine: boolean;
  adjacentMines: number;
}
