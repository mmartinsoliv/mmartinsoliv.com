import { render, screen } from '@testing-library/react'

import SocialLinks from '.'

describe('<SocialLinks />', () => {
  it('should render the heading', () => {
    const { container } = render(<SocialLinks />)

    expect(
      screen.getByRole('heading', { name: /SocialLinks/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
