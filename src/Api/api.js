export const fetchData = async (setData) => {
    try {
      const response = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};