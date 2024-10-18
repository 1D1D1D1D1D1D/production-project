import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HtmlInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void
    autofocus?: boolean;
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const [, setIsFocused] = useState(false);
    const [, setCaterPosition] = useState(0);

    const ref = useRef<HTMLInputElement>(null);
    const {
        className,
        value,
        onChange,
        placeholder,
        type = 'text',
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaterPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaterPosition(e.target.selectionStart || 0);
    };
    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);
    return (
        <div className={classNames(cls.InputWrapper, { [cls.readonly]: readonly }, [className])}>
            {placeholder && (
                <div>
                    {`${placeholder}> `}
                </div>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                onFocus={onFocus}
                onBlur={onBlur}
                onSelect={onSelect}
                readOnly={readonly}
                {...otherProps}
            />

        </div>
    );
});
