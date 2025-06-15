function generateTable1() {
  var data = physbench_test_score_table; // The variable from model_scores.js

  var table = '<table class="js-sort-table" id="results">';
  table += `<tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort"><strong>Method</strong></td>
          <td class="js-sort"><strong>Source</strong></td>
          <td class="js-sort"><strong>Date</strong></td>
          <td class="js-sort-number"><strong><u>ALL</u></strong></td>
          <td class="js-sort-number"><strong>Property</strong></td>
          <td class="js-sort-number"><strong>Relationships</strong></td>
          <td class="js-sort-number"><strong>Scene</strong></td>
          <td class="js-sort-number"><strong>Dynamics</strong></td>
      </tr>`;

      // sort data to make sure the best model is on top
      first_row = '-' // "Human Performance*"
      console.log(data);

      // get all keys in data
      var keys = Object.keys(data);

      // remove "Human Performance*" from keys
      var index = keys.indexOf(first_row);
      if (index > -1) {
        keys.splice(index, 1);
      }

      // add "Human Performance*" to the top of keys
      keys.unshift(first_row);

      // Sort keys by the "ALL" column (in descending order)
      keys.sort((a, b) => data[b].ALL - data[a].ALL);

      console.log(keys);

      // for (var key in data) {
      for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        console.log(key);
        var entry = data[key];

        table += '<tr>';
        table += `<td>${key}</td>`

        // for key = "1", "2", "3"
        top_ranks = ["41", "36", "37"]
        if (top_ranks.includes(key)) {
          table += `<td><b class="best-score-text">${entry.Model}</b></td>`;
          table += `<td>${entry.Method}</td>`;
          table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
          table += `<td><a href="${entry.DateSource}" class="ext-link" style="font-size: 16px;">${entry.Date}</a></td>`;
          table += `<td><b class="best-score-text">${entry.ALL.toFixed(2).toString()}</b></td>`; // .toFixed(1): round to 1 decimal place
        }
        else {
          table += `<td><b>${entry.Model}</b></td>`;
          table += `<td>${entry.Method}</td>`;
          table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
          table += `<td><a href="${entry.DateSource}" class="ext-link" style="font-size: 16px;">${entry.Date}</a></td>`;
          table += `<td><b>${entry.ALL.toFixed(2).toString()}</b></td>`;
        }

        // if entry.property is a number
        if (!isNaN(entry.property)) {
          table += `<td>${entry.property.toFixed(2).toString()}</td>`;
          table += `<td>${entry.spatial.toFixed(2).toString()}</td>`;
          table += `<td>${entry.environment.toFixed(2).toString()}</td>`;
          table += `<td>${entry.phenomena.toFixed(2).toString()}</td>`;
        }
        else {
        table += `<td>${entry.property.toString()}</td>`;
        table += `<td>${entry.spatial.toString()}</td>`;
        table += `<td>${entry.environment.toString()}</td>`;
        table += `<td>${entry.phenomena.toString()}</td>`;
        }
        table += '</tr>';
    }

  table += '</table>';
  document.getElementById('physbench_test').innerHTML = table; // Assuming you have a div with id 'container' where the table will be placed
}

function generateTable2() {
  var data = physbench_test_score_table_nonv; // The variable from model_scores.js

  var table = '<table class="js-sort-table" id="results">';
  table += `<tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort"><strong>Method</strong></td>
          <td class="js-sort"><strong>Source</strong></td>
          <td class="js-sort"><strong>Date</strong></td>
          <td class="js-sort-number"><strong><u>ALL</u></strong></td>
          <td class="js-sort-number"><strong>Property</strong></td>
          <td class="js-sort-number"><strong>Relationships</strong></td>
          <td class="js-sort-number"><strong>Scene</strong></td>
          <td class="js-sort-number"><strong>Dynamics</strong></td>
      </tr>`;

      // sort data to make sure the best model is on top
      first_row = '-' // "Human Performance*"
      console.log(data);

      // get all keys in data
      var keys = Object.keys(data);

      // remove "Human Performance*" from keys
      var index = keys.indexOf(first_row);
      if (index > -1) {
        keys.splice(index, 1);
      }

      // add "Human Performance*" to the top of keys
      keys.unshift(first_row);
      // Sort keys by the "ALL" column (in descending order)
      keys.sort((a, b) => data[b].ALL - data[a].ALL);

      console.log(keys);

      // for (var key in data) {
      for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        console.log(key);
        var entry = data[key];

        table += '<tr>';
        table += `<td>${key}</td>`

        // for key = "1", "2", "3"
        top_ranks = ["1", "24", "25"]
        if (top_ranks.includes(key)) {
          table += `<td><b class="best-score-text">${entry.Model}</b></td>`;
          table += `<td>${entry.Method}</td>`;
          table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
          table += `<td><a href="${entry.DateSource}" class="ext-link" style="font-size: 16px;">${entry.Date}</a></td>`;
          table += `<td><b class="best-score-text">${entry.ALL.toFixed(2).toString()}</b></td>`; // .toFixed(1): round to 1 decimal place
        }
        else {
          table += `<td><b>${entry.Model}</b></td>`;
          table += `<td>${entry.Method}</td>`;
          table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
          table += `<td><a href="${entry.DateSource}" class="ext-link" style="font-size: 16px;">${entry.Date}</a></td>`;
          table += `<td><b>${entry.ALL.toFixed(2).toString()}</b></td>`;
        }          

        // if entry.property is a number
        if (!isNaN(entry.property)) {
          table += `<td>${entry.property.toFixed(2).toString()}</td>`;
          table += `<td>${entry.spatial.toFixed(2).toString()}</td>`;
          table += `<td>${entry.environment.toFixed(2).toString()}</td>`;
          table += `<td>${entry.phenomena.toFixed(2).toString()}</td>`;
        }
        else {
        table += `<td>${entry.property.toString()}</td>`;
        table += `<td>${entry.spatial.toString()}</td>`;
        table += `<td>${entry.environment.toString()}</td>`;
        table += `<td>${entry.phenomena.toString()}</td>`;
        }
        table += '</tr>';
    }

  table += '</table>';
  document.getElementById('physbench_test_nonv').innerHTML = table; // Assuming you have a div with id 'container' where the table will be placed
}

// Call the function when the window loads
window.addEventListener("load", generateTable1);
window.addEventListener("load", generateTable2);
