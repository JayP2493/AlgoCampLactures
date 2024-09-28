process.stdout.write('What is your name? ');

process.stdin.on('data', function(data) {
    console.log(`Hello, ${data.toString().trim()}!`);
    process.exit(); // End the program after receiving input
});