import {
    createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type SpringType = typeof import ('@react-spring/web');
type GestureType = typeof import ('@use-gesture/react');

interface AnimationContextPayload {
   Gesture?: GestureType
   Spring?: SpringType
   isLoaded?: boolean
}
export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPayload>;
const AnimationContext = createContext<AnimationContextPayload>({ });
export const AnimationProvider = ({ children }: {children: ReactNode}) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsloader] = useState(false);
    const getAsyncAnimationModules = async () => Promise.all([
        import('@react-spring/web'),
        import('@use-gesture/react'),
    ]);
    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsloader(true);
        });
    }, []);
    const value = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);
    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
