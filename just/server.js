const parse = require("csv-parse");
const fs = require("fs");

const results = [];

const earthLike = (data) => {
  return (
    data["koi_disposition"] === "CONFIRMED" &&
    data["koi_insol"] > 0.36 &&
    data["koi_insol"] < 1.11 &&
    data["koi_prad"] < 1.6
  );
};

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (earthLike(data)) {
      results.push(data);
    }
  })
  .on("end", () => {
    console.log(results.map((planet) => planet["kepler_name"]));
    console.log("done");
  });
