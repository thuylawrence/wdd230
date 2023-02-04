
const paragraph2 = `
      <p>
        @${new Date().getFullYear()} Thuy Duong Thi Lawrence - WDD230 Project
      </p>
    `;
document.getElementById("copyright").innerHTML = paragraph2

const date2 = document.lastModified;

document.getElementById("lastModified").innerHTML = "Last Modification: " + date2;