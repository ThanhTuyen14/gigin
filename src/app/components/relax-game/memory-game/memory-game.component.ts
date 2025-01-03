import { Component, HostListener } from '@angular/core';
import { ICard } from '../../../../models/game.interface';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-memory-game',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './memory-game.component.html',
  styleUrl: './memory-game.component.scss',
})
export class MemoryGameComponent {
  images: string[] = [
    '/assets/image1.png',
    '/assets/image2.png',
    '/assets/image3.png',
    '/assets/image4.png',
    '/assets/image5.png',
    '/assets/image6.png',
    '/assets/image6.png',
    '/assets/image6.png',
    '/assets/image6.png',
    '/assets/image6.png',
  ];
  cards: ICard[] = [];
  flippedCards: ICard[] = [];
  isBoardLocked: boolean = false;

  ngOnInit(): void {
    this.adjustCardsBasedOnScreenSize();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.adjustCardsBasedOnScreenSize();
  }

  adjustCardsBasedOnScreenSize(): void {
    const screenWidth = window.innerWidth;

    let cardCount: number;
    if (screenWidth < 600) {
      cardCount = 12;
    } else {
      cardCount = 20;
    }

    this.initializeGame(cardCount);
  }

  initializeGame(cardCount: number): void {
    const selectedImages = this.images.slice(0, cardCount / 2);
    const pairs = selectedImages.flatMap((image, index) => [
      { id: index * 2, image, flipped: false, matched: false },
      { id: index * 2 + 1, image, flipped: false, matched: false },
    ]);

    this.cards = this.shuffleArray(pairs);
    this.flippedCards = [];
  }

  shuffleArray(array: ICard[]): ICard[] {
    return array.sort(() => Math.random() - 0.5);
  }

  onCardClick(card: ICard): void {
    if (this.isBoardLocked || card.flipped || card.matched) return;

    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkForMatch();
    }
  }

  checkForMatch(): void {
    const [card1, card2] = this.flippedCards;
    this.isBoardLocked = true;

    if (card1.image === card2.image) {
      card1.matched = true;
      card2.matched = true;
    } else {
      setTimeout(() => {
        card1.flipped = false;
        card2.flipped = false;
      }, 1000);
    }

    setTimeout(() => {
      this.flippedCards = [];
      this.isBoardLocked = false;
    }, 1000);
  }
}
