export async function geteventData() {
    try {
      const response = await fetch(`https://api.predicthq.com/v1/events?limit=50&offset=10`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer gXobICgcELX6VaLtJy1MHzMyTDsWyIGEYnITWovr`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const newEventData = await response.json();
      const nextdata=[newEventData.next];  
      console.log("next data",nextdata)
      return newEventData;
    } catch (error) {
      console.error("Error:", error);
      throw error; // Propagate the error up
    }
  }
  