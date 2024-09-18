import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsloading, getProfileReadonly, getProfileValidateError, profileActions, ProfileCard, profileReducer } from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { validateForm } from 'entities/Profile/model/services/validateForm/validateForm';
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile';


interface ProfilePageProps {
    className?: string;
}
const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsloading)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateError)
    const { t } = useTranslation();

    const validateProfileTranslations = {
        [ValidateProfileErrors.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileErrors.INCORRECT_DATA]: t('Поля имени и фамилии должны быть заполнены'),
        [ValidateProfileErrors.NO_DATA]: t('Введите данные'),
        [ValidateProfileErrors.SERVER_ERROR]: t('Серверная ошибка'),
    }
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData())

        }
    }, [dispatch])

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [dispatch])

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])
    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch])
    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])
    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfilePageHeader />
            {validateErrors?.length && validateErrors.map(error => (
                <Text theme={TextTheme.ERROR} text={validateProfileTranslations[error]} key={error} />

            ))}
            <ProfileCard
                data={formData}
                error={error}
                isLoading={isLoading}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                readonly={readonly}
            />
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
