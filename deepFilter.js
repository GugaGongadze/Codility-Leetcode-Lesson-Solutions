const removeDeepObj = (arr, id) => {
  return arr.reduce((acc, item) => {
    if (item.id === id) {
      return acc
    } else if (item.children.length > 0) {
      return acc.concat({
        ...item,
        children: removeDeepObj(item.children, id)
      })
    } else {
      return acc.concat([item]);
    }
  }, []);
};

const nav = [{
  id: '000',
  title: '123',
  link: { type: 'internal', url: '/home' },
  children: [
    {
      id: '111',
      title: '123',
      link: { type: 'internal', url: '/home' },
      children: [
        {
          id: '555',
          title: '123',
          link: { type: 'internal', url: '/home' },
          children: [],
        },
      ],
    },
  ],
},
{
  id: '222',
  title: '123',
  link: { type: 'internal', url: '/home' },
  children: [
    {
      id: '111',
      title: '123',
      link: { type: 'internal', url: '/home' },
      children: [],
    },
  ],
},
]


console.log(removeDeepObj(nav, '111'))
