// Sieve of Atkin algorithm

export default (limit) => {
  const limitSqrt = Math.sqrt(limit);
  const sieve = new Array(limit).fill(false);
  let n;

  sieve[2] = true;
  sieve[3] = true;

  for (let x = 1; x <= limitSqrt; x += 1) {
    const xx = x * x;

    for (let y = 1; y <= limitSqrt; y += 1) {
      const yy = y * y;

      if (xx + yy >= limit) {
        break;
      }

      n = (4 * xx) + (yy);

      if (n <= limit && (n % 12 === 1 || n % 12 === 5)) {
        sieve[n] = !sieve[n];
      }

      n = (3 * xx) + (yy);

      if (n <= limit && (n % 12 === 7)) {
        sieve[n] = !sieve[n];
      }

      n = (3 * xx) - (yy);

      if (x > y && n <= limit && (n % 12 === 11)) {
        sieve[n] = !sieve[n];
      }
    }
  }

  for (n = 5; n <= limitSqrt; n += 1) {
    if (sieve[n]) {
      const x = n * n;

      for (let i = x; i <= limit; i += x) {
        sieve[i] = false;
      }
    }
  }

  return sieve.map((item, i) => (item ? i : false)).filter((item) => item);
};
