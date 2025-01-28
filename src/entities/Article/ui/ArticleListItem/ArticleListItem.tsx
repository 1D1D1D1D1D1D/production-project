import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import ViewsIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink from 'shared/ui/AppLink/AppLink';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleBlockType, ArticleTextBlock } from '../../model/types/article';
import { ArticleView } from '../../index';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article
    view: ArticleView

}

export const ArticleListItem = ({
    className, article, view,
}: ArticleListItemProps) => {
    const { t } = useTranslation();

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar width={30} height={30} src={article.user?.avatar} round />
                        <Text text={article.user?.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text text={article.type.join(',')} className={cls.types} />
                    <img src={article.img} alt={article.title} className={cls.image} />
                    <div className={cls.textBlock}>
                        {textBlock && <ArticleTextBlockComponent block={textBlock} />}

                    </div>

                    <div className={cls.footer}>
                        <AppLink to={RoutePath.article_details + article.id}>
                            <Button theme={ThemeButton.OUTLINE}>
                                {t('Читать')}
                            </Button>
                            <div className={cls.viewsBlock}>
                                <Icon Svg={ViewsIcon} />
                                <Text text={String(article.views)} className={cls.views} />
                            </div>
                        </AppLink>
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <AppLink to={RoutePath.article_details + article.id}>
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}

            >
                <Card className={classNames(cls.card, {}, [className, cls[view]])}>
                    <div className={cls.imageWrapper}>
                        <img src={article.img} alt={article.title} className={cls.image} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Text text={article.type.join(',')} className={cls.types} />
                        <Text text={String(article.views)} className={cls.views} />
                        <Icon Svg={ViewsIcon} />
                    </div>
                    <Text text={article.title} />
                </Card>
            </div>
        </AppLink>
    );
};
