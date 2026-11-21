import {
  render, screen, fireEvent, act,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {
  describe, it, expect, vi, beforeEach, afterEach,
} from 'vitest';
import QuizScreen from '../src/screens/Quiz';

// lottie-web needs a real canvas; the animation is not what this test is about.
vi.mock('lottie-react', () => ({ Lottie: () => null }));
import db from '../db.json';

// Two questions whose right answer is in the same position.
const questions = [
  { title: 'First?', description: '', image: '', answer: 0, alternatives: ['Right', 'Wrong'] },
  { title: 'Second?', description: '', image: '', answer: 0, alternatives: ['Right too', 'Wrong'] },
];

function answer(text) {
  fireEvent.click(screen.getByText(text));
  fireEvent.click(screen.getByRole('button', { name: /confirmar/i }));
  act(() => { vi.advanceTimersByTime(3000); });
}

describe('QuizScreen', () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  it('counts a right answer in the same position as the previous one', () => {
    render(
      <ThemeProvider theme={db.theme}>
        <QuizScreen externalQuestions={questions} externalBg="" />
      </ThemeProvider>,
    );
    act(() => { vi.advanceTimersByTime(2000); }); // loading screen

    answer('Right');
    answer('Right too');

    expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch(/Você fez 2 ponto/);
  });
});
