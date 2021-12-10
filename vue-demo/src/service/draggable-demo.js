// Just Demo Mock Data
export async function getList() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            list: ['hello']
          })
        }, 2000)
      })
  }