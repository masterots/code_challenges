function factorial(input) {
  return Array
          .from({ length: input }, (_, i) => input - i)
          .reduce((prev, current) => prev * current);
}

module.exports = factorial;
