import axios from 'axios';

const getProfile = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/user/profile', {
      params: {
        username: 'redmojo'
      }
    });
    return response.data.user;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

export default getProfile;