
const paragraph = `
      <p>
        @${new Date().getFullYear()} Thuy Duong Thi Lawrence - WDD230 Project
      </p>
    `;
document.getElementById("copyright").innerHTML = paragraph

const date = document.lastModified;

document.getElementById("lastModified").innerHTML = "Last Modification: " + date;