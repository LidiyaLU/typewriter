const sentence = "hello there from lighthouse labs";
speed = 0;
for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char);// print the char here
  }, speed+=300);

}