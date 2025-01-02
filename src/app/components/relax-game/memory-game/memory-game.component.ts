import { Component } from '@angular/core';
import { ICard } from '../../../../models/game.interface';

@Component({
  selector: 'app-memory-game',
  imports: [],
  templateUrl: './memory-game.component.html',
  styleUrl: './memory-game.component.scss'
})
export class MemoryGameComponent {
  cards: ICard[] = [];
  selectedCards: ICard[] = [];
  matchedCards: Set<number> = new Set();
  isProcessing: boolean = false;

  images = [
    'image1.png',
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png',
    'image6.png',
    'image7.png',
    'image8.png',
    'image9.png',
    'image10.png',
  ];

  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame() {
    this.cards = [...this.images, ...this.images]
      .map((image, index) => ({ id: index, imageName: image, revealed: false }))
      .sort(() => Math.random() - 0.5);
  }

  selectCard(card: any) {
    if (this.isProcessing || this.matchedCards.has(card.id) || card.revealed) {
      return;
    }

    card.revealed = true;
    this.selectedCards.push(card);

    if (this.selectedCards.length === 2) {
      this.isProcessing = true;
      this.checkMatch();
    }
  }

  checkMatch() {
    const [first, second] = this.selectedCards;

    if (first.imageName === second.imageName) {
      this.matchedCards.add(first.id);
      this.matchedCards.add(second.id);
    } else {
      setTimeout(() => {
        first.revealed = false;
        second.revealed = false;
      }, 1000);
    }

    this.selectedCards = [];
    this.isProcessing = false;
  }
}
