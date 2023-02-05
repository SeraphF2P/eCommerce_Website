import * as arrayUtils from './arrayUtils';
import * as domUtils from './domUtils';
import * as formatters from './formatters';
import * as other from './other';
import * as ui from './ui';
import * as performance from './performance';
import useToggle from './wds_hooks/useToggle';
import useArray from './wds_hooks/useArray';
import useAsync from './wds_hooks/useAsync';
import useClickOutside from './wds_hooks/useClickOutside';
// import useCookie from './wds_hooks/useCookie';
// import useCopyToClipboard from './wds_hooks/useCopyToClipboard';
import useDarkMode from './wds_hooks/useDarkMode';
import useDebounce from './wds_hooks/useDebounce';
import useDebugInformation from './wds_hooks/useDebugInformation';
import useDeepCompareEffect from './wds_hooks/useDeepCompareEffect';
import useEffectOnce from './wds_hooks/useEffectOnce';
import useEventListener from './wds_hooks/useEventListener';
import useFetch from './wds_hooks/useFetch';
import useGeolocation from './wds_hooks/useGeolocation';
import useHover from './wds_hooks/useHover';
import useLongPress from './wds_hooks/useLongPress';
import useMediaQuery from './wds_hooks/useMediaQuery';
import useOnlineStatus from './wds_hooks/useOnlineStatus';
import usePrevious from './wds_hooks/usePrevious';
import useRenderCount from './wds_hooks/useRenderCount';
import useScript from './wds_hooks/useScript';
import useSize from './wds_hooks/useSize';
import useStateWithHistory from './wds_hooks/useStateWithHistory';
import useStateWithValidation from './wds_hooks/useStateWithValidation';
import useStorage from './wds_hooks/useStorage';
import useTimeout from './wds_hooks/useTimeout';
import useTranslation from './wds_hooks/useTranslation';
import useUpdateEffect from './wds_hooks/useUpdateEffect';
import useWindowSize from './wds_hooks/useWindowSize';
import useOnScreen from './wds_hooks/useOnScreen';
import useScrollSensore from './myCustomHooks/useScrollSensore';
import useInterSectionObserver from './myCustomHooks/useInterSectionObserver';
import useActive from './myCustomHooks/useActive';

const my = {
    ...arrayUtils, ...domUtils, ...formatters,
    ...ui, ...other, ...performance,
    arrayUtils, domUtils, formatters,
    ui, other, performance
}
export {
    useToggle, useArray, useAsync, useClickOutside,
    //  useCookie,
    // useCopyToClipboard,
     useDarkMode, useDebounce, useDebugInformation,
    useDeepCompareEffect, useEffectOnce, useEventListener, useFetch,
    useGeolocation, useHover, useLongPress, useMediaQuery, useOnlineStatus,
    usePrevious, useRenderCount, useScript, useSize, useStateWithHistory,
    useStateWithValidation, useStorage, useTimeout, useTranslation,
    useUpdateEffect, useWindowSize, useOnScreen, useScrollSensore,
    useInterSectionObserver, useActive,
}
export default {
    ...my
};
