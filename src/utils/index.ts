export const shuffle = <T>(array: T[]) => {
  var currentIndex = array.length,  randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const pause = (time?: number) => new Promise(res => setTimeout(res, 2000))