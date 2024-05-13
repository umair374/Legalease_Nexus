import React, { useState, useEffect } from 'react';

const ManageFreeSlots = () => {
  const [freeSlots, setFreeSlots] = useState([]);
  const [newSlot, setNewSlot] = useState({ day: '', slot: '' });

  useEffect(() => {
    fetchFreeSlots();
  }, []);

  const fetchFreeSlots = async () => {
    try {
      const res = await fetch('/lawyer/freeslots');
      if (res.ok) {
        const data = await res.json();
        setFreeSlots(data);
      } else {
        console.error('Failed to fetch free slots:', res.statusText);
      }
    } catch (error) {
      console.error('Error fetching free slots:', error);
    }
  };

  const addSlot = async () => {
    try {
      const res = await fetch('/lawyer/freeslots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSlot),
      });
      if (res.ok) {
        fetchFreeSlots(); 
        setNewSlot({ day: '', slot: '' }); 
      } else {
        console.error('Failed to add free slot:', res.statusText);
      }
    } catch (error) {
      console.error('Error adding free slot:', error);
    }
  };

  const deleteSlot = async (id) => {
    try {
      const res = await fetch(`/lawyer/freeslots/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchFreeSlots(); 
      } else {
        console.error('Failed to delete free slot:', res.statusText);
      }
    } catch (error) {
      console.error('Error deleting free slot:', error);
    }
  };

  return (
    <div className="container mx-auto my-5 px-6 py-10 shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold mb-6">Manage Free Slots</h2>
      <div className="flex flex-col sm:flex-row mb-6">
        <label className="mb-2 sm:mb-0 mr-4">
          Day:
          <input
            type="text"
            required
            value={newSlot.day}
            onChange={(e) => setNewSlot({ ...newSlot, day: e.target.value })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="mb-2 sm:mb-0 mr-4">
          Slot:
          <input
            type="text"
            required
            value={newSlot.slot}
            onChange={(e) => setNewSlot({ ...newSlot, slot: e.target.value })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <button
          onClick={addSlot}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 self-end"
        >
          Add Slot
        </button>
      </div>
      <ul>
        {freeSlots.map((slot) => (
          <li key={slot.id} className="flex items-center justify-between border-b py-2">
            <span>{slot.day} - {slot.slot}</span>
            <button
              onClick={() => deleteSlot(slot.id)}
              className="text-red-500 font-bold hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
        }  


export default ManageFreeSlots;
