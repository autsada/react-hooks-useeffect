const todos = [
  {
    title: 'Exercise',
    status: 'true'
  },
  {
    title: 'Cleaning room',
    status: 'false'
  },
  {
    title: 'Practicing hooks',
    status: 'false'
  },
  {
    title: 'Reading post',
    status: 'true'
  }
]

export const backend = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(todos)
    }, 8000)
  })
}
