let tr = document.createElement("tr");
for (i = 0; i < 3; i++) {
  const td = document.createElement("td");
  td.textContent = "hi";
  tr.append(td);
}
const body = document.querySelector("body");
console.dir(tr);
body.append(tr);
