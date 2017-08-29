export const isEmptyObject = function (props) {
  if (Object.keys(props).length !== 0 && props.constructor === Object) {
    return true;
  } else {
    return false;
  }
};
