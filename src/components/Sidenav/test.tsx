import { render, screen } from '@testing-library/react'

import Sidenav from '.'

describe('<Sidenav />', () => {
  it('should render the heading', () => {
    const { container } = render(<Sidenav />)

    expect(
      screen.getByRole('heading', { name: /Sidenav/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
