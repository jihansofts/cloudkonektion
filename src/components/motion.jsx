import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

// Adds `is-visible` once the element scrolls into view (one-shot).
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return [ref, visible];
};

/**
 * Scroll reveal wrapper.
 * variant: "up" (fade up), "fade", "left", "right", "zoom" (image scale-in),
 *          "clip" (image wipe from bottom)
 * delay: ms
 */
export const Reveal = ({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...props
}) => {
  const [ref, visible] = useInView();
  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={`${visible ? "is-visible" : ""} ${className}`}
      style={{ ...style, "--d": `${delay}ms` }}
      {...props}>
      {children}
    </Tag>
  );
};

/**
 * Staggers direct children: each child gets an increasing delay.
 * Children must be elements; they're wrapped with the reveal attributes.
 */
export const Stagger = ({
  as: Tag = "div",
  variant = "up",
  step = 110,
  start = 0,
  className = "",
  children,
  ...props
}) => {
  const [ref, visible] = useInView();
  let i = 0;
  return (
    <Tag ref={ref} className={`${visible ? "is-visible" : ""} ${className}`} {...props}>
      {Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(child, {
              "data-reveal-child": variant,
              style: {
                ...child.props.style,
                "--d": `${start + i++ * step}ms`,
              },
            })
          : child
      )}
    </Tag>
  );
};

/**
 * Word-by-word headline reveal (each word slides up out of a mask).
 * `immediate` animates on mount instead of on scroll — use for heroes.
 */
export const SplitText = ({
  as: Tag = "h2",
  text,
  className = "",
  step = 60,
  start = 0,
  immediate = false,
}) => {
  const [ref, inView] = useInView();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!immediate) return;
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, [immediate]);
  const visible = immediate ? mounted : inView;
  const words = text.split(" ");
  return (
    <Tag ref={ref} aria-label={text} className={`${visible ? "is-visible" : ""} ${className}`}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span aria-hidden="true" className="split-word">
            <span style={{ "--d": `${start + i * step}ms` }}>{w}</span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
  );
};
