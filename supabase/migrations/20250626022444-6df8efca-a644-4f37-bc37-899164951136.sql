
-- Insert hotels for various locations including India
INSERT INTO public.hotels (name, description, location, rating, reviews, price, images, amenities, coordinates) VALUES

-- New York Hotels (4 more to make 7 total)
('The Plaza New York', 'Iconic luxury hotel overlooking Central Park with world-class amenities and timeless elegance in the heart of Manhattan.', 'Manhattan, New York', 4.9, 2156, 599, 
ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Central Park View', 'Luxury Spa', 'Fine Dining', '24/7 Concierge', 'Valet Parking', 'Business Center', 'Room Service'], 
'{"lat": 40.7648, "lng": -73.9808}'),

('The High Line Hotel', 'Boutique hotel in Chelsea with historic charm and modern amenities, walking distance to the High Line park.', 'Chelsea, New York', 4.6, 892, 349, 
ARRAY['https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Historic Architecture', 'Pet Friendly', 'Fitness Center', 'Restaurant', 'Meeting Rooms', 'Garden Terrace'], 
'{"lat": 40.7451, "lng": -74.0072}'),

('Brooklyn Bridge Hotel', 'Charming hotel in historic Brooklyn Heights with stunning Manhattan skyline views.', 'Brooklyn Heights, New York', 4.4, 654, 279, 
ARRAY['https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1630660664869-c9d3cc676880?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Manhattan Skyline Views', 'Historic District', 'Restaurant', 'Business Center', 'Parking'], 
'{"lat": 40.6962, "lng": -73.9969}'),

-- Miami Hotels (5 more to make 7 total)
('The Setai Miami Beach', 'Ultra-luxury resort with three infinity pools and pristine beachfront location in South Beach.', 'South Beach, Miami', 4.8, 1432, 789, 
ARRAY['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Three Infinity Pools', 'Direct Beach Access', 'Luxury Spa', 'Fine Dining', 'Butler Service', 'Valet Parking'], 
'{"lat": 25.7743, "lng": -80.1337}'),

('1 Hotel South Beach', 'Eco-luxury hotel with sustainable design and rooftop pool overlooking the Atlantic Ocean.', 'South Beach, Miami', 4.7, 1156, 549, 
ARRAY['https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Eco-Friendly', 'Rooftop Pool', 'Beach Access', 'Organic Restaurant', 'Spa Services', 'Fitness Center'], 
'{"lat": 25.7804, "lng": -80.1373}'),

('The Ritz-Carlton Key Biscayne', 'Tropical paradise resort on a private island with pristine beaches and world-class amenities.', 'Key Biscayne, Miami', 4.8, 987, 689, 
ARRAY['https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Private Beach', 'Multiple Pools', 'Golf Course', 'Spa & Wellness', 'Tennis Courts', 'Kids Club'], 
'{"lat": 25.6942, "lng": -80.1558}'),

('The Standard Miami', 'Hip waterfront hotel with vibrant nightlife and stunning Biscayne Bay views.', 'Downtown Miami', 4.5, 743, 329, 
ARRAY['https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Waterfront Location', 'Rooftop Bar', 'Spa Services', 'Pool & Jacuzzi', 'Marina Access', 'Restaurant'], 
'{"lat": 25.7743, "lng": -80.1925}'),

('Four Seasons Hotel Miami', 'Luxury downtown hotel with panoramic bay and city views, featuring world-class dining and spa.', 'Brickell, Miami', 4.9, 1289, 699, 
ARRAY['https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Panoramic Views', 'Luxury Spa', 'Multiple Restaurants', 'Infinity Pool', 'Concierge Service', 'Valet Parking'], 
'{"lat": 25.7657, "lng": -80.1918}'),

-- Los Angeles Hotels (5 more to make 7 total)
('The Beverly Hills Hotel', 'Legendary pink palace with classic Hollywood glamour and lush tropical gardens.', 'Beverly Hills, Los Angeles', 4.8, 1876, 899, 
ARRAY['https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Historic Glamour', 'Tropical Gardens', 'Celebrity Hotspot', 'Luxury Spa', 'Fine Dining', 'Pool Cabanas'], 
'{"lat": 34.0901, "lng": -118.4065}'),

('Chateau Marmont', 'Iconic bohemian luxury hotel with rock star history and exclusive atmosphere.', 'West Hollywood, Los Angeles', 4.7, 1234, 749, 
ARRAY['https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Historic Castle', 'Celebrity Haven', 'Garden Pool', 'Restaurant', 'Bar', 'Privacy & Discretion'], 
'{"lat": 34.0969, "lng": -118.3886}'),

('The Standard Downtown LA', 'Modern hotel with rooftop bar and stunning city views in the heart of downtown.', 'Downtown, Los Angeles', 4.4, 892, 289, 
ARRAY['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1629079447777-1e605162dc8d?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Rooftop Pool', 'City Views', 'Modern Design', 'Fitness Center', 'Restaurant & Bar', 'Business Center'], 
'{"lat": 34.0479, "lng": -118.2584}'),

('Hotel Erwin Venice Beach', 'Beachfront boutique hotel with colorful murals and vibrant Venice Beach atmosphere.', 'Venice Beach, Los Angeles', 4.3, 656, 249, 
ARRAY['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Beachfront Location', 'Rooftop Bar', 'Artistic Design', 'Beach Access', 'Restaurant', 'Pet Friendly'], 
'{"lat": 33.9850, "lng": -118.4695}'),

('The Line Hotel LA', 'Contemporary hotel in Koreatown with Korean-inspired design and rooftop pool.', 'Koreatown, Los Angeles', 4.6, 745, 319, 
ARRAY['https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1587874522487-fe10e9d4eac7?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Korean-Inspired Design', 'Rooftop Pool', 'Multiple Restaurants', 'Nightclub', 'Spa Services', 'Fitness Center'], 
'{"lat": 34.0586, "lng": -118.3086}'),

-- Colorado Hotels (5 more to make 7 total)
('The Broadmoor', 'Legendary luxury resort in Colorado Springs with golf courses, spa, and mountain adventures.', 'Colorado Springs, Colorado', 4.9, 2134, 799, 
ARRAY['https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Golf Courses', 'Luxury Spa', 'Fine Dining', 'Adventure Activities', 'Tennis Courts', 'Multiple Pools'], 
'{"lat": 38.7946, "lng": -104.8653}'),

('Hotel Jerome Aspen', 'Historic luxury hotel in the heart of Aspen with Victorian elegance and modern amenities.', 'Aspen, Colorado', 4.8, 1456, 899, 
ARRAY['https://images.unsplash.com/photo-1597589022928-bb4002c099ec?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Historic Victorian', 'Ski Access', 'Luxury Spa', 'Fine Dining', 'Bar & Lounge', 'Concierge Service'], 
'{"lat": 39.1911, "lng": -106.8175}'),

('The Sebastian Vail', 'Sophisticated alpine resort with direct access to Vail Mountain and luxury amenities.', 'Vail, Colorado', 4.7, 987, 649, 
ARRAY['https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Ski-in/Ski-out', 'Mountain Views', 'Spa & Wellness', 'Restaurant', 'Fitness Center', 'Pet Friendly'], 
'{"lat": 39.6403, "lng": -106.3742}'),

('Cheyenne Mountain Resort', 'Mountain resort with golf course, lake, and stunning views of Colorado Springs.', 'Colorado Springs, Colorado', 4.5, 743, 389, 
ARRAY['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Golf Course', 'Lake Activities', 'Mountain Views', 'Spa Services', 'Multiple Restaurants', 'Tennis Courts'], 
'{"lat": 38.7334, "lng": -104.8214}'),

('The Oxford Hotel Denver', 'Historic luxury boutique hotel in downtown Denver with Victorian elegance and modern comfort.', 'Downtown, Denver', 4.6, 892, 349, 
ARRAY['https://images.unsplash.com/photo-1629079447777-1e605162dc8d?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Historic Boutique', 'Spa & Wellness', 'Fine Dining', 'Business Center', 'Fitness Center', 'Valet Parking'], 
'{"lat": 39.7525, "lng": -105.0008}'),

-- Chicago Hotels (5 more to make 7 total)
('The Ritz-Carlton Chicago', 'Luxury hotel on the Magnificent Mile with stunning city and lake views.', 'Magnificent Mile, Chicago', 4.8, 1567, 689, 
ARRAY['https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Magnificent Mile', 'Lake Views', 'Luxury Spa', 'Fine Dining', '24/7 Fitness Center', 'Concierge Service'], 
'{"lat": 41.8955, "lng": -87.6219}'),

('The Chicago Theatre Hotel', 'Historic hotel in the Loop with classic architecture and modern amenities.', 'The Loop, Chicago', 4.5, 923, 299, 
ARRAY['https://images.unsplash.com/photo-1587874522487-fe10e9d4eac7?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Historic Theatre District', 'Business Center', 'Restaurant', 'Fitness Center', 'Meeting Rooms', 'Valet Parking'], 
'{"lat": 41.8827, "lng": -87.6278}'),

('Kimpton Gray Hotel', 'Boutique hotel in the Financial District with contemporary design and rooftop bar.', 'Financial District, Chicago', 4.7, 786, 379, 
ARRAY['https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Rooftop Bar', 'Modern Design', 'Pet Friendly', 'Fitness Center', 'Restaurant', 'Business Center'], 
'{"lat": 41.8796, "lng": -87.6272}'),

('The Blackstone Hotel', 'Historic luxury hotel in the South Loop with classic elegance and modern amenities.', 'South Loop, Chicago', 4.6, 654, 329, 
ARRAY['https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Historic Landmark', 'Classic Ballroom', 'Fine Dining', 'Spa Services', 'Fitness Center', 'Business Center'], 
'{"lat": 41.8676, "lng": -87.6251}'),

('Hotel Zachary', 'Modern hotel adjacent to Wrigley Field with sports-themed design and rooftop views.', 'Wrigleyville, Chicago', 4.4, 567, 289, 
ARRAY['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Wrigley Field Views', 'Sports Bar', 'Rooftop Terrace', 'Fitness Center', 'Restaurant', 'Meeting Rooms'], 
'{"lat": 41.9484, "lng": -87.6553}'),

-- Palm Springs Hotels (5 more to make 7 total)
('Two Bunch Palms Resort & Spa', 'Historic desert spa resort with natural hot springs and wellness focus.', 'Desert Hot Springs, California', 4.7, 1234, 449, 
ARRAY['https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Natural Hot Springs', 'Spa & Wellness', 'Desert Views', 'Grotto Pool', 'Restaurant', 'Yoga Classes'], 
'{"lat": 33.9614, "lng": -116.5011}'),

('The Parker Palm Springs', 'Whimsical luxury resort with colorful design by Jonathan Adler and multiple pools.', 'Palm Springs, California', 4.8, 1456, 699, 
ARRAY['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Designer Decor', 'Multiple Pools', 'Spa Services', 'Tennis Courts', 'Fine Dining', 'Pet Friendly'], 
'{"lat": 33.8214, "lng": -116.5420}'),

('La Quinta Resort & Club', 'Spanish-style resort with golf courses, spa, and mountain views in the Coachella Valley.', 'La Quinta, California', 4.6, 987, 529, 
ARRAY['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Golf Courses', 'Spanish Architecture', 'Mountain Views', 'Spa Services', 'Tennis Courts', 'Multiple Pools'], 
'{"lat": 33.6634, "lng": -116.3100}'),

('Azure Palm Hot Springs Resort', 'Adults-only clothing-optional resort with hot springs and desert tranquility.', 'Desert Hot Springs, California', 4.5, 432, 389, 
ARRAY['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Adults Only', 'Natural Hot Springs', 'Clothing Optional', 'Spa Services', 'Desert Views', 'Wellness Programs'], 
'{"lat": 33.9586, "lng": -116.5008}'),

('Miramonte Indian Wells Resort & Spa', 'Mediterranean-style resort with championship golf and luxury spa in Indian Wells.', 'Indian Wells, California', 4.7, 876, 579, 
ARRAY['https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Championship Golf', 'Mediterranean Style', 'Luxury Spa', 'Multiple Restaurants', 'Tennis Courts', 'Fitness Center'], 
'{"lat": 33.7175, "lng": -116.3414}'),

-- San Francisco Hotels (6 more to make 7 total)
('Fairmont San Francisco', 'Iconic luxury hotel atop Nob Hill with stunning city views and historic grandeur.', 'Nob Hill, San Francisco', 4.8, 1789, 649, 
ARRAY['https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Historic Landmark', 'City Views', 'Luxury Spa', 'Fine Dining', 'Business Center', 'Valet Parking'], 
'{"lat": 37.7923, "lng": -122.4103}'),

('The St. Regis San Francisco', 'Ultra-luxury hotel in SOMA with contemporary design and world-class amenities.', 'SOMA, San Francisco', 4.9, 1234, 799, 
ARRAY['https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Butler Service', 'Modern Luxury', 'Spa Services', 'Fine Dining', 'Business Center', 'Valet Parking'], 
'{"lat": 37.7857, "lng": -122.4011}'),

('Hotel Zephyr', 'Nautical-themed boutique hotel at Fishermans Wharf with unique maritime design.', 'Fishermans Wharf, San Francisco', 4.4, 892, 329, 
ARRAY['https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Nautical Theme', 'Waterfront Location', 'Pet Friendly', 'Fitness Center', 'Restaurant', 'Game Room'], 
'{"lat": 37.8087, "lng": -122.4156}'),

('The Ritz-Carlton San Francisco', 'Luxury hotel on Nob Hill with classic elegance and panoramic city views.', 'Nob Hill, San Francisco', 4.8, 1456, 729, 
ARRAY['https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1587874522487-fe10e9d4eac7?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Nob Hill Location', 'City Views', 'Luxury Spa', 'Club Level', 'Fine Dining', 'Concierge Service'], 
'{"lat": 37.7919, "lng": -122.4094}'),

('Hotel Nikko San Francisco', 'Modern Japanese-inspired hotel in Union Square with zen aesthetics and city convenience.', 'Union Square, San Francisco', 4.6, 967, 389, 
ARRAY['https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Japanese Design', 'Indoor Pool', 'Fitness Center', 'Restaurant', 'Business Center', 'Pet Friendly'], 
'{"lat": 37.7863, "lng": -122.4078}'),

('The Phoenix Hotel', 'Rock and roll boutique hotel with poolside bar and music history.', 'Tenderloin, San Francisco', 4.3, 543, 249, 
ARRAY['https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Rock & Roll History', 'Poolside Bar', 'Music Venue', 'Pet Friendly', 'Restaurant', 'Unique Decor'], 
'{"lat": 37.7834, "lng": -122.4195}'),

-- India Hotels (7 new hotels)
('The Oberoi New Delhi', 'Luxury hotel in the diplomatic enclave with contemporary Indian design and world-class amenities.', 'New Delhi, India', 4.8, 1654, 450, 
ARRAY['https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Contemporary Indian Design', 'Luxury Spa', 'Multiple Restaurants', 'Business Center', 'Fitness Center', 'Concierge Service'], 
'{"lat": 28.5935, "lng": 77.2334}'),

('The Leela Palace Mumbai', 'Opulent palace hotel overlooking the Arabian Sea with royal Indian hospitality and modern luxury.', 'Mumbai, India', 4.9, 2134, 520, 
ARRAY['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Arabian Sea Views', 'Royal Indian Design', 'Luxury Spa', 'Multiple Restaurants', 'Butler Service', 'Business Center'], 
'{"lat": 19.0330, "lng": 72.8619}'),

('ITC Grand Chola Chennai', 'Magnificent hotel inspired by Chola architecture with luxury amenities and traditional South Indian hospitality.', 'Chennai, India', 4.7, 1432, 380, 
ARRAY['https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Chola Architecture', 'Multiple Pools', 'Spa & Wellness', 'Traditional Restaurants', 'Business Center', 'Cultural Activities'], 
'{"lat": 12.9886, "lng": 80.2150}'),

('The Oberoi Bengaluru', 'Contemporary luxury hotel in the Garden City with modern amenities and exceptional service.', 'Bengaluru, India', 4.8, 1156, 420, 
ARRAY['https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Garden City Views', 'Contemporary Design', 'Spa Services', 'Fine Dining', 'Business Center', 'Fitness Center'], 
'{"lat": 12.9698, "lng": 77.6124}'),

('Hyatt Regency Kolkata', 'Elegant hotel in the cultural capital with Bengali heritage and modern luxury amenities.', 'Kolkata, India', 4.6, 987, 340, 
ARRAY['https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Bengali Heritage', 'Cultural Proximity', 'Spa Services', 'Multiple Restaurants', 'Business Center', 'Fitness Center'], 
'{"lat": 22.5448, "lng": 88.3426}'),

('JW Marriott Jaipur Resort & Spa', 'Royal Rajasthani palace resort with traditional architecture and luxury amenities in the Pink City.', 'Jaipur, India', 4.9, 1567, 480, 
ARRAY['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Royal Rajasthani Architecture', 'Luxury Spa', 'Multiple Pools', 'Traditional Restaurants', 'Cultural Activities', 'Business Center'], 
'{"lat": 26.8492, "lng": 75.8056}'),

('Vivanta Goa Panaji', 'Boutique hotel in the heart of Goa with Portuguese colonial charm and modern amenities.', 'Panaji, Goa, India', 4.5, 743, 290, 
ARRAY['https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop'], 
ARRAY['Free WiFi', 'Portuguese Colonial', 'River Views', 'Rooftop Pool', 'Goan Cuisine', 'Spa Services', 'Cultural Tours'], 
'{"lat": 15.4989, "lng": 73.8278}');

-- Insert corresponding room types for each hotel
INSERT INTO public.room_types (hotel_id, name, description, price, features, image) 
SELECT h.id, 'Deluxe Room', 'Comfortable deluxe room with city views', h.price, ARRAY['King Bed', 'City View', 'Air Conditioning', 'Mini Bar', 'Free WiFi'], 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop'
FROM hotels h WHERE h.name IN (
  'The Plaza New York', 'The High Line Hotel', 'Brooklyn Bridge Hotel', 'The Setai Miami Beach', '1 Hotel South Beach',
  'The Ritz-Carlton Key Biscayne', 'The Standard Miami', 'Four Seasons Hotel Miami', 'The Beverly Hills Hotel',
  'Chateau Marmont', 'The Standard Downtown LA', 'Hotel Erwin Venice Beach', 'The Line Hotel LA',
  'The Broadmoor', 'Hotel Jerome Aspen', 'The Sebastian Vail', 'Cheyenne Mountain Resort', 'The Oxford Hotel Denver',
  'The Ritz-Carlton Chicago', 'The Chicago Theatre Hotel', 'Kimpton Gray Hotel', 'The Blackstone Hotel', 'Hotel Zachary',
  'Two Bunch Palms Resort & Spa', 'The Parker Palm Springs', 'La Quinta Resort & Club', 'Azure Palm Hot Springs Resort',
  'Miramonte Indian Wells Resort & Spa', 'Fairmont San Francisco', 'The St. Regis San Francisco', 'Hotel Zephyr',
  'The Ritz-Carlton San Francisco', 'Hotel Nikko San Francisco', 'The Phoenix Hotel', 'The Oberoi New Delhi',
  'The Leela Palace Mumbai', 'ITC Grand Chola Chennai', 'The Oberoi Bengaluru', 'Hyatt Regency Kolkata',
  'JW Marriott Jaipur Resort & Spa', 'Vivanta Goa Panaji'
);

INSERT INTO public.room_types (hotel_id, name, description, price, features, image) 
SELECT h.id, 'Premium Suite', 'Spacious suite with premium amenities and stunning views', h.price + 200, ARRAY['King Bed', 'Separate Living Area', 'Premium View', 'Luxury Amenities', 'Butler Service'], 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop'
FROM hotels h WHERE h.name IN (
  'The Plaza New York', 'The High Line Hotel', 'Brooklyn Bridge Hotel', 'The Setai Miami Beach', '1 Hotel South Beach',
  'The Ritz-Carlton Key Biscayne', 'The Standard Miami', 'Four Seasons Hotel Miami', 'The Beverly Hills Hotel',
  'Chateau Marmont', 'The Standard Downtown LA', 'Hotel Erwin Venice Beach', 'The Line Hotel LA',
  'The Broadmoor', 'Hotel Jerome Aspen', 'The Sebastian Vail', 'Cheyenne Mountain Resort', 'The Oxford Hotel Denver',
  'The Ritz-Carlton Chicago', 'The Chicago Theatre Hotel', 'Kimpton Gray Hotel', 'The Blackstone Hotel', 'Hotel Zachary',
  'Two Bunch Palms Resort & Spa', 'The Parker Palm Springs', 'La Quinta Resort & Club', 'Azure Palm Hot Springs Resort',
  'Miramonte Indian Wells Resort & Spa', 'Fairmont San Francisco', 'The St. Regis San Francisco', 'Hotel Zephyr',
  'The Ritz-Carlton San Francisco', 'Hotel Nikko San Francisco', 'The Phoenix Hotel', 'The Oberoi New Delhi',
  'The Leela Palace Mumbai', 'ITC Grand Chola Chennai', 'The Oberoi Bengaluru', 'Hyatt Regency Kolkata',
  'JW Marriott Jaipur Resort & Spa', 'Vivanta Goa Panaji'
);
