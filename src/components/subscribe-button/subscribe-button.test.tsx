
import { render, screen, fireEvent } from '@testing-library/react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { SubscribeButton } from './subscribe-button.component';


jest.mock('next-auth/react');
jest.mock('next/router');

describe('SubscribeButton component', () => {
  it('rendering correctly', () => {
    const useSessionMocked = jest.mocked(useSession);
    useSessionMocked.mockReturnValueOnce({data: null, status: "unauthenticated"});

    render (<SubscribeButton />)
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = jest.mocked(signIn);
    const useSessionMocked = jest.mocked(useSession);
    useSessionMocked.mockReturnValueOnce({data: null, status: "unauthenticated"});

    render (<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now');
    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  })

  it('redirect to post when user already has a subscription', () => {
    const useRouterMocked = jest.mocked(useRouter);
    const pushMocked = jest.fn();
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: 'John Doe',
          email: 'johndoe@email.com'
        },
        activeSubscription: 'true',
        expires: 'test'
      },
      status: "authenticated"
    });

    useRouterMocked.mockReturnValueOnce({
      push: pushMocked,
    } as any);

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now');
    fireEvent.click(subscribeButton);

    expect(pushMocked).toHaveBeenCalled();
  })
})

