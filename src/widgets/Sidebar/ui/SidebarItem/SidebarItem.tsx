import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);
    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.item, { [cls.collapsed]: collapsed })} to={item.path}>
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text ?? '')}</span>
        </AppLink>
    );
};
