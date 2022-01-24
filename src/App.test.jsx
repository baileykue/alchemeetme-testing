import { render, screen } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const logo = screen.getByAltText(/alchemy/i)
  const banner = screen.getByRole('banner')
  const userName = await screen.getByText(/vonta/i)

  expect(logo).toBeInTheDocument()
  expect(userName).toBeInTheDocument()
  expect(banner).toHaveStyle({ background: 'var(--grey' })
})

// expect(banner).toBeInTheDocument()
// const banner = await screen.getByRole('banner', { paragraph: { name: /vonta/i } })
