import { render, screen } from '@testing-library/react'

import Post from '.'

describe('<Post />', () => {
  it('should render the heading', () => {
    const { container } = render(<Post />)

    expect(screen.getByRole('heading', { name: /Post/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
