export const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5)

  return array
}

export const objectBuilder = (start, finish, iterations_number, array = []) => {
  for (let j = 0; j < iterations_number; j++) {
    array.push({
      id: j,
      image: start + j + finish
    });
  }

  return array
}
