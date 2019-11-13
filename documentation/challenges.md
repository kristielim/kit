# Updating the Challenge List on Firebase

The challenge data is stored on a Google sheet that the entire team can access:  
https://docs.google.com/spreadsheets/d/1eiZz5cks3W7NekPBNVv4IO_jA1GIqLWXxKhb6hRdA_k/edit#gid=0

Download the Google sheet as a csv and name it `challenges.csv`. Create a new folder named whatever you want and move `challenges.csv` to that folder.

In the same folder, create a new file called `getChallengesJSON.js` and copy this over:

```js
const csv = require("csv-parser");
const fs = require("fs");

const results = [];

fs.createReadStream("./challenges.csv")
  .pipe(csv())
  .on("data", data => results.push(data))
  .on("end", () => {
    const challenges = { count: results.length };
    for (let i = 0; i < results.length; i++) {
      challenges[i] = results[i];
    }
    fs.writeFile("./challenges.json", JSON.stringify(challenges), err => {
      if (err) throw err;
    });
  });
```

From the command line, navigate to your new folder. Since this script uses the npm package `csv-parser`, we need to install it first:

```shell
npm install csv-parser
```

Then run the script.

```shell
node ./getChallengesJSON.js
```

This will generate the file `challenges.json`. In the Firebase console for Realtime Database, click "challenges". VERY IMPORTANT: MAKE SURE YOU'RE UPLOADING TO CHALLENGES AND NOT ANYWHERE ELSE OR IT WILL WIPE OUT THAT DATA.

Once you're at the challenges page, click the three dot menu and select "Import JSON." Upload the `challenges.json` file.
