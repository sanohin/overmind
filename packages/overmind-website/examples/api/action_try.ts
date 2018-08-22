export const js = [
  {
    fileName: 'app/operations.js',
    code: `
export const getItems = ({ http }) =>
  http.get('/items')
  `,
  },
  {
    fileName: 'app/actions.js',
    code: `
export const handleItemsAction = action => action()

export const handleItemsErrorAction = action => action()

export const doThis = action => 
  action()
    .try(operations.getItems, {
      success: handleItemsAction(action),
      error: handleItemsErrorAction(action)
    })
    `,
  },
]

export const ts = [
  {
    fileName: 'app/operations.js',
    code: `
export const getItems: Try<Promise<Items>> = ({ http }) =>
  http.get('/items')
  `,
  },
  {
    fileName: 'app/actions.js',
    code: `
export const handleItemsAction: Action = action => action()

export const handleItemsErrorAction: Action = action => action()

export const doThis: Action = action => 
  action()
    .try(operations.getItems, {
      success: handleItemsAction(action),
      error: handleItemsErrorAction(action)
    })
    `,
  },
]
