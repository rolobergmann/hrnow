let items = [
    { itemId: 1, itemName: 'Prueba nombre 1', itemPrice: 1000 }
    // ... más objetos
  ];
  
  function renderTable() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Limpiar la tabla
  
    items.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.itemId}</td>
        <td>${item.itemName}</td>
        <td>$${item.itemPrice}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="removeItem(${item.itemId})">Eliminar</button>
          <button class="btn btn-secondary btn-sm" onclick="promptEditItem(${item.itemId})">Editar</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  function addItem() {
    const itemName = prompt('Ingrese el nombre del item:');
    const itemPrice = prompt('Ingrese el precio del item:');
    if (itemName && itemPrice) {
      const newItem = {
        itemId: items.length + 1,
        itemName: itemName,
        itemPrice: parseFloat(itemPrice)
      };
      items.push(newItem);
      renderTable();
    }
  }
  
  function removeItem(itemId) {
    items = items.filter(item => item.itemId !== itemId);
    renderTable();
  }
  
  function promptEditItem(itemId) {
    const item = items.find(item => item.itemId === itemId);
    if (item) {
      const newName = prompt('Ingrese el nuevo nombre del item:', item.itemName);
      const newPrice = prompt('Ingrese el nuevo precio del item:', item.itemPrice);
      if (newName && newPrice) {
        item.itemName = newName;
        item.itemPrice = parseFloat(newPrice);
        renderTable();
      }
    }
  }
  
  function searchItem(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filteredItems = items.filter(item =>
      item.itemName.toLowerCase().includes(lowerCaseQuery) ||
      item.itemPrice.toString().toLowerCase().includes(lowerCaseQuery)
    );
    renderTable(filteredItems);
  }
  
  document.getElementById('add-item').addEventListener('click', addItem);
  document.getElementById('search-input').addEventListener('input', (e) => {
    searchItem(e.target.value);
  });
  
  renderTable();
  