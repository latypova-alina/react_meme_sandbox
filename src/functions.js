export const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5)

  return array
}

export const arrayBuilder = (start, finish, iterations_number, array = []) => {
  for (let j = 0; j < iterations_number; j++) {
    array.push(start + j + finish)
  }

  return array
}
