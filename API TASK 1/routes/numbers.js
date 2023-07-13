const express = require("express");
const router = express.Router();

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

router.get("/primes", (req, res) => {
  const { limit } = req.query;
  const primes = [];
  let n = 2;
  while (primes.length < limit) {
    if (isPrime(n)) {
      primes.push(n);
    }
    n++;
  }
  res.json({ numbers: primes });
});

router.get("/fibo", (req, res) => {
  const { limit } = req.query;
  const fibo = [0, 1];
  for (let i = 2; i < limit; i++) {
    fibo.push(fibo[i - 2] + fibo[i - 1]);
  }
  res.json({ numbers: fibo });
});

router.get("/odd", (req, res) => {
  const { limit } = req.query;
  const odd = [];
  for (let i = 1; odd.length < limit; i += 2) {
    odd.push(i);
  }
  res.json({ numbers: odd });
});

router.get("/rand", (req, res) => {
  const { limit } = req.query;
  const rand = [];
  for (let i = 0; i < limit; i++) {
    rand.push(Math.floor(Math.random() * 100));
  }
  res.json({ numbers: rand });
});

module.exports = router;
