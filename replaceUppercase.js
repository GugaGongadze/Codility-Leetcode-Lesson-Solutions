function replaceUppercase (str) {
  return str.replace(/[A-Z]+/g, (a) => {
    console.log(a)
  })
}

console.log(replaceUppercase('GuGa'))
