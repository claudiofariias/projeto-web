import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renderiza navegação principal', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('Início')).toBeInTheDocument();
  expect(screen.getByText('Alunos')).toBeInTheDocument();
  expect(screen.getByText('Disciplinas')).toBeInTheDocument();
});
