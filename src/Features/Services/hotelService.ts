export interface HotelData {
  _id: string;
  hotelName: string;
  desc: string;
  address: string;
  image: string;
}
export interface AddHotelData {
  hotelName: string;
  desc: string;
  address: string;
  image: string;
}

export const addHotel = async (data: AddHotelData): Promise<any> => {
  const response = await fetch('http://localhost:3000/api/hotel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const fetchHotels = async (): Promise<HotelData[]> => {
  const response = await fetch('http://localhost:3000/api/hotel', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data as HotelData[];
};

export const fetchHotelById = async (id: string): Promise<HotelData> => {
  const response = await fetch(`http://localhost:3000/api/hotel/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data as HotelData;
};

export const updateHotel = async (id: string, data: AddHotelData): Promise<any> => {
  const response = await fetch(`http://localhost:3000/api/hotel/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
