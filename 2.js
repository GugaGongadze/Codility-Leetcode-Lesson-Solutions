function lesson2(A) {
  const res = {}

  for (const el of A) {
    if (res[el]) {
      delete res[el]
    } else {
      res[el] = true
    }
  }

  return Number(Object.keys(res)[0])
}

lesson3([], 1)
