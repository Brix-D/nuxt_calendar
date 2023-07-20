import { computed, WatchSource, Ref, ComputedRef } from 'vue';

export function useWatchSource<T>(source: WatchSource<T>): Ref<T> | ComputedRef<T> {
    return typeof source === 'function' ? computed(source) : source;
}

export default useWatchSource;
