import { render, screen } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const userName = await screen.findByText(/vonta/i)
  const logo = screen.getByAltText(/alchemy/i)
  const banner = screen.getByRole('banner')

  expect(logo).toBeInTheDocument()
  expect(userName).toBeInTheDocument()
  expect(banner).toHaveStyle({ background: '--grey' })
})

// expect(banner).toBeInTheDocument()
// const banner = await screen.getByRole('banner', { paragraph: { name: /vonta/i } })
