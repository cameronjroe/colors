export default function* () {
  while(true) {
    // yield a random color
    yield '#'+Math.floor(Math.random()*16777215).toString(16);
  }
};