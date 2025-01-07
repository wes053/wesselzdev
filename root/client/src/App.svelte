<script>
  let responseMessage = '';

  // Fetch data from the server
  const fetchData = async () => {
    try {
      const res = await fetch('https://wesselz.dev/api/test');  // Use the correct URL
      const data = await res.json();
      responseMessage = data.message;
    } catch (error) {
      responseMessage = 'Error connecting to the server bla bla bla.';
    }
  };

  // Call fetchData on component mount
  fetchData();
</script>

<main>
  <h1>Server Connection Test</h1>
  <p>{responseMessage}</p>
</main>
