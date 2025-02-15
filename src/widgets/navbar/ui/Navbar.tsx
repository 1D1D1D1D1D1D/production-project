import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { isUserAdmin, isUserManager, userActions } from 'entities/User';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Popover } from 'shared/ui/Popover/Popover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import { getUserRoles } from 'entities/User/model/selectors/roleSelectors';
import { HFlex } from 'shared/ui/Stack/HFlex/HFlex';
import { Icon } from 'shared/ui/Icon/Icon';

import { NotificationList } from 'entities/Notification';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { NotificationButton } from 'features/notificationButton';
import cls from './Navbar.module.scss';

type NavBarProps = {
    className?: string;
};
export const Navbar = memo(({ className }: NavBarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const roles = useSelector(getUserRoles);
    const dispatch = useDispatch();
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onLogout = useCallback(() => {
        dispatch(userActions.logOut());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    return (
        <aside className={classNames(cls.navbar, {}, [className])}>

            {/* <Drawer isOpen={isOpen} onClose={onCloseDrawer}>sdasd</Drawer> */}
            {authData ? (
                <>
                    <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY}>
                        {t('Создать статью')}
                    </AppLink>
                    <HFlex gap="16" className={cls.actions}>
                        <NotificationButton />
                        <Dropdown
                            direction="bottom left"
                            className={cls.dropdown}
                            items={
                                [
                                    ...(isAdminPanelAvailable ? [{ content: t('Панель администатора'), href: RoutePath.admin_panel }] : []),
                                    { content: t('Профиль'), href: RoutePath.profile + authData.id },
                                    { content: t('Выйти'), onClick: onLogout },
                                ]
                            }
                            trigger={<Avatar round width={30} height={30} src={authData.avatar} />}
                        />

                    </HFlex>

                </>

            )
                : (
                    <div className={cls.links}>
                        <Button onClick={onShowModal} theme={ThemeButton.CLEAR_INVERTED}>
                            {t('Войти')}
                        </Button>
                    </div>
                )}

            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}

        </aside>
    );
});
