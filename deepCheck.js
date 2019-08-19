function objectExistsWithId(arr, id) {
  return arr.reduce((acc, curr) => {
    if (curr.id === id) {
      return true;
    } else if (curr.children.length > 0) {
      return objectExistsWithId(curr.children, id);
    } else {
      return acc;
    }
  }, false);
}

function find(arr, id) {
  return arr.reduce((acc, curr) => {
    if (curr.id === id) {
      return true;
    } else if (curr.children.length > 0) {
      return objectExistsWithId(curr.children, id);
    } else {
      return acc;
    }
  }, false);
}


console.log(objectExistsWithId([
  {
    id: '111',
    title: '123',
    link: { type: 'internal', url: '/home' },
    children: [
      {
        id: '333',
        title: '123',
        link: { type: 'internal', url: '/home' },
        children: [],
      },
    ],
  },
  {
    id: '222',
    title: '123',
    link: { type: 'internal', url: '/home' },
    children: [],
  },
], '333'))
