import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ items = [], variant = "default" }) {
  if (!items.length) return null;

  const isInline = ["hero", "inline", "centered"].includes(variant);
  const isCentered = variant === "centered";
  const wrapClassName = isInline
    ? `${styles.breadcrumbWrap} ${styles.heroBreadcrumbWrap}`
    : styles.breadcrumbWrap;
  const listClassName = isInline
    ? `${styles.breadcrumbList} ${styles.heroBreadcrumbList}`
    : styles.breadcrumbList;
  const centeredClassName = isCentered ? ` ${styles.centeredBreadcrumbList}` : "";

  return (
    <nav className={wrapClassName} aria-label="Breadcrumb">
      <ol className={`${listClassName}${centeredClassName}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li className={styles.breadcrumbItem} key={item.href || item.label}>
              {isLast ? (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link className={styles.link} href={item.href}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
