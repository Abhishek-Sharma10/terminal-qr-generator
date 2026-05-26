# QR Code Generator using Node.js

A simple QR Code Generator built with Node.js that takes user input from the terminal and generates a QR code image instantly.

---

# 🚀 Features

* Generate QR codes from any text or URL
* Simple CLI-based project
* Saves QR code as an image file
* Beginner-friendly Node.js project

---

# 🛠️ Tech Stack

* Node.js
* Inquirer.js
* qr-image
* File System (fs)

---

# 📂 Project Structure

```bash
project-folder/
│
├── index.js
├── package.json
├── package-lock.json
├── qr_img.png
├── .gitignore
└── README.md
```

---

# 📦 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/nodejs-qr-generator.git
```

## 2. Open Project Folder

```bash
cd nodejs-qr-generator
```

## 3. Install Dependencies

```bash
npm install
```

---

# ▶️ Usage

Run the project using:

```bash
node index.js
```

You will see:

```bash
? input the url:
```

Enter any URL or text.

Example:

```bash
? input the url: https://github.com
```

Output:

```bash
qr is generated
```

A QR code image named:

```bash
qr_img.png
```

will be created automatically.

---

# 💻 Source Code

```js
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "input the url:",
      name: "URL",
    },
  ])
  .then((answers) => {
    var qr_svg = qr.image(answers.URL);

    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    console.log("qr is generated");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in this environment.");
    } else {
      console.error("Something went wrong:", error);
    }
  });
```

---

# 📥 Dependencies

```bash
npm install inquirer qr-image
```

---

# 🙈 .gitignore

```gitignore
node_modules/
```

---

# 📸 Output

The program generates a QR image like this:

✅ `qr_img.png`

---

# 🌟 Future Improvements

* Add colored QR codes
* Generate QR in SVG/PDF format
* Add GUI version
* Save user input history

---

# 📄 License

This project is open-source and available under the MIT License.

---

# 👨‍💻 Author

Abhishek Kumar Sharma
