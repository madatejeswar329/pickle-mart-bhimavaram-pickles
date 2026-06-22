export interface Product {
  id: string;
  name: string;
  nameTelugu: string;
  category: 'non-veg' | 'veg' | 'karappodulu' | 'vadiyalu' | 'sweets-snacks' | 'ghee-honey';
  basePrice: number;
  baseWeight: string;
  description: string;
  image: string;
  isBestSeller?: boolean;
}

export const CATEGORIES = [
  { id: 'all', name: 'All Products', nameTelugu: 'అన్నీ' },
  { id: 'non-veg', name: 'Non-Veg Pickles', nameTelugu: 'నాన్-వెజ్ పచ్చళ్లు' },
  { id: 'veg', name: 'Veg Pickles', nameTelugu: 'వెజ్ పచ్చళ్లు' },
  { id: 'karappodulu', name: 'Karam Podulu', nameTelugu: 'కారప్పొడులు' },
  { id: 'vadiyalu', name: 'Vadiyalu', nameTelugu: 'వడియాలు' },
  { id: 'sweets-snacks', name: 'Sweets & Snacks', nameTelugu: 'స్వీట్స్ & హాట్స్' },
  { id: 'ghee-honey', name: 'Ghee & Honey', nameTelugu: 'నెయ్యి & తేనె' },
];

export const PRODUCTS: Product[] = [
  // ================= NON-VEG PICKLES (Base 250g) =================
  {
    id: 'nv-1',
    name: 'Chicken Pickle',
    nameTelugu: 'చికెన్ పచ్చడి',
    category: 'non-veg',
    basePrice: 225,
    baseWeight: '250g',
    description: 'Traditional Andhra style chicken pickle made with fresh chicken chunks, Guntur red chilies, and aromatic spices.',
    image: '/images/chicken_pickle_uploaded.jpg',
    isBestSeller: true
  },
  {
    id: 'nv-2',
    name: 'Boneless Chicken Pickle',
    nameTelugu: 'బోన్లెస్ చికెన్ పచ్చడి',
    category: 'non-veg',
    basePrice: 275,
    baseWeight: '250g',
    description: 'Juicy, tender boneless chicken pieces pickled in a rich spice blend. Perfect combination for hot rice and ghee.',
    image: '/images/boneless_chicken_pickle_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'nv-3',
    name: 'Country Chicken Pickle',
    nameTelugu: 'నాటు కోడి పచ్చడి',
    category: 'non-veg',
    basePrice: 300,
    baseWeight: '250g',
    description: 'Organic country chicken (Natu Kodi) cooked with traditional spices and pickled to perfection.',
    image: '/images/natukodi_pickle_uploaded.png'
  },
  {
    id: 'nv-4',
    name: 'Cashew Chicken Kheema',
    nameTelugu: 'జీడిపప్పు చికెన్ ఖీమా పచ్చడి',
    category: 'non-veg',
    basePrice: 300,
    baseWeight: '250g',
    description: 'Delectable minced chicken (Kheema) pickle loaded with rich roasted cashew nuts (Cashew/Jeedipappu).',
    image: '/images/cashew_chicken_kheema_uploaded.png'
  },
  {
    id: 'nv-5',
    name: 'Mutton Pickle',
    nameTelugu: 'మటన్ పచ్చడి',
    category: 'non-veg',
    basePrice: 390,
    baseWeight: '250g',
    description: 'Rich and hearty mutton pickle prepared with premium quality meat and traditional Godavari spice mix.',
    image: '/images/mutton_pickle_uploaded.png'
  },
  {
    id: 'nv-6',
    name: 'Boneless Mutton Pickle',
    nameTelugu: 'బోన్లెస్ మటన్ పచ్చడి',
    category: 'non-veg',
    basePrice: 450,
    baseWeight: '250g',
    description: 'Premium boneless mutton chunks marinated and cooked in native Andhra spices. A luxurious pickle experience.',
    image: '/images/boneless_mutton_pickle_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'nv-7',
    name: 'Mutton Kheema Pickle',
    nameTelugu: 'మటన్ ఖీమా పచ్చడి',
    category: 'non-veg',
    basePrice: 440,
    baseWeight: '250g',
    description: 'Minced mutton (Keema) pickle slow-cooked with spices, making it an excellent spread and side dish.',
    image: '/images/mutton_keema_pickle_uploaded.png'
  },
  {
    id: 'nv-8',
    name: 'Small Prawns Pickle',
    nameTelugu: 'చిన్న రొయ్యల పచ్చడి',
    category: 'non-veg',
    basePrice: 350,
    baseWeight: '250g',
    description: 'Fresh Godavari small prawns cleaned, fried, and pickled in a spicy mustard and garlic base.',
    image: '/images/prawns_pickle_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'nv-9',
    name: 'Large Prawns Pickle',
    nameTelugu: 'పెద్ద రొయ్యల పచ్చడి',
    category: 'non-veg',
    basePrice: 400,
    baseWeight: '250g',
    description: 'Premium large size tiger prawns cooked and pickled in native Godavari style.',
    image: '/images/prawn_pickle.png'
  },
  {
    id: 'nv-10',
    name: 'Murrel Fish (Boneless) Pickle',
    nameTelugu: 'బోన్లెస్ కొర్రమీను పచ్చడి',
    category: 'non-veg',
    basePrice: 340,
    baseWeight: '250g',
    description: 'Boneless Korrameenu (Murrel/Snakehead) fish pickle. Highly nutritious and incredibly delicious.',
    image: '/images/korrameenu_fish_pickle_uploaded.png'
  },
  {
    id: 'nv-11',
    name: 'Sea Bass Fish Pickle',
    nameTelugu: 'సీ బాస్ చేపల పచ్చడి',
    category: 'non-veg',
    basePrice: 375,
    baseWeight: '250g',
    description: 'Premium Sea Bass (Pandugappa/Barramundi) fish chunks pickled in traditional Andhra style.',
    image: '/images/pandugappa_fish_pickle_uploaded.png'
  },
  {
    id: 'nv-12',
    name: 'Crab Pickle',
    nameTelugu: 'పీతల పచ్చడి',
    category: 'non-veg',
    basePrice: 300,
    baseWeight: '250g',
    description: 'Spicy, exotic crab pickle cooked with traditional masala. A unique delicacy from Bhimavaram.',
    image: '/images/crab_pickle_uploaded.png'
  },
  {
    id: 'nv-13',
    name: 'Pond Fish Pickle',
    nameTelugu: 'చెరువు చేపల పచ్చడి',
    category: 'non-veg',
    basePrice: 275,
    baseWeight: '250g',
    description: 'Traditional local freshwater pond fish chunks marinated and pickled in native spices.',
    image: '/images/pond_fish_pickle_uploaded.jpg'
  },
  {
    id: 'nv-14',
    name: 'White Bait Fish Pickle',
    nameTelugu: 'వైట్ బైట్ చేపల పచ్చడి',
    category: 'non-veg',
    basePrice: 275,
    baseWeight: '250g',
    description: 'Crispy fried tiny whitebait fish pickled with garlic, tamarind, and hot spices.',
    image: '/images/white_bait_fish_pickle_uploaded.png'
  },
  {
    id: 'nv-15',
    name: 'Apollo Fish Pickle',
    nameTelugu: 'అపోలో ఫిష్ పచ్చడి',
    category: 'non-veg',
    basePrice: 375,
    baseWeight: '250g',
    description: 'Spiced boneless Apollo fish chunks pickled in traditional red chili and garlic paste.',
    image: '/images/apollo_fish_pickle_uploaded.png'
  },
  {
    id: 'nv-16',
    name: 'Sorrel Chicken Pickle',
    nameTelugu: 'గోంగూర చికెన్ పచ్చడి',
    category: 'non-veg',
    basePrice: 225,
    baseWeight: '250g',
    description: 'A match made in heaven: Tangy Gongura (Roselle) leaves blended with juicy chicken chunks and spices.',
    image: '/images/gongura_chicken_pickle_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'nv-17',
    name: 'Sorrel Boneless Chicken Pickle',
    nameTelugu: 'గోంగూర బోన్లెస్ చికెన్ పచ్చడి',
    category: 'non-veg',
    basePrice: 275,
    baseWeight: '250g',
    description: 'Tender boneless chicken pickled with tangy Gongura leaves and authentic Andhra dry spices.',
    image: '/images/gongura_boneless_chicken_pickle_uploaded.png'
  },
  {
    id: 'nv-18',
    name: 'Sorrel Country Chicken Pickle',
    nameTelugu: 'గోంగూర నాటు కోడి పచ్చడి',
    category: 'non-veg',
    basePrice: 300,
    baseWeight: '250g',
    description: 'Country chicken cooked in sour rosella (Gongura) paste and tempered with native masalas.',
    image: '/images/chicken_pickle.png'
  },
  {
    id: 'nv-19',
    name: 'Sorrel Small Prawns Pickle',
    nameTelugu: 'గోంగూర చిన్న రొయ్యల పచ్చడి',
    category: 'non-veg',
    basePrice: 350,
    baseWeight: '250g',
    description: 'Tangy Roselle leaves cooked with prawns and traditional spices for a unique Godavari flavor.',
    image: '/images/gongura_prawns_pickle_uploaded.png'
  },
  {
    id: 'nv-20',
    name: 'Sorrel Large Prawns Pickle',
    nameTelugu: 'గోంగూర పెద్ద రొయ్యల పచ్చడి',
    category: 'non-veg',
    basePrice: 400,
    baseWeight: '250g',
    description: 'Premium jumbo prawns slow cooked with tangy Gongura leaves and spices.',
    image: '/images/chicken_pickle.png'
  },
  {
    id: 'nv-21',
    name: 'Sorrel Mutton Pickle',
    nameTelugu: 'గోంగూర మటన్ పచ్చడి',
    category: 'non-veg',
    basePrice: 350,
    baseWeight: '250g',
    description: 'Rich mutton pieces simmered with tangy Gongura paste and ground masalas. A traditional royal dish.',
    image: '/images/gongura_mutton_pickle_new_uploaded.jpg'
  },
  {
    id: 'nv-22',
    name: 'Sorrel Boneless Mutton Pickle',
    nameTelugu: 'గోంగూర బోన్లెస్ మటన్ పచ్చడి',
    category: 'non-veg',
    basePrice: 450,
    baseWeight: '250g',
    description: 'Exquisite combination of sour Gongura leaves, boneless mutton, and roasted spices.',
    image: '/images/sorrel_boneless_mutton_pickle_uploaded.png'
  },
  {
    id: 'nv-23',
    name: 'Sorrel Mutton Kheema Pickle',
    nameTelugu: 'గోంగూర మటన్ ఖీమా పచ్చడి',
    category: 'non-veg',
    basePrice: 400,
    baseWeight: '250g',
    description: 'Minced mutton cooked in sour roselle paste and rich native spices.',
    image: '/images/sorrel_mutton_kheema_pickle_uploaded.png'
  },
  {
    id: 'nv-24',
    name: 'Mutton Boti Pickle',
    nameTelugu: 'మటన్ బోటి పచ్చడి',
    category: 'non-veg',
    basePrice: 395,
    baseWeight: '250g',
    description: 'Traditional cleaned mutton boti pieces pickled in native Godavari dry spice mixes.',
    image: '/images/mutton_boti_pickle_uploaded.png'
  },
  {
    id: 'nv-25',
    name: 'Mutton Boti Gongura Pickle',
    nameTelugu: 'గోంగూర మటన్ బోటి పచ్చడి',
    category: 'non-veg',
    basePrice: 395,
    baseWeight: '250g',
    description: 'Mutton boti slow-cooked in tangy Gongura leaves, garlic, and hot spices.',
    image: '/images/mutton_boti_pickle_uploaded.png'
  },
  {
    id: 'nv-26',
    name: 'Korameenu Fish (Bone) Pickle',
    nameTelugu: 'కొرమీను చేపల పచ్చడి',
    category: 'non-veg',
    basePrice: 410,
    baseWeight: '250g',
    description: 'Murrel fish pieces (with bones) fried and pickled in native style.',
    image: '/images/korameenu_fish_bone_pickle_uploaded.png'
  },
  {
    id: 'nv-27',
    name: 'Chicken Joint Biryani',
    nameTelugu: 'చికెన్ జాయింట్ బిర్యానీ',
    category: 'non-veg',
    basePrice: 265,
    baseWeight: '250g',
    description: 'Specially marinated whole chicken joints pickled, designed to pair with biryani/pulao.',
    image: '/images/chicken_pickle.png'
  },
  {
    id: 'nv-28',
    name: 'Small Prawns Extra',
    nameTelugu: 'చిన్న రొయ్యల స్పెషల్ పచ్చడి',
    category: 'non-veg',
    basePrice: 425,
    baseWeight: '250g',
    description: 'Special deep fried small prawns containing extra portions of spices and garlic.',
    image: '/images/prawns_extra_uploaded.png'
  },
  {
    id: 'nv-29',
    name: 'Large Prawns Extra',
    nameTelugu: 'పెద్ద రొయ్యల స్పెషల్ పచ్చడి',
    category: 'non-veg',
    basePrice: 465,
    baseWeight: '250g',
    description: 'Special deep fried large prawns containing extra portions of spices and garlic.',
    image: '/images/prawns_extra_uploaded.png'
  },
  {
    id: 'nv-30',
    name: 'Gongura Small Prawns Extra',
    nameTelugu: 'గోంగూర చిన్న రొయ్యల స్పెషల్ పచ్చడి',
    category: 'non-veg',
    basePrice: 425,
    baseWeight: '250g',
    description: 'Special deep fried small prawns cooked in sour Gongura leaves and extra spices.',
    image: '/images/gongura_prawns_extra_uploaded.png'
  },
  {
    id: 'nv-31',
    name: 'Gongura Large Prawns Extra',
    nameTelugu: 'గోంగూర పెద్ద రొయ్యల స్పెషల్ పచ్చడి',
    category: 'non-veg',
    basePrice: 465,
    baseWeight: '250g',
    description: 'Special deep fried large prawns cooked in sour Gongura leaves and extra spices.',
    image: '/images/gongura_prawns_extra_uploaded.png'
  },

  // ================= VEG PICKLES (Base 250g) =================
  {
    id: 'v-1',
    name: 'Mango Avakaya Pickle',
    nameTelugu: 'మామిడి ఆవకాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'The King of Andhra Pickles. Raw mango pieces pickled in sour mustard powder and cold-pressed oil.',
    image: '/images/avakaya_pickle_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'v-2',
    name: 'Mango Biryani Pickle',
    nameTelugu: 'మామిడి బిర్యానీ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'A special fragrant and spiced raw mango pickle designed specifically to complement biryanis and pulaos.',
    image: '/images/mixed_veg_pickle.png'
  },
  {
    id: 'v-3',
    name: 'Jaggery Mango Pickle',
    nameTelugu: 'బెల్లం మామిడి పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Sweet and sour raw mango pickle made with pure organic jaggery (Bellam) and mustard powder.',
    image: '/images/bellam_avakaya_pickle_uploaded.jpg',
    isBestSeller: true
  },
  {
    id: 'v-4',
    name: 'Ginger Mango Pickle',
    nameTelugu: 'అల్లం మామిడి పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'A aromatic fusion of fresh ginger root and sour raw mangoes pickled with native ground spices.',
    image: '/images/ginger_mango_pickle_uploaded.png'
  },
  {
    id: 'v-5',
    name: 'Small Cut Mango Pickle',
    nameTelugu: 'చిన్న ముక్కల మామిడి పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Finely chopped baby raw mangoes pickled in traditional spice mixes.',
    image: '/images/mukkala_avakaya_pickle_uploaded.png'
  },
  {
    id: 'v-6',
    name: 'Grated Mango Pickle',
    nameTelugu: 'తురిమిన మామిడి పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Delectable Andhra style pickle made with shredded/grated raw mangoes and hot spices.',
    image: '/images/grated_mango_pickle_uploaded.png'
  },
  {
    id: 'v-7',
    name: 'Amla Pickle',
    nameTelugu: 'ఉసిరికాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Whole Indian gooseberries (Amla) cooked and pickled with mustard powder and oil.',
    image: '/images/usirikaya_pickle_uploaded.png'
  },
  {
    id: 'v-8',
    name: 'Grated Amla Pickle',
    nameTelugu: 'తురిమిన ఉసిరికాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Finely shredded Indian gooseberries pickled with garlic, mustard powder, and cold-pressed oil.',
    image: '/images/grated_amla_pickle_uploaded.png'
  },
  {
    id: 'v-9',
    name: 'Ginger Pickle',
    nameTelugu: 'అల్లం పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Sweet, tangy, and spicy ginger pickle. An essential pairing for Pesarattu and Idli.',
    image: '/images/allam_pickle_uploaded.png'
  },
  {
    id: 'v-10',
    name: 'Garlic Pickle',
    nameTelugu: 'వెల్లుల్లి పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Whole peeled garlic cloves pickled in a hot chili and mustard base. A garlic lover\'s dream.',
    image: '/images/vellulli_pickle_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'v-11',
    name: 'Drumsticks Pickle',
    nameTelugu: 'మునగకాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Juicy drumstick pieces marinated and pickled in traditional mustard-tamarind gravy.',
    image: '/images/munagakaya_pickle_uploaded.png'
  },
  {
    id: 'v-12',
    name: 'Lemon Pickle',
    nameTelugu: 'నిమ్మకాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Classic salted lemon pickle. Oil-free, tangy, and perfect for stomach soothing with curd rice.',
    image: '/images/nimmakaya_pickle_uploaded.png'
  },
  {
    id: 'v-13',
    name: 'Tomato Pickle',
    nameTelugu: 'టమాటా పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Sun-dried tomatoes ground with tamarind, garlic, and tempered with mustard and curry leaves.',
    image: '/images/tomato_pickle_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'v-14',
    name: 'Tomato Red Chilli Pickle',
    nameTelugu: 'టమాటా ఎర్ర మిరప పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'A fiery combination of ripe red chilies and juicy tomatoes ground into a delicious Andhra pickle.',
    image: '/images/mixed_veg_pickle.png'
  },
  {
    id: 'v-15',
    name: 'Tamarind Pickle',
    nameTelugu: 'చింతకాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Tangy and raw green tamarind pickle made using traditional mortar-pestle crushing methods.',
    image: '/images/chintakaya_pickle_uploaded.jpg'
  },
  {
    id: 'v-16',
    name: 'Raw Tamarind Pickle',
    nameTelugu: 'పచ్చి చింతకాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Traditional green tamarind pulp ground with rock salt and turmeric, preserved in its purest form.',
    image: '/images/raw_tamarind_pickle_uploaded.jpg'
  },
  {
    id: 'v-17',
    name: 'Red Chilli Pickle',
    nameTelugu: 'ఎర్ర మిరపకాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Fiery red ripe chilies (Pandumirchi) ground into a paste with tamarind and garlic.',
    image: '/images/pandumirchi_pickle_uploaded.jpg',
    isBestSeller: true
  },
  {
    id: 'v-18',
    name: 'Green Chilli Pickle',
    nameTelugu: 'పచ్చి మిరపకాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Very spicy green chili pickle prepared in Godavari style with garlic and cold-pressed peanut oil.',
    image: '/images/green_chilli_pickle_uploaded.jpg'
  },
  {
    id: 'v-19',
    name: 'Bitter Gourd Pickle',
    nameTelugu: 'కాకరకాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Crispy fried bittergourd rings pickled in traditional spices, eliminating the bitterness.',
    image: '/images/kakarakaya_pickle_uploaded.png'
  },
  {
    id: 'v-20',
    name: 'Citron Pickle',
    nameTelugu: 'దబ్బకాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Traditional Citron pickle. Extremely sour and bitter-sweet, an ancient digestion aid.',
    image: '/images/dabbakaya_pickle_uploaded.png'
  },
  {
    id: 'v-21',
    name: 'Brinjal Pickle',
    nameTelugu: 'వంకాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Unique and flavorful fresh brinjal (eggplant) chunks pickled in a spiced gravy.',
    image: '/images/brinjal_pickle_uploaded.png'
  },
  {
    id: 'v-22',
    name: 'Sorrel Leaves Pickle',
    nameTelugu: 'గోంగూర పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'The pride of Andhra Pradesh. Tangy sorrel leaves (Gongura) ground and tempered with garlic and red chilies.',
    image: '/images/gongura_pickle_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'v-23',
    name: 'Coriander Pickle',
    nameTelugu: 'కొత్తిమీర పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Aromatic fresh coriander leaves ground with tamarind, spices, and oil.',
    image: '/images/coriander_pickle_uploaded.jpg'
  },
  {
    id: 'v-24',
    name: 'Curry Leaves Pickle',
    nameTelugu: 'కరివేపాకు పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Healthy and aromatic curry leaves pickle made with traditional spices. Great digestant.',
    image: '/images/curry_leaves_pickle_uploaded.png'
  },
  {
    id: 'v-25',
    name: 'Mint Leaves Pickle',
    nameTelugu: 'పుదీనా పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Fresh herbal mint (Pudina) leaves pickled with tamarind, red pepper, and sesame oil.',
    image: '/images/mint_leaves_pickle_uploaded.jpg'
  },
  {
    id: 'v-26',
    name: 'Mixed Veg Pickle',
    nameTelugu: 'మిక్స్ వెజ్ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'A crunchy mixture of carrots, cauliflower, peas, and raw mangoes in local spices.',
    image: '/images/mixed_veg_pickle_uploaded.png'
  },
  {
    id: 'v-27',
    name: 'Mango Ginger Pickle',
    nameTelugu: 'మామిడి అల్లం పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Traditional pickle made with Mango-Ginger (Mamidiallam) which gives a unique mango flavor with ginger heat.',
    image: '/images/mango_ginger_pickle_uploaded.png'
  },
  {
    id: 'v-28',
    name: 'Raw Banana Pickle',
    nameTelugu: 'అరటికాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Delicately cooked raw green banana chunks pickled in traditional mustard and chili powders.',
    image: '/images/raw_banana_pickle_uploaded.png'
  },
  {
    id: 'v-29',
    name: 'Carrot Pickle',
    nameTelugu: 'క్యారెట్ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Sweet and crunchy fresh carrot slivers pickled with mustard and chili powder.',
    image: '/images/carrot_pickle_uploaded.png'
  },
  {
    id: 'v-30',
    name: 'Beetroot Pickle',
    nameTelugu: 'బీట్రూట్ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Sweet, earthy beetroot shreds pickled in a spicy mustard oil dressing. Full of nutrients.',
    image: '/images/beetroot_pickle_uploaded.png'
  },
  {
    id: 'v-31',
    name: 'Raw Tamarind Red Chilli Pickle',
    nameTelugu: 'పచ్చి చింతకాయ ఎర్ర మిరప పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'A raw green tamarind base ground together with fresh red ripe chilis for an authentic sour-hot taste.',
    image: '/images/raw_tamarind_red_chilli_pickle_uploaded.png'
  },
  {
    id: 'v-32',
    name: 'Drumstick Leaves Pickle',
    nameTelugu: 'మునగాకు పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Highly nutritious fresh moringa (drumstick) leaves pickled with tamarind, garlic, and red chilis.',
    image: '/images/drumstick_leaves_pickle_uploaded.jpg'
  },
  {
    id: 'v-33',
    name: 'Sorrel Red Chilli Pickle',
    nameTelugu: 'గోంగూర ఎర్ర మిరప పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Sour Gongura leaves cooked with fresh red ripe chilis for a highly popular tangy-spicy variation.',
    image: '/images/gongura_pandumirchi_pickle_uploaded.jpg'
  },
  {
    id: 'v-34',
    name: 'Cauliflower Pickle',
    nameTelugu: 'కాలీఫ్లవర్ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Blanched cauliflower florets pickled in rich red chili, garlic, and oil.',
    image: '/images/cauliflower_pickle_uploaded.png'
  },
  {
    id: 'v-35',
    name: 'Veld Grape Pickle',
    nameTelugu: 'నల్లేరు కాయ పచ్చడి',
    category: 'veg',
    basePrice: 135,
    baseWeight: '250g',
    description: 'Traditional health-benefiting veld grape (Nalleru) stalks crushed and pickled. Great for bones.',
    image: '/images/veld_grape_pickle_uploaded.jpg'
  },
  {
    id: 'v-36',
    name: 'Elephant Foot Yam Pickle',
    nameTelugu: 'కందగడ్డ పచ్చడి',
    category: 'veg',
    basePrice: 140,
    baseWeight: '250g',
    description: 'Crispy pan-fried elephant foot yam (Kanda) cubes pickled in spicy Godavari mustard gravy.',
    image: '/images/elephant_foot_yam_pickle_uploaded.jpg'
  },
  {
    id: 'v-37',
    name: 'Broad Beans Pickle',
    nameTelugu: 'చిక్కుడుకాయ పచ్చడి',
    category: 'veg',
    basePrice: 150,
    baseWeight: '250g',
    description: 'Traditional country style broad beans (Chikkudukaya) pickled in a rich ginger-garlic and mustard base.',
    image: '/images/broad_beans_pickle_uploaded.png'
  },

  // ================= KARAPPODULU (Base 100g) =================
  {
    id: 'kp-1',
    name: 'Rice Karappodi',
    nameTelugu: 'రైస్ కారప్పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'A special flavorful spice powder made to pair perfectly with hot rice and ghee.',
    image: '/images/rice_karappodi_uploaded.jpg'
  },
  {
    id: 'kp-2',
    name: 'Idly Karappodi',
    nameTelugu: 'ఇడ్లీ కారప్పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Coarse gun powder spiced with red chili, roasted lentils, and garlic. Best enjoyed with hot idlis, ghee or oil.',
    image: '/images/idli_karam_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'kp-3',
    name: 'Toor Dal Karappodi',
    nameTelugu: 'కందిపప్పు కారప్పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Traditional roasted toor dal (Kandipappu) spice powder, aromatic and perfect with rice.',
    image: '/images/toor_dal_karappodi_uploaded.jpg'
  },
  {
    id: 'kp-4',
    name: 'Drumstick Leaves Karappodi',
    nameTelugu: 'మునగాకు కారప్పొడి',
    category: 'karappodulu',
    basePrice: 65,
    baseWeight: '100g',
    description: 'Healthy and nutrient-rich drumstick leaves (Munagaku) dry roasted with traditional spices.',
    image: '/images/drumstick_leaves_karappodi_uploaded.png'
  },
  {
    id: 'kp-5',
    name: 'Bitter Gourd Karappodi',
    nameTelugu: 'కాకరకాయ కారప్పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Tasty and healthy bitter gourd (Kakarakaya) spice powder, dry roasted with native spices.',
    image: '/images/bitter_gourd_karappodi_uploaded.jpg'
  },
  {
    id: 'kp-6',
    name: 'Curry Leaves Karappodi',
    nameTelugu: 'కరివేపాకు కారప్పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Sun-dried fresh curry leaves roasted with spices and ground. Highly aromatic and beneficial for hair and digestion.',
    image: '/images/karivepaku_karam_uploaded.png'
  },
  {
    id: 'kp-7',
    name: 'Sorrel Leaves Karappodi',
    nameTelugu: 'గోంగూర కారప్పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Sour and tangy Gongura (Sorrel) leaves blended with traditional roasted spices and lentils.',
    image: '/images/sorrel_leaves_karappodi_uploaded.jpg'
  },
  {
    id: 'kp-8',
    name: 'Coriander Karappodi',
    nameTelugu: 'కొత్తిమీర కారప్పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Aromatic fresh coriander leaves (Kottimeera) roasted with lentils and ground into a delicious powder.',
    image: '/images/coriander_karappodi_uploaded.jpg'
  },
  {
    id: 'kp-9',
    name: 'Mint Leaves Karappodi',
    nameTelugu: 'పుదీనా కారప్పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Dehydrated fresh mint leaves ground with lentils, red chilies, and tamarind. Minty, spicy, and refreshing.',
    image: '/images/pudina_karam_uploaded.png'
  },
  {
    id: 'kp-10',
    name: 'Groundnut Karappodi',
    nameTelugu: 'పల్లీల కారప్పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Roasted groundnuts (Pallilu) blended with garlic, red chilies, and cumin for a nutty and crunchy spice powder.',
    image: '/images/groundnut_karappodi_uploaded.jpg'
  },
  {
    id: 'kp-11',
    name: 'Sesame Karappodi',
    nameTelugu: 'నువ్వుల కారప్పొడి',
    category: 'karappodulu',
    basePrice: 60,
    baseWeight: '100g',
    description: 'Sesame seeds (Nuvvulu) dry-roasted with red chilies and garlic, forming a nutty, nutrient-dense spice powder.',
    image: '/images/nuvvula_karam_uploaded.png'
  },
  {
    id: 'kp-12',
    name: 'Garlic Karappodi',
    nameTelugu: 'వెల్లుల్లి కారప్పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Spicy garlic pods ground with dried red chili, salt, and cumin. Adds a strong garlic punch to any meal.',
    image: '/images/vellulli_karam_uploaded.jpg',
    isBestSeller: true
  },
  {
    id: 'kp-13',
    name: 'Roasted Dal Karam',
    nameTelugu: 'పుట్నాల పప్పు కారం పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Roasted chana dal (Putnala pappu) ground with dry red chili, cumin, and garlic. Mildly spiced and comforting.',
    image: '/images/pappula_karam_uploaded.jpg'
  },
  {
    id: 'kp-14',
    name: 'Nalleru Karappodi',
    nameTelugu: 'నల్లేరు కారప్పొడి',
    category: 'karappodulu',
    basePrice: 60,
    baseWeight: '100g',
    description: 'Traditional health-benefiting veld grape (Nalleru) stalks dried, roasted, and ground with spices.',
    image: '/images/karam_podi.png'
  },
  {
    id: 'kp-15',
    name: 'Flax Seeds Karappodi',
    nameTelugu: 'అవిసె గింజల కారప్పొడి',
    category: 'karappodulu',
    basePrice: 70,
    baseWeight: '100g',
    description: 'Omega-3 rich flax seeds (Avisalu) roasted with dry chilies and spices. Extremely healthy.',
    image: '/images/avisala_karam_uploaded.png'
  },
  {
    id: 'kp-16',
    name: 'Dry Prawns Karappodi',
    nameTelugu: 'ఎండు రొయ్యల కారప్పొడి',
    category: 'karappodulu',
    basePrice: 65,
    baseWeight: '100g',
    description: 'Sun-dried prawns roasted with local spices and ground. A dry, seafood-infused spice powder.',
    image: '/images/enduroyyala_karam_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'kp-17',
    name: 'Minapa Karappodi',
    nameTelugu: 'మినప్పప్పు కారప్పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Traditional roasted urad dal (Minappappu) spice powder, aromatic and delicious with breakfast items.',
    image: '/images/minapa_karappodi_uploaded.png'
  },
  {
    id: 'kp-18',
    name: 'Kobbari Karappodi',
    nameTelugu: 'కొబ్బరి కారప్పొడి',
    category: 'karappodulu',
    basePrice: 65,
    baseWeight: '100g',
    description: 'Dry coconut grated and ground with garlic, cumin, and red chilies. Sweet, nutty, and spicy.',
    image: '/images/kobbari_karam_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'kp-19',
    name: 'Amla Karappodi',
    nameTelugu: 'ఉసిరికాయ కారప్పొడి',
    category: 'karappodulu',
    basePrice: 57,
    baseWeight: '100g',
    description: 'Sun-dried Indian gooseberry (Amla/Usirikaya) pieces ground with traditional spices for a tangy and healthy powder.',
    image: '/images/amla_karappodi_uploaded.png'
  },
  {
    id: 'kp-20',
    name: 'Sonti Karappodi',
    nameTelugu: 'శొంఠి కారప్పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Dry ginger (Sonti) roasted with spices, ground to a healing, aromatic digestive powder.',
    image: '/images/sonti_karappodi_uploaded.png'
  },
  {
    id: 'kp-21',
    name: 'Nalla Karam Podi',
    nameTelugu: 'నల్ల కారం పొడి',
    category: 'karappodulu',
    basePrice: 55,
    baseWeight: '100g',
    description: 'Black urad dal, coriander seeds, tamarind, and black pepper roasted and ground to a dark, spicy powder.',
    image: '/images/nalla_karam_uploaded.png',
    isBestSeller: true
  },

  // ================= VADIYALU (Base 100g unless specified) =================
  {
    id: 'vad-1',
    name: 'Rice Vadiyalu',
    nameTelugu: 'బియ్యపు వడియాలు',
    category: 'vadiyalu',
    basePrice: 80,
    baseWeight: '100g',
    description: 'Homemade sun-dried rice flour fryums spiced with green chilies, sesame, and cumin.',
    image: '/images/rice_vadiyalu_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'vad-2',
    name: 'Carrot Vadiyalu',
    nameTelugu: 'క్యారెట్ వడియాలు',
    category: 'vadiyalu',
    basePrice: 85,
    baseWeight: '100g',
    description: 'Rice flour cooked with fresh carrot puree, sun-dried for a beautiful orange color and sweet crunch.',
    image: '/images/carrot_vadiyalu_uploaded.png'
  },
  {
    id: 'vad-3',
    name: 'Beetroot Vadiyalu',
    nameTelugu: 'బీట్రూట్ వడియాలు',
    category: 'vadiyalu',
    basePrice: 85,
    baseWeight: '100g',
    description: 'Organic beetroot juice blended with rice flour, offering a vibrant pink hue and sweet earthy crunch.',
    image: '/images/beetroot_vadiyalu_uploaded.png'
  },
  {
    id: 'vad-4',
    name: 'Tomato Vadiyalu',
    nameTelugu: 'టమాటా వడియాలు',
    category: 'vadiyalu',
    basePrice: 85,
    baseWeight: '100g',
    description: 'Tangy tomato pulp combined with rice flour paste, sun-dried to perfection.',
    image: '/images/tomato_vadiyalu_uploaded.png'
  },
  {
    id: 'vad-5',
    name: 'Ragi Vadiyalu',
    nameTelugu: 'రాగి వడియాలు',
    category: 'vadiyalu',
    basePrice: 85,
    baseWeight: '100g',
    description: 'Nutritious finger millet (Ragi) flour vadiyalu, highly fiber-rich and healthy.',
    image: '/images/ragi_vadiyalu_uploaded.png'
  },
  {
    id: 'vad-6',
    name: 'Drumstick Vadiyalu',
    nameTelugu: 'మునగకాయ వడియాలు',
    category: 'vadiyalu',
    basePrice: 85,
    baseWeight: '100g',
    description: 'Healthy rice starch fryums enriched with nutrient-dense fresh moringa (drumstick) leaves.',
    image: '/images/munagaku_vadiyalu_uploaded.png'
  },
  {
    id: 'vad-7',
    name: 'Curry Leaves Vadiyalu',
    nameTelugu: 'కరివేపాకు వడియాలు',
    category: 'vadiyalu',
    basePrice: 85,
    baseWeight: '100g',
    description: 'Aromatic rice flour vadiyalu infused with finely ground curry leaves and cumin.',
    image: '/images/karivepaku_vadiyalu_uploaded.png'
  },
  {
    id: 'vad-8',
    name: 'Mint Leaves Vadiyalu',
    nameTelugu: 'పుదీనా వడియాలు',
    category: 'vadiyalu',
    basePrice: 80,
    baseWeight: '100g',
    description: 'Mint-infused rice flour fryums offering a refreshing herbal aroma upon frying.',
    image: '/images/pudina_vadiyalu_uploaded.png'
  },
  {
    id: 'vad-9',
    name: 'Coriander Vadiyalu',
    nameTelugu: 'కొత్తిమీర వడియాలు',
    category: 'vadiyalu',
    basePrice: 85,
    baseWeight: '100g',
    description: 'Fresh coriander (cilantro) paste cooked with rice flour and sun-dried.',
    image: '/images/kottimeera_vadiyalu_uploaded.png'
  },
  {
    id: 'vad-10',
    name: 'Moong Dal Vadiyalu',
    nameTelugu: 'పెసరపప్పు వడియాలు',
    category: 'vadiyalu',
    basePrice: 85,
    baseWeight: '100g',
    description: 'Sun-dried split yellow moong dal nuggets, perfect for frying or adding to stews.',
    image: '/images/pesara_vadiyalu_uploaded.png'
  },
  {
    id: 'vad-11',
    name: 'Urad Dal Vadiyalu',
    nameTelugu: 'మినప్పప్పు వడియాలు',
    category: 'vadiyalu',
    basePrice: 80,
    baseWeight: '100g',
    description: 'Classic black gram (urad dal) sundried dumplings, deep fry or add to native curries.',
    image: '/images/minapa_vadiyalu_uploaded.png'
  },
  {
    id: 'vad-12',
    name: 'Pumpkin Vadiyalu',
    nameTelugu: 'గుమ్మడికాయ వడియాలు',
    category: 'vadiyalu',
    basePrice: 240,
    baseWeight: '250g',
    description: 'Traditional Ash gourd (winter melon) nuggets, sun-dried. Fry them to golden brown to serve with dal rice.',
    image: '/images/gummadi_vadiyalu_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'vad-13',
    name: 'Challa Mirchi',
    nameTelugu: 'చల్ల మిరపకాయలు',
    category: 'vadiyalu',
    basePrice: 75,
    baseWeight: '100g',
    description: 'Traditional sun-dried curd chilies (majiga mirapakayalu) stuffed with yogurt and spices. Crisp and salty.',
    image: '/images/challa_mirchi_uploaded.png'
  },

  // ================= SWEETS & SNACKS (Base 200g/Pkt unless specified) =================
  {
    id: 'sw-1',
    name: 'Ribbon Murukulu',
    nameTelugu: 'రిబ్బన్ మురుకులు',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Crispy and light ribbon-shaped savory snacks seasoned with sesame and mild spices.',
    image: '/images/ribbon_murukulu_uploaded.png'
  },
  {
    id: 'sw-2',
    name: 'Dootha Pakodi',
    nameTelugu: 'దూత పకోడి',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Crispy, soft, and savory gram flour onion pakoda, a traditional tea-time snack.',
    image: '/images/dootha_pakodi_uploaded.jpg'
  },
  {
    id: 'sw-3',
    name: 'Atukula (Poha) Mixture',
    nameTelugu: 'అటుకుల (పోహా) మిక్చర్',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Fluffy flattened rice (atukulu) tossed with peanuts, cashews, and traditional Andhra spices.',
    image: '/images/atukula_mixture_uploaded.jpg'
  },
  {
    id: 'sw-4',
    name: 'Lavu Karapusa',
    nameTelugu: 'లావు కారప్పూస',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Thick gram flour sev, seasoned with ajwain, salt, and mild red chili powder.',
    image: '/images/lavu_karapusa_uploaded.png'
  },
  {
    id: 'sw-5',
    name: 'Sanna Karapusa',
    nameTelugu: 'సన్న కారప్పూస',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Thin gram flour sev seasoned with salt, red chili powder, and ajwain.',
    image: '/images/sanna_karapusa_uploaded.png'
  },
  {
    id: 'sw-6',
    name: 'Palli Pakodi',
    nameTelugu: 'పల్లి పకోడి',
    category: 'sweets-snacks',
    basePrice: 95,
    baseWeight: '200g',
    description: 'Crunchy peanut pakodas coated with spiced chickpea flour paste and deep fried.',
    image: '/images/palli_pakodi_uploaded.jpg'
  },
  {
    id: 'sw-7',
    name: 'Jantikalu',
    nameTelugu: 'జంతికలు',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Crunchy savory rings made of rice and gram flour batter seasoned with carom seeds (vamu).',
    image: '/images/jantikalu_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'sw-8',
    name: 'Baru Murukulu',
    nameTelugu: 'బారు మురుకులు',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Long, stick-like crispy savory snack made from rice flour and roasted chana dal.',
    image: '/images/baru_murukulu_uploaded.png'
  },
  {
    id: 'sw-9',
    name: 'Round Murukulu',
    nameTelugu: 'రౌండ్ మురుకులు',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Classic circular spiral murukulu, extra crunchy and seasoned with cumin.',
    image: '/images/round_murukulu_uploaded.png'
  },
  {
    id: 'sw-10',
    name: 'Challa Jantikalu',
    nameTelugu: 'చల్ల జంతికలు',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Special jantikalu prepared using sour buttermilk (challa) in the dough for a unique tangy-savory flavor.',
    image: '/images/challa_jantikalu_uploaded.png'
  },
  {
    id: 'sw-11',
    name: 'Cornflakes Mixture',
    nameTelugu: 'కార్న్ఫ్లేక్స్ మిక్చర్',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Crunchy cornflakes tossed with roasted cashews, peanuts, curry leaves, and spicy red pepper.',
    image: '/images/cornflakes_mixture_uploaded.jpg'
  },
  {
    id: 'sw-12',
    name: 'Kara Boondi',
    nameTelugu: 'కార బూంది',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Spicy fried chickpea flour pearls tossed with cashews, peanuts, and curry leaves.',
    image: '/images/kara_boondi_uploaded.png'
  },
  {
    id: 'sw-13',
    name: 'All Mixture',
    nameTelugu: 'ఆల్ మిక్చర్',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Premium Andhra mixture containing sev, boondi, peanuts, and rich native spices.',
    image: '/images/all_mixture_uploaded.jpg',
    isBestSeller: true
  },
  {
    id: 'sw-14',
    name: 'Small Chegodilu',
    nameTelugu: 'చిన్న చెకోడీలు',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Bite-sized, ring-shaped crunchy golden treats made with rice flour and ajwain.',
    image: '/images/small_chegodilu_uploaded.png'
  },
  {
    id: 'sw-15',
    name: 'Dal Mudi Mixture',
    nameTelugu: 'దాల్ ముడి మిక్చర్',
    category: 'sweets-snacks',
    basePrice: 95,
    baseWeight: '200g',
    description: 'Traditional crispy savory snack made with whole brown lentils, gram flour noodles, and spices.',
    image: '/images/dal_mudi_mixture_uploaded.png'
  },
  {
    id: 'sw-16',
    name: 'Masala Kabuli Chana',
    nameTelugu: 'మసాలా కాబూలీ శనగ',
    category: 'sweets-snacks',
    basePrice: 111,
    baseWeight: '200g',
    description: 'Spicy, tangy deep-fried Kabuli chickpeas coated with aromatic roasted spices.',
    image: '/images/masala_kabuli_chana_uploaded.jpg'
  },
  {
    id: 'sw-17',
    name: 'Chekkalu',
    nameTelugu: 'చెక్కలు',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Flat, crispy rice flour crackers seasoned with chana dal, green chilies, and curry leaves.',
    image: '/images/chekkalu_uploaded.jpg'
  },
  {
    id: 'sw-18',
    name: 'Sanna Boondi Chikki',
    nameTelugu: 'సన్న బూంది చిక్కీ',
    category: 'sweets-snacks',
    basePrice: 99,
    baseWeight: '200g',
    description: 'Crispy fine boondi granules pressed together with thick golden jaggery syrup.',
    image: '/images/sanna_boondi_chikki_uploaded.png'
  },
  {
    id: 'sw-19',
    name: 'Sweet Kommulu',
    nameTelugu: 'స్వీట్ కొమ్ములు',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Traditional sweet sticks made of flour, deep fried and coated with jaggery syrup.',
    image: '/images/sweet_kommulu_uploaded.png'
  },
  {
    id: 'sw-20',
    name: 'Gavvalu',
    nameTelugu: 'గవ్వలు',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Shell-shaped traditional flour shells fried and coated in sweet sticky jaggery syrup.',
    image: '/images/gavvalu_uploaded.jpg'
  },
  {
    id: 'sw-21',
    name: 'Gorumitilu (Sugar)',
    nameTelugu: 'గోరుమిటిలు (పంచదార)',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Crescent-shaped sweet pastries glazed with sugar (Panchadara) syrup.',
    image: '/images/gorumitilu_sugar_uploaded.png'
  },
  {
    id: 'sw-22',
    name: 'Gorumitilu (Jaggery)',
    nameTelugu: 'గోరుమిటిలు (బెల్లం)',
    category: 'sweets-snacks',
    basePrice: 95,
    baseWeight: '200g',
    description: 'Traditional crescent-shaped sweet pastries coated in sweet jaggery (Bellam) syrup.',
    image: '/images/gorumitilu_jaggery_uploaded.png'
  },
  {
    id: 'sw-23',
    name: 'Ariselu',
    nameTelugu: 'అరిసెలు',
    category: 'sweets-snacks',
    basePrice: 258,
    baseWeight: '500g',
    description: 'Traditional Andhra sweet made of rice flour and jaggery, deep-fried in oil during festivals.',
    image: '/images/ariselu_500gm_uploaded.png',
    isBestSeller: true
  },
  {
    id: 'sw-24',
    name: 'Nuvvula Ariselu',
    nameTelugu: 'నువ్వుల అరిసెలు',
    category: 'sweets-snacks',
    basePrice: 283,
    baseWeight: '500g',
    description: 'Rice flour and jaggery ariselu coated with sesame seeds (nuvvulu) for a rich nutty taste.',
    image: '/images/nuvvula_ariselu_500gm_uploaded.jpg'
  },
  {
    id: 'sw-25',
    name: 'Sweet Boondi',
    nameTelugu: 'స్వీట్ బూంది',
    category: 'sweets-snacks',
    basePrice: 91,
    baseWeight: '200g',
    description: 'Sweet, juicy boondi pearls soaked in sugar syrup, flavored with cardamom.',
    image: '/images/sweet_boondi_uploaded.png'
  },
  {
    id: 'sw-26',
    name: 'Nuvvula Chikki',
    nameTelugu: 'నువ్వుల చిక్కీ',
    category: 'sweets-snacks',
    basePrice: 107,
    baseWeight: '200g',
    description: 'Crunchy sweet sesame seed chikki/bar made with organic jaggery.',
    image: '/images/nuvvula_chikki_uploaded.jpg'
  },
  {
    id: 'sw-27',
    name: 'Palli Chikki',
    nameTelugu: 'పల్లి చిక్కీ',
    category: 'sweets-snacks',
    basePrice: 103,
    baseWeight: '200g',
    description: 'Traditional peanut chikki/bar bound together with thick jaggery syrup.',
    image: '/images/palli_chikki_uploaded.jpg'
  },
  {
    id: 'sw-28',
    name: 'Venna Gollilu',
    nameTelugu: 'వెన్న గోలీలు',
    category: 'sweets-snacks',
    basePrice: 131,
    baseWeight: '200g',
    description: 'Butter-rich, melt-in-the-mouth fried sweet balls made from rice and urad dal flour.',
    image: '/images/venna_gollilu_uploaded.png'
  },
  {
    id: 'sw-29',
    name: 'Dry Fruit Laddu',
    nameTelugu: 'డ్రై ఫ్రూట్ లడ్డు',
    category: 'sweets-snacks',
    basePrice: 343,
    baseWeight: '500g',
    description: 'Healthy, sugar-free sweet balls packed with dates, figs, cashews, almonds, and pistachios.',
    image: '/images/dry_fruit_laddu_uploaded.jpg'
  },
  {
    id: 'sw-30',
    name: 'Mamidi Thandra (Sugar)',
    nameTelugu: 'మామిడి తాండ్ర (పంచదార)',
    category: 'sweets-snacks',
    basePrice: 100,
    baseWeight: '200g',
    description: 'Sweet and tangy mango jelly sheets made from ripe mango pulp sweetened with sugar.',
    image: '/images/mamidi_thandra_sugar_uploaded.png'
  },
  {
    id: 'sw-31',
    name: 'Bellam Mamidi Thandra',
    nameTelugu: 'బెల్లం మామిడి తాండ్ర',
    category: 'sweets-snacks',
    basePrice: 100,
    baseWeight: '250g',
    description: 'Traditional mango jelly sheets made from ripe mango pulp sweetened with pure jaggery.',
    image: '/images/bellam_mamidi_thandra_uploaded.png'
  },
  {
    id: 'sw-32',
    name: 'Thati Thandra',
    nameTelugu: 'తాటి తాండ్ర',
    category: 'sweets-snacks',
    basePrice: 120,
    baseWeight: '250g',
    description: 'Rare, traditional toddy palm fruit jelly sheets, sweet and full of authentic flavor.',
    image: '/images/thati_thandra_uploaded.png'
  },
  {
    id: 'sw-33',
    name: 'Urad Dal Laddu',
    nameTelugu: 'మినప్పప్పు లడ్డు',
    category: 'sweets-snacks',
    basePrice: 310,
    baseWeight: '500g',
    description: 'Traditional roasted black gram (Urad dal) sweet balls rolled in pure ghee and jaggery.',
    image: '/images/urad_dal_laddu_uploaded.jpg',
    isBestSeller: true
  },
  {
    id: 'sw-34',
    name: 'Coconut Laddu',
    nameTelugu: 'కొబ్బరి లడ్డు',
    category: 'sweets-snacks',
    basePrice: 270,
    baseWeight: '500g',
    description: 'Soft and juicy sweet balls made with fresh grated coconut, cardamom, and jaggery.',
    image: '/images/coconut_laddu_uploaded.png'
  },
  {
    id: 'sw-35',
    name: 'Ragi Laddu',
    nameTelugu: 'రాగి లడ్డు',
    category: 'sweets-snacks',
    basePrice: 310,
    baseWeight: '500g',
    description: 'Healthy finger millet (Ragi) sweet balls prepared with ghee, nuts, and organic jaggery.',
    image: '/images/ragi_laddu_500gm_uploaded.png'
  },
  {
    id: 'gh-1',
    name: 'Pure Ghee',
    nameTelugu: 'స్వచ్ఛమైన నెయ్యి',
    category: 'ghee-honey',
    basePrice: 1020,
    baseWeight: '1kg',
    description: 'Traditional homemade pure cow/buffalo ghee made from fresh milk cream. Incredibly aromatic and nutritious.',
    image: '/images/ghee_uploaded.jpg'
  },
  {
    id: 'gh-2',
    name: 'Natural Honey',
    nameTelugu: 'సహజ సిద్ధమైన తేనె',
    category: 'ghee-honey',
    basePrice: 660,
    baseWeight: '1kg',
    description: '100% natural, raw, unprocessed forest honey collected directly from wild honeycombs.',
    image: '/images/honey_uploaded.png'
  }
];

export const getPriceForWeight = (basePrice: number, baseWeight: string, targetWeight: string): number => {
  // Parse base weight and target weight
  const baseQty = parseInt(baseWeight.replace(/[^0-9]/g, ''));
  const targetQty = parseInt(targetWeight.replace(/[^0-9]/g, ''));
  
  if (baseWeight.includes('kg') && targetWeight.includes('g') && !targetWeight.includes('kg')) {
    // base is 1kg (1000g), target is e.g. 500g
    return Math.round((basePrice / 1000) * targetQty);
  }
  
  if (baseWeight.includes('g') && !baseWeight.includes('kg') && targetWeight.includes('kg')) {
    // base is e.g. 250g, target is 1kg (1000g)
    const targetInGrams = targetQty * 1000;
    return Math.round((basePrice / baseQty) * targetInGrams);
  }
  
  // Normal calculation in same units
  return Math.round((basePrice / baseQty) * targetQty);
};

export const getAvailableWeights = (category: string, baseWeight: string): string[] => {
  if (category === 'ghee-honey') {
    return ['1kg'];
  }
  if (category === 'non-veg') {
    return ['250g'];
  }
  if (category === 'veg') {
    return ['250g'];
  }
  if (category === 'karappodulu') {
    return ['100g'];
  }
  if (category === 'sweets-snacks') {
    if (baseWeight === '500g') {
      return ['500g'];
    }
    if (baseWeight === '250g') {
      return ['250g'];
    }
    return ['200g'];
  }
  if (category === 'vadiyalu') {
    if (baseWeight === '250g') {
      return ['250g'];
    }
    return ['100g'];
  }
  return [baseWeight];
};
