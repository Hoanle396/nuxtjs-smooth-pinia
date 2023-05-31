
export const applyDrag = (arr:any[], dragResult:any) => {
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) return arr

  const result = [...arr]
  let itemToAdd = payload

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }

  return result
}

export const generateItems = (count:number, creator:(i:number)=>void) => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(creator(i))
  }
  return result
}

export const data =[
    {
        id: "column0",
        name: "Lorem",
        props: {
            className: "card-container"
        },
        children: [
            {
                id: "20",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "khaki"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur a"
            },
            {
                id: "21",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "blanchedalmond"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
            },
            {
                id: "22",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
            },
            {
                id: "23",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "bisque"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
            },
            {
                id: "24",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e"
            },
            {
                id: "25",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "bisque"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn"
            },
            {
                id: "26",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "ghostwhite"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing e"
            },
            {
                id: "27",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
            }
        ]
    },
    {
        id: "column1",
        name: "Ipsum",
        props: {
            className: "card-container"
        },
        children: [
            {
                id: "20",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "khaki"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur a"
            },
            {
                id: "21",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "blanchedalmond"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
            },
            {
                id: "22",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
            },
            {
                id: "23",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "bisque"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
            },
            {
                id: "24",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e"
            },
            {
                id: "25",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "bisque"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn"
            },
            {
                id: "26",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "ghostwhite"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing e"
            },
            {
                id: "27",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
            }
        ]
    },
    {
        id: "column2",
        name: "Consectetur",
        props: {
            className: "card-container"
        },
        children: [
            {
                id: "20",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "khaki"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur a"
            },
            {
                id: "21",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "blanchedalmond"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
            },
            {
                id: "22",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
            },
            {
                id: "23",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "bisque"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
            },
            {
                id: "24",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e"
            },
            {
                id: "25",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "bisque"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn"
            },
            {
                id: "26",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "ghostwhite"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing e"
            },
            {
                id: "27",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
            }
        ]
    },
    {
        id: "column3",
        name: "Eiusmod",
        props: {
            className: "card-container"
        },
        children: [
            {
                id: "20",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "khaki"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur a"
            },
            {
                id: "21",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "blanchedalmond"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
            },
            {
                id: "22",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
            },
            {
                id: "23",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "bisque"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
            },
            {
                id: "24",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e"
            },
            {
                id: "25",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "bisque"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn"
            },
            {
                id: "26",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "ghostwhite"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing e"
            },
            {
                id: "27",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
            }
        ]
    },
    {
        id: "column4",
        name: "Eiusmod",
        props: {
            className: "card-container"
        },
        children: [
            {
                id: "20",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "khaki"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur a"
            },
            {
                id: "21",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "blanchedalmond"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
            },
            {
                id: "22",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
            },
            {
                id: "23",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "bisque"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
            },
            {
                id: "24",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e"
            },
            {
                id: "25",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "bisque"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn"
            },
            {
                id: "26",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "ghostwhite"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing e"
            },
            {
                id: "27",
                props: {
                    className: "block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    style: {
                        backgroundColor: "burlywood"
                    }
                },
                data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
            }
        ]
    }
]