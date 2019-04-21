import classNames from 'classnames';
import styles from '../styles/stylesHelper.less';

export const styleIf = (condition, styleIf, styleElse = null) => {
  return condition ? styleIf : styleElse;
};

export const opaqueIf = condition => {
  const opacityStyle = condition ? styles.opaque : styles.transparent;
  return classNames(styles.opacity, opacityStyle);
};

