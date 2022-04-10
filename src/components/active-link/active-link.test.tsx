import { render } from '@testing-library/react';
import { ActiveLink } from './active-link.component';

jest.mock('next/router', () => {
  return {
    useRouter(){
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {
  it('rendering correctly', () => {
    const { getByText } = render (
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    expect(getByText('Home')).toBeInTheDocument()
  })

  it('adding active class if the link are currently active', () => {
    const { getByText } = render (
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    expect(getByText('Home')).toHaveClass('active')
  })
})
