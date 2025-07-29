
export const CLOUDINARY_CONFIG = {
  cloudName: 'jcgallery',
  apiKey: '262832149756723',
  apiSecret: 'NGcsLy1mXiMblWuemFRcNqkuggU'
};

export interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  created_at: string;
  format: string;
  resource_type: string;
}

export const fetchCloudinaryImages = async (folder: string): Promise<CloudinaryResource[]> => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const expression = `folder:${folder}`;
    
    // Create the signature for authenticated requests
    const params = {
      expression,
      max_results: 30,
      sort_by: [['created_at', 'desc']],
      timestamp
    };
    
    // Use the Admin API URL with proper authentication
    const searchUrl = `https://${CLOUDINARY_CONFIG.apiKey}:${CLOUDINARY_CONFIG.apiSecret}@api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/resources/search`;
    
    const response = await fetch(searchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.resources || [];
  } catch (error) {
    console.error('Cloudinary fetch error:', error);
    return [];
  }
};

export const getOptimizedImageUrl = (publicId: string, width = 400, height = 300): string => {
  return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload/w_${width},h_${height},c_fill,q_auto,f_auto/${publicId}`;
};
