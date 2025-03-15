import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { VFlex } from 'shared/ui/Stack/VFlex/VFlex';
import { Comment } from '../../../Comment/model/types/comment';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[]
    isLoading?: boolean

}

export const CommentList = (props: CommentListProps) => {
    const {
        className, comments, isLoading,
    } = props;
    const { t } = useTranslation();
    return (
        <VFlex gap="4" className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment, index) => (
                    <CommentCard className={cls.comment} key={index} comment={comment} isLoading={isLoading} />
                ))
                : <Text title={t('Нет комментариев')} />}
        </VFlex>
    );
};
