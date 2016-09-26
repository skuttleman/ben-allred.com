export default () => (input, maxLength) => {
  if (input.length <= maxLength) return input;
  return input.slice(0, maxLength - 2) + '...';
};
