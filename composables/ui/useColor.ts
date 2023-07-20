import { computed, ComputedRef, WatchSource } from 'vue';
import { useWatchSource } from './useWatchSource';
export const colors = ['primary', 'secondary', 'white', 'info', 'error'] as const;
export type Colors = (typeof colors)[number] | `#${string}`;
export interface PropsColors {
    color?: Colors;
}

type UseColor = (source: WatchSource<Colors | 'inherit' | undefined>) => {
    colorVariant: ComputedRef<string>;
    colorVariantAlpha: ComputedRef<string>;
    colorVariantAlphaLow: ComputedRef<string>;
    isDefaultColor: ComputedRef<boolean>;
    isHexColor: ComputedRef<boolean>;
};
export const useColor: UseColor = (source) => {
    const props = useWatchSource(source);

    const color = computed((): Colors | 'inherit' => {
        if (typeof props.value === 'undefined') {
            return 'primary';
        }
        return props.value;
    });

    const isInherit = computed(() => {
        return color.value === 'inherit';
    });

    const isDefaultColor = computed(() => {
        //@ts-ignore
        return colors.includes(color.value);
    });

    const isHexColor = computed(() => {
        return /^#[\da-fA-F]{3}$|[\da-fA-F]{6}$/gm.test(color.value);
    });

    const colorVariant = computed(() => {
        if (isInherit.value) {
            return 'inherit';
        }
        if (isDefaultColor.value) {
            return `var(--${color.value})`;
        }
        if (isHexColor.value) {
            return color.value;
        }
        return 'var(--primary)';
    });

    const colorVariantAlpha = computed(() => {
        if (isInherit.value) {
            return 'inherit';
        }
        if (isDefaultColor.value) {
            return `var(--${color.value}-alpha)`;
        }
        if (isHexColor.value) {
            // 40 - в шестнадцатеричной системе 25 % прозрачности цвета
            return color.value + '40';
        }
        return 'var(--primary-alpha)';
    });

    return { isDefaultColor, isHexColor, colorVariant, colorVariantAlpha };
};
