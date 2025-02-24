"use client";
import { useState } from 'react';
import axios from 'axios';

interface Institution {
  id: number;
  name: string;
  location: string;
  establishedYear: number;
}

const InstitutionsPage = () => {
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [newInstitution, setNewInstitution] = useState<Institution>({
    id: 0,
    name: '',
    location: '',
    establishedYear: 0,
  });
  const [updateInstitution, setUpdateInstitution] = useState<Institution>({
    id: 0,
    name: '',
    location: '',
    establishedYear: 0,
  });
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // Fetch institutions from the backend
  const getInstitutions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/institutions');
      setInstitutions(response.data);
    } catch (error) {
      console.error('Error fetching institutions:', error);
    }
  };

  // Create a new institution
  const createInstitution = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/institutions', {
        name: newInstitution.name,
        location: newInstitution.location,
        establishedYear: newInstitution.establishedYear,
      });
      console.log(response)
      setInstitutions([...institutions, response.data]);
      setNewInstitution({ id: 0, name: '', location: '', establishedYear: 0 }); // Reset form
    } catch (error) {
      console.error('Error creating institution:', error);
    }
  };

  // Update an institution
  const updateInstitutionHandler = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/institutions/${updateInstitution.id}`, {
        name: updateInstitution.name,
        location: updateInstitution.location,
        establishedYear: updateInstitution.establishedYear,
      });
      const updatedInstitutions = institutions.map((institution) =>
        institution.id === updateInstitution.id ? response.data : institution
      );
      setInstitutions(updatedInstitutions);
      setUpdateInstitution({ id: 0, name: '', location: '', establishedYear: 0 }); // Reset form
    } catch (error) {
      console.error('Error updating institution:', error);
    }
  };

  // Delete an institution
  const deleteInstitution = async () => {
    if (deleteId) {
      try {
        await axios.delete(`http://localhost:8080/api/institutions/${deleteId}`);
        setInstitutions(institutions.filter((institution) => institution.id !== deleteId));
        setDeleteId(null); // Reset form
      } catch (error) {
        console.error('Error deleting institution:', error);
      }
    }
  };

  return (
    <div>
      <h1>Manage Institutions</h1>

      {/* Section 1: Create Institution */}
      <section>
        <h2>Create Institution</h2>
        <input
          type="text"
          placeholder="Institution Name"
          value={newInstitution.name}
          onChange={(e) => setNewInstitution({ ...newInstitution, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Institution Location"
          value={newInstitution.location}
          onChange={(e) => setNewInstitution({ ...newInstitution, location: e.target.value })}
        />
        <input
          type="number"
          placeholder="Established Year"
          value={newInstitution.establishedYear}
          onChange={(e) => setNewInstitution({ ...newInstitution, establishedYear: +e.target.value })}
        />
        <button onClick={createInstitution}>Create</button>
      </section>

      {/* Section 2: Update Institution */}
      <section>
        <h2>Update Institution</h2>
        <input
          type="number"
          placeholder="Institution ID"
          value={updateInstitution.id}
          onChange={(e) => setUpdateInstitution({ ...updateInstitution, id: +e.target.value })}
        />
        <input
          type="text"
          placeholder="Updated Name"
          value={updateInstitution.name}
          onChange={(e) => setUpdateInstitution({ ...updateInstitution, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Updated Location"
          value={updateInstitution.location}
          onChange={(e) => setUpdateInstitution({ ...updateInstitution, location: e.target.value })}
        />
        <input
          type="number"
          placeholder="Updated Established Year"
          value={updateInstitution.establishedYear}
          onChange={(e) => setUpdateInstitution({ ...updateInstitution, establishedYear: +e.target.value })}
        />
        <button onClick={updateInstitutionHandler}>Update</button>
      </section>

      {/* Section 3: Delete Institution */}
      <section>
        <h2>Delete Institution</h2>
        <input
          type="number"
          placeholder="Institution ID to Delete"
          value={deleteId ?? ''}
          onChange={(e) => setDeleteId(+e.target.value)}
        />
        <button onClick={deleteInstitution}>Delete</button>
      </section>

      {/* Section 4: Get All Institutions */}
      <section>
        <h2>All Institutions</h2>
        <button onClick={getInstitutions}>Get Institutions</button>
        <ul>
          {institutions.map((institution) => (
            <li key={institution.id}>
              {institution.name} - {institution.location} - Established in {institution.establishedYear}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default InstitutionsPage;
