import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ICell } from '../../../../models/game.interface';

@Component({
  selector: 'app-mine-sweeper',
  imports: [CommonModule],
  templateUrl: './mine-sweeper.component.html',
  styleUrl: './mine-sweeper.component.scss',
})
export class MineSweeperComponent {
  grid: ICell[][] = [];
  rows: number = 12;
  cols: number = 12;
  mines: number = 15;
  gameOver: boolean = false;
  gameWon: boolean = false;
  message: string = '';

  ngOnInit(): void {
    this.initializeGrid();
  }

  initializeGrid(): void {
    this.grid = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => ({
        revealed: false,
        mine: false,
        adjacentMines: 0,
      }))
    );

    for (let i = 0; i < this.mines; i++) {
      let x, y;
      do {
        x = Math.floor(Math.random() * this.rows);
        y = Math.floor(Math.random() * this.cols);
      } while (this.grid[x][y].mine);

      this.grid[x][y].mine = true;
    }

    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.cols; y++) {
        if (!this.grid[x][y].mine) {
          this.grid[x][y].adjacentMines = this.countAdjacentMines(x, y);
        }
      }
    }
  }

  countAdjacentMines(x: number, y: number): number {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const nx = x + i;
        const ny = y + j;
        if (
          nx >= 0 &&
          nx < this.rows &&
          ny >= 0 &&
          ny < this.cols &&
          this.grid[nx][ny].mine
        ) {
          count++;
        }
      }
    }
    return count;
  }

  revealCell(x: number, y: number): void {
    if (this.gameOver || this.grid[x][y].revealed) return;

    this.grid[x][y].revealed = true;

    if (this.grid[x][y].mine) {
      this.gameOver = true;
      this.message = 'You hit a mine!';
      return;
    }

    if (this.grid[x][y].adjacentMines === 0) {
      this.revealAdjacentCells(x, y);
    }

    this.checkWin();
  }

  revealAdjacentCells(x: number, y: number): void {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const nx = x + i;
        const ny = y + j;
        if (
          nx >= 0 &&
          nx < this.rows &&
          ny >= 0 &&
          ny < this.cols &&
          !this.grid[nx][ny].revealed &&
          !this.grid[nx][ny].mine
        ) {
          this.revealCell(nx, ny);
        }
      }
    }
  }

  checkWin(): void {
    const revealedCells = this.grid
      .flat()
      .filter((cell) => cell.revealed).length;
    const totalNonMineCells = this.rows * this.cols - this.mines;
    if (revealedCells === totalNonMineCells) {
      this.gameWon = true;
      this.gameOver = true;
    }
  }
}
