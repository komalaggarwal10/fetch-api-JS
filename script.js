/**
 * @returns response as an array of objects
 */
async function getData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.log('error');
    }
}
/**
 * display the response from getData() in table form
 */
async function showData(){
    const data=await getData();
    const table = document.createElement("table");
        table.classList.add("user-table");

        // Create the header row
        const headerRow = document.createElement("tr");
        headerRow.innerHTML = `
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Address</th>
        `;
        table.appendChild(headerRow);

        data.forEach(member => {
            const row = document.createElement("tr");
                            row.innerHTML = `
                                <td>${member.name}</td>
                                <td>${member.username}</td>
                                <td>${member.email}</td>
                                 <td>${member.phone}</td>
                                  <td>${member.address.street + " "+member.address.suite +" " + member.address.city + " "+member.address.zipcode}</td>
                            `;

                            table.appendChild(row);
       
                          
        });
        
        const display = document.getElementById('display');
        display.appendChild(table);
        

}




  