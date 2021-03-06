export function first(arr) {
  return arr[0];
}

export function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}

export function startCase(str) {
  return str[0].toUpperCase() + str.substr(1);
}

export function firstMatch(regex, str) {
  const m = regex.exec(str);
  return m ? m[0] : null;
}

export function hasValue(s) {
  return s && s.length;
}

export function removeAfter(delimiter, str) {
  return first(str.split(delimiter)) || '';
}

export function removeBefore(delimiter, str) {
  return last(str.split(delimiter)) || '';
}

export const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};
