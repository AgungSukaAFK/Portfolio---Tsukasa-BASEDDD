const { exec } = require("child_process");

const command = `npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch`;
// const command = `echo jajaja`;

console.log("Tailwind running...");
exec(command, (error, stdout, stderr) => {
  console.log(`Try execute: ${command}`);

  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log("Working...");

    console.log(`Output:\n${stdout}`);
    console.error(`Errors:\n${stderr}`);
  }
});
