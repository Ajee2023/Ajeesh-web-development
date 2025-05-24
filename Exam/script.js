document.addEventListener('DOMContentLoaded', function() {
    // This makes sure our JavaScript code only runs AFTER the whole HTML page is loaded
    // It's like waiting for all the ingredients to be on the counter before you start cooking

    const tableBody = document.getElementById('employeeTableBody');
    const table = document.querySelector('table');
    // These lines grab the empty table body and the whole table from our HTML
    // We need these so we can put the employee data into the table and make it interactive

    fetch('./employees.json')
        // This is like asking the server for our 'employees.json' file
        // It's like sending a request to get the list of employees
        .then(response => response.json())
        // Once we get the file, this part takes the raw text and turns it into a JavaScript object (like a fancy list of dictionaries).
        .then(employees => {
            // Now we have our employee data in the 'employees' variable
            // This loop goes through each employee in our list
            employees.forEach(employee => {
                const row = tableBody.insertRow();
                // For each employee, we create a new row in our table
                row.dataset.id = employee.id;
                row.dataset.email = employee.email;
                row.dataset.phone = employee.phone;
                row.dataset.hiredate = employee.hiredate;
                row.dataset.skills = employee.skills.join(', ');
                // We're adding special 'data-' attributes to each row
                // Think of these as hidden pockets on the row where we store extra info about the employee

                const iconCell = row.insertCell();
                iconCell.classList.add('icon-cell');
                iconCell.innerHTML = '<span>&#x25B6;</span>';
                // Create a cell for the arrow icon, add the class for styling, and put the arrow in it
                const idCell = row.insertCell();
                idCell.textContent = employee.id;
                // Create a cell for the ID and put the employee's ID in it

                const nameCell = row.insertCell();
                nameCell.textContent = employee.name;
                // Create a cell for the name and put the employee's name in it

                const departmentCell = row.insertCell();
                departmentCell.textContent = employee.department;
                // You get the idea... create a cell and put the department in it

                const positionCell = row.insertCell();
                positionCell.textContent = employee.position;
                // And finally, the position
            });

            // Now that the table is filled with data, we add an event listener to it.
            // This means we're telling the table to listen for clicks
            table.addEventListener('click', function(event) {
                const target = event.target;
                // 'event.target' tells us which specific thing was clicked inside the table
                if (target.tagName === 'TD') {
                    // We only care if a table data cell ('TD') was clicked
                    const row = target.parentElement;
                    // 'parentElement' gets the whole row that the clicked cell belongs to
                    const id = row.dataset.id;
                    const email = row.dataset.email;
                    const phone = row.dataset.phone;
                    const hireDate = row.dataset.hiredate;
                    const skills = row.dataset.skills;
                    const name = row.cells[2].textContent;
                    // We grab the extra info we stored in the 'data-' attributes of the row
                    // 'row.cells[2].textContent' gets the text content of the third cell (the name)

                    const existingDetailsRow = row.nextElementSibling;
                    if (existingDetailsRow && existingDetailsRow.classList.contains('details-row')) {
                        existingDetailsRow.remove();
                        row.querySelector('.icon-cell span').innerHTML = '&#x25B6;';
                        return;
                    }
                    // This part checks if a details row is already open below the clicked row
                    // If it is, we close it (remove it) and change the arrow back to pointing right

                    const detailsRow = document.createElement('tr');
                    detailsRow.classList.add('details-row');
                    detailsRow.innerHTML = `
                        <td colspan="5">
                            <strong>${name} - Details</strong><br>
                            Email: ${email}<br>
                            Phone: ${phone}<br>
                            Hire Date: ${hireDate}<br>
                            Skills: ${skills}
                        </td>
                    `;
                    row.insertAdjacentElement('afterend', detailsRow);
                    row.querySelector('.icon-cell span').innerHTML = '&#x25BC;';
                    // If no details row is open, we create a new row with all the employee's details
                    // add the 'details-row' class for styling, put the info inside
                    // and insert it right after the clicked row. We also change the arrow to point down
                }
            });
        })
        .catch(error => {
            // If something goes wrong while fetching the JSON file, this part will run
            console.error('Error fetching employees:', error);
            tableBody.innerHTML = '<tr><td colspan="5">Error loading employee data.</td></tr>';
            // We display an error message in the table if we can't get the employee data
        });
});