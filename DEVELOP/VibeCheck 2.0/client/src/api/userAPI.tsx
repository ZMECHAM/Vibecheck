import Auth from '../utils/auth';

const getSongs = async () => {
  try {
    const response = await fetch('/api/songs', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid song API response, check network tab!');
    }

    return data;
    
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};

export { getSongs };
