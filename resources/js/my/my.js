import * as arrayUtils from './arrayUtils';
import * as domUtils from './domUtils';
import * as formatters from './formatters';
import * as other from './other';
import * as ui from './ui';
import * as performance from './performance';
import useToggle from './customHooks/useToggle';
import useArray from './customHooks/useArray';
import useAsync from './customHooks/useAsync';
import useClickOutside from './customHooks/useClickOutside';
import useCookie from './customHooks/useCookie';
import useCopyToClipboard from './customHooks/useCopyToClipboard';
import useDarkMode from './customHooks/useDarkMode';
import useDebounce from './customHooks/useDebounce';
import useDebugInformation from './customHooks/useDebugInformation';
import useDeepCompareEffect from './customHooks/useDeepCompareEffect';
import useEffectOnce from './customHooks/useEffectOnce';
import useEventListener from './customHooks/useEventListener';
import useFetch from './customHooks/useFetch';
import useGeolocation from './customHooks/useGeolocation';
import useHover from './customHooks/useHover';
import useLongPress from './customHooks/useLongPress';
import useMediaQuery from './customHooks/useMediaQuery';
import useOnlineStatus from './customHooks/useOnlineStatus';
import usePrevious from './customHooks/usePrevious';
import useRenderCount from './customHooks/useRenderCount';
import useScript from './customHooks/useScript';
import useSize from './customHooks/useSize';
import useStateWithHistory from './customHooks/useStateWithHistory';
import useStateWithValidation from './customHooks/useStateWithValidation';
import useStorage from './customHooks/useStorage';
import useTimeout from './customHooks/useTimeout';
import useTranslation from './customHooks/useTranslation';
import useUpdateEffect from './customHooks/useUpdateEffect';
import useWindowSize from './customHooks/useWindowSize';
import useOnScreen from './customHooks/useOnScreen';
import useScrollSensore from './myCustomHooks/useScrollSensore';
import useInterSectionObserver from './myCustomHooks/useInterSectionObserver';

const my = {
    ...arrayUtils, ...domUtils, ...formatters,
    ...ui, ...other, ...performance,
    arrayUtils, domUtils, formatters,
    ui, other, performance
}
export {
    useToggle, useArray, useAsync, useClickOutside, useCookie,
    useCopyToClipboard, useDarkMode, useDebounce, useDebugInformation,
    useDeepCompareEffect, useEffectOnce, useEventListener, useFetch,
    useGeolocation, useHover, useLongPress, useMediaQuery, useOnlineStatus,
    usePrevious, useRenderCount, useScript, useSize, useStateWithHistory,
    useStateWithValidation, useStorage, useTimeout, useTranslation,
    useUpdateEffect, useWindowSize, useOnScreen, useScrollSensore,
    useInterSectionObserver
}
export default {
    ...my
};
