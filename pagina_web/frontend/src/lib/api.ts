const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface Business {
  id: number;
  name: string;
  business_type: string;
  description: string;
  address: string;
  phone: string;
  image_url: string;
  is_active: boolean;
  created_at: string;
}

export async function getBusinesses(): Promise<Business[]> {
  console.log(`Fetching businesses from: ${API_URL}/businesses/`);
  try {
    const res = await fetch(`${API_URL}/businesses/`, {
      cache: 'no-store' // Disable cache for real-time updates
    });
    
    if (!res.ok) {
      console.error(`Fetch error: ${res.status} ${res.statusText}`);
      throw new Error('Failed to fetch businesses');
    }
    
    return res.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function getBusiness(id: string): Promise<Business> {
  const res = await fetch(`${API_URL}/businesses/${id}/`, {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch business');
  }
  
  return res.json();
}
