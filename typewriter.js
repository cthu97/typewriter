const sentence = "hello there from lighthouse labs";

const typewriter = (sentence) => {
let timer =0;
for (const char of sentence){
  setTimeout(() => {process.stdout.write(char)}, timer);
  timer += 100;
}
};

typewriter(sentence)