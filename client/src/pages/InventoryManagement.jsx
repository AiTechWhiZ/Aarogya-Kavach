import React, { useState, useEffect, useRef } from 'react';
import '../styles/InventoryManagement.css';

function InventoryManagement() {
  const [inventory, setInventory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const   
 [isEditing, setIsEditing] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    // Fetch inventory data from a backend API (replace with your data source)
    const fetchData = async () => {
      try {
        const response = await fetch('https://your-api-endpoint/inventory');
        const data = await response.json();
        setInventory(data);
      } catch (error) {
        console.error('Error fetching inventory data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddItem = async (newItem) => {
    try {
      const response = await fetch('https://your-api-endpoint/inventory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        const newInventory = [...inventory, await response.json()];
        setInventory(newInventory);
      } else {
        console.error('Error adding item:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleUpdateItem = async (updatedItem) => {
    try {
      const response = await fetch(`https://your-api-endpoint/inventory/${updatedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      if (response.ok) {
        const updatedInventory   
 = inventory.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
        setInventory(updatedInventory);
        setIsEditing(false);
        setEditingItemId(null);
      } else {
        console.error('Error updating item:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const   
 handleDeleteItem = async (itemId) => {
    try {
      const response = await fetch(`https://your-api-endpoint/inventory/${itemId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedInventory = inventory.filter((item) => item.id !== itemId);
        setInventory(updatedInventory);
      } else {
        console.error('Error deleting item:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleSearch   
 = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const   
 handleEditClick = (item) => {
    setIsEditing(true);
    setEditingItemId(item.id);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingItemId(null);
  };

  const filteredInventory = inventory
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())   

    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const   
 paginatedInventory = filteredInventory.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);

  return (
    <div className="inventory-management">
      <h1>Inventory Management</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search inventory..."
          value={searchTerm}
          onChange={handleSearch}
          ref={searchInputRef}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Category</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedInventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {isEditing && editingItemId === item.id ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleUpdateItem({ ...item, name: e.target.value })
                    }
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {isEditing && editingItemId === item.id ? (
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleUpdateItem({ ...item, quantity: parseInt(e.target.value) })
                    }
                  />
                ) : (
                  item.quantity
                )}
              </td>
              <td>{item.unit}</td>
              <td>
                {isEditing && editingItemId === item.id ? (
                  <input
                    type="text"
                    value={item.category}
                    onChange={(e) =>
                      handleUpdateItem({ ...item, category: e.target.value })
                    }
                  />
                ) : (
                  item.category
                )}
              </td>
              <td>{item.location}</td>
              <td>
                {isEditing && editingItemId === item.id ? (
                  <div>
                    <button onClick={handleUpdateItem}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleEditClick(item)}>Edit</button>
                    <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>   

          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>   

      </div>

      <div className="add-item-form">
        <h2>Add New Item</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const newItem = {
            name: e.target.name.value,
            quantity: parseInt(e.target.quantity.value),
            unit: e.target.unit.value,
            category: e.target.category.value,
            location: e.target.location.value,
          };
          handleAddItem(newItem);
          e.target.reset();
        }}>
          <label>Name:</label>
          <input type="text" name="name" required />
          <br />
          <label>Quantity:</label>
          <input type="number" name="quantity" required />
          <br   
 />
          <label>Unit:</label>
          <input type="text" name="unit" required />
          <br />
          <label>Category:</label>
          <input type="text" name="category" required />
          <br />
          <label>Location:</label>
          <input type="text" name="location" required />
          <br />
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
}

export default InventoryManagement;