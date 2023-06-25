import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
const weeklyReadings = [20, 22, 20.5, 19, 21, 21.5, 23];

const correctedWeeklyReadings = weeklyReadings.map((reading) => reading + 1.5);

console.log(correctedWeeklyReadings);
