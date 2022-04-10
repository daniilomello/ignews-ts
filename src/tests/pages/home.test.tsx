import { render, screen } from '@testing-library/react';
import { stripe } from '../../services/stripe.config'
import Home, { getStaticProps }  from '../../pages';


jest.mock('next/router');
jest.mock('../../services/stripe.config');
jest.mock('next-auth/react', () => {
  return {
    useSession: () => [null, false]
  }
});


describe('Home Page', () => {
  it('render correctly', () => {
    render(<Home product={{ priceId: 'test-id', amount: 'R$10,00'}}/>)

    expect(screen.getByText('for R$10,00 month')).toBeInTheDocument();
  })

  it('loading initial data', async () => {
    const retrieveStripePricesMocked = jest.mocked(stripe.prices.retrieve);

    retrieveStripePricesMocked.mockResolvedValueOnce({
      id: 'test-id',
      unit_amount: 1000,
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'test-id',
            amount: '$10.00'
          }
        }
      })
    )

  })
})
