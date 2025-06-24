
-- Update the hotels table to include all the fields expected by the Hotel interface
ALTER TABLE public.hotels 
ADD COLUMN IF NOT EXISTS rating DECIMAL(2,1) NOT NULL DEFAULT 4.5,
ADD COLUMN IF NOT EXISTS reviews INTEGER NOT NULL DEFAULT 100,
ADD COLUMN IF NOT EXISTS price INTEGER NOT NULL DEFAULT 199,
ADD COLUMN IF NOT EXISTS images TEXT[] NOT NULL DEFAULT ARRAY['https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop'],
ADD COLUMN IF NOT EXISTS amenities TEXT[] NOT NULL DEFAULT ARRAY['Free WiFi', 'Room Service', 'Parking'],
ADD COLUMN IF NOT EXISTS coordinates JSONB NOT NULL DEFAULT '{"lat": 40.7128, "lng": -74.0060}',
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Create the room_types table with correct UUID type for hotel_id
CREATE TABLE IF NOT EXISTS public.room_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hotel_id UUID REFERENCES public.hotels(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL,
  features TEXT[] NOT NULL,
  image TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security for room_types
ALTER TABLE public.room_types ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to room_types
CREATE POLICY "Anyone can view room types" 
  ON public.room_types FOR SELECT 
  USING (true);

-- Update existing hotels with proper data
UPDATE public.hotels SET 
  rating = 4.8,
  reviews = 1243,
  price = 299,
  images = ARRAY[
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop'
  ],
  amenities = ARRAY['Free WiFi', 'Rooftop Pool', 'Spa & Wellness Center', 'Fitness Center', 'Restaurant & Bar', '24/7 Room Service'],
  coordinates = '{"lat": 40.7128, "lng": -74.0060}'
WHERE name LIKE '%Grand Plaza%' OR name LIKE '%Hotel%';

-- Insert some sample room types for the existing hotels
INSERT INTO public.room_types (hotel_id, name, description, price, features, image) 
SELECT 
  h.id,
  'Standard Room',
  'Comfortable room with modern amenities',
  199,
  ARRAY['Queen Bed', 'City View', '25m²', 'Air Conditioning'],
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop'
FROM public.hotels h
WHERE NOT EXISTS (
  SELECT 1 FROM public.room_types rt WHERE rt.hotel_id = h.id
);

INSERT INTO public.room_types (hotel_id, name, description, price, features, image) 
SELECT 
  h.id,
  'Deluxe Suite',
  'Spacious suite with premium amenities',
  299,
  ARRAY['King Bed', 'Ocean View', '45m²', 'Balcony', 'Minibar'],
  'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop'
FROM public.hotels h
WHERE NOT EXISTS (
  SELECT 1 FROM public.room_types rt WHERE rt.hotel_id = h.id AND rt.name = 'Deluxe Suite'
);
