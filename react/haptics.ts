/**
 * JBC Design System: Haptic Semantic Mapping
 * This module provides a standardized abstraction for triggering tactile feedback.
 * Implementation is platform-specific (No-op on Web, Native bindings for iOS/Android).
 */

export type JBCHapticType = 
  | 'success'     // Task completion, positive outcome
  | 'error'       // Critical failure, invalid input
  | 'warning'     // Alert, threshold reached
  | 'info'        // Selection change, subtle navigation
  | 'like'        // Social engagement, soft preference
  | 'transaction'; // Heavy/Rigid commitment, signing

/**
 * Triggers a semantic haptic pattern.
 * Note: On web, this is a no-op as browser vibration APIs are insufficient 
 * for high-fidelity enterprise haptics. Native SDKs override this.
 * 
 * @param type The semantic intent of the feedback
 */
export const triggerHaptic = (type: JBCHapticType): void => {
  // Web Implementation: No-op
  // Native SDK Implementation:
  // - iOS: UIImpactFeedbackGenerator / UINotificationFeedbackGenerator
  // - Android: HapticFeedbackConstants / VibrationEffect
  console.debug(`[JBC Haptics] Semantic trigger: ${type} (No-op on Web)`);
};
