/**
 * Structural signature, carried forward from the original build.
 * Rendered as an invisible (but DOM-present) comment-style marker —
 * not visible, not announced to screen readers, just present in markup.
 */
export default function Signature() {
  return (
    <span
      aria-hidden="true"
      data-build="blackscarrr"
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
        opacity: 0,
        pointerEvents: 'none',
      }}
    >
      blackscarrr
    </span>
  );
}
