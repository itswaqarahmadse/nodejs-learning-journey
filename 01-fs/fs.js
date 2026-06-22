//const fs = require('fs');

// 1 - Create File & Override/Update File
// fs.writeFileSync('user.txt', 'Waqar Ahmad');

// 2 - Append File
// fs.appendFileSync('user.txt', '\nFrom Mardan');
// console.log(data);

// 3 - Read File
// const data = fs.readFileSync('user.txt', 'utf8');
// console.log(data);

// 4 - Delete File
// fs.unlinkSync('user.txt');

// 5 - Check Exists File
// if (fs.existsSync('user.txt')) {
//     console.log("File Found");
// }

// 6 - Create Folder
// fs.mkdirSync('uploads');

// 7 - Delete Folder
//fs.rmdirSync('uploads');

// 8 - Read Folder Files
// const files =
// fs.readdirSync('uploads');

// console.log(files);

// 9 - File Information
// const stats =
//     fs.statSync('user.txt');

// console.log(stats);

// 10 - Rename File
// fs.renameSync(
//     'user.txt',
//     'profile.txt'
// );

// 11 - Copy File
// fs.copyFileSync(
//     'profile.txt',
//     'backup.txt'
// );

// 12 - Promises Version
const fs = require('fs').promises;
async function readData() {
    try {
        const data = await fs.readFile(
            'profile.txt',
            'utf8'
        );

        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

readData();