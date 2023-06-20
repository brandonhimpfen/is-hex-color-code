function isHex(color) {
  // Remove the # character if present
  const hex = color.replace('#', '');

  // Check if the string consists of 3 or 6 hex digits
  const hexRegex = /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/;
  return hexRegex.test(hex);
}

module.exports = isHex;
