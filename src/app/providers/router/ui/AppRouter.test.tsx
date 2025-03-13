import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import { UserRole } from 'entities/User';
import AppRouter from './AppRouter';

const getAboutRoute = () => '/about';
const getRouteProfile = (id: string) => `/profile/${id}`;
describe('AppRouter', () => {
    test('Page is rendered', async () => {
        componentRender(<AppRouter />, {
            route: '/about',
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });
    test('With unknown page', async () => {
        componentRender(<AppRouter />, {
            route: '/daskoasdkalsdklsd',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });
    test('Redirect if user is not logined', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
    test('Redirect if user is logined', async () => {
        componentRender(<AppRouter />, {
            route: '/profile/1',
            initialState: {
                user: {
                    authData: {
                        avatar: 'dfsdfdfs', id: '1', roles: UserRole.ADMIN, username: 'sdajkosdjsda',
                    },
                    isMounted: true,
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });
});
