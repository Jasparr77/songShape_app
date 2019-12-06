// Placeholder viz for Rachel's work.

"use strict";
(() => {
  const chartSpace = d3.select("#scroll");
  d3.json("/load_metadata", d => {
    allSongs = d;
    return allSongs;
  })
    .then(allSongs => {
      allSongs = allSongs;
      drawStuff(allSongs);
    })
    .catch(err => console.error(err));

  function drawStuff(allSongs) {
    chartSpace.selectAll("#legendText").remove();
    chartSpace.selectAll("#aboutText").remove();
    chartSpace.selectAll("#universeText").remove();

    console.log(allSongs);

    let songs = d3
      .select("#universeGroup")
      .selectAll("text")
      .data(allSongs)
      .enter()
      .append("text")
      .html(d => {
        return ` <a href="/detail/${d["track"]["id"]}"
          </a>
          ${d["track"]["name"]}, by ${d["artist"][0]["name"]}`;
      });
  }
})();
