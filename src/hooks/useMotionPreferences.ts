import { useReducedMotion } from 'framer-motion';

import useIsMobile from './useIsMobile';

export interface MotionPreferences {
  isMobile: boolean;
  prefersReducedMotion: boolean;
  motionSafe: boolean;
}

const useMotionPreferences = (): MotionPreferences => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  return {
    isMobile,
    prefersReducedMotion,
    motionSafe: !(prefersReducedMotion || isMobile),
  };
};

export default useMotionPreferences;
