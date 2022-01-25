import { screen, render } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const { name, color, motto, likes } = user

  const profileBackground = await screen.findByAltText('header')
  const profilePhoto = screen.getByAltText('avatar')

  const userMotto = screen.getByText(motto)
  const favColor = screen.getByText(color)

  const userName = screen.getByRole('heading', { name })
  const userInterests = screen.getByRole('heading', { name: /interests/i })
  const userList = screen.getByRole('list')

  expect(profileBackground).toBeInTheDocument()
  expect(profilePhoto).toBeInTheDocument()
  expect(userMotto).toBeInTheDocument()
  expect(favColor).toBeInTheDocument()
  expect(userName).toBeInTheDocument()
  expect(userInterests).toBeInTheDocument()
  expect(userList.children.length).toEqual(likes.length)
})
