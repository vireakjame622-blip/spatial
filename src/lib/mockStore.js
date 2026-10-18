// In-memory data store for local preview when MongoDB service is not actively running locally.
import { hashPassword } from './auth';

export const initialSimulations = [
  {
    id: 'sim-cleancity-01',
    title: 'Clean City: Central Market (Phsar Thmey Eco-Quest)',
    titleKhmer: 'ទីក្រុងស្អាត៖ ផ្សារធំថ្មី (Phsar Thmey Eco-Quest)',
    category: 'Clean City',
    categoryKhmer: 'ទីក្រុងស្អាត & បរិស្ថាន',
    description: 'Ride the Cambodian Eco Bicycle around Central Market. Sort street litter across 5 color-coded bins (Green, Yellow, Blue, Grey, Red), extinguish toxic open fires, and restore Air Quality from 32% to 100%!',
    descriptionKhmer: 'ជិះកង់អេកូឡូស៊ីជុំវិញផ្សារធំថ្មី រើសសម្រាមតាមដងផ្លូវ ញែកចូលធុង ៥ ពណ៌ ពន្លត់ភ្លើងដុតសម្រាម ដើម្បីលុបបំបាត់ផ្សែងពុល PM2.5 និងស្តារគុណភាពខ្យល់ឱ្យដល់ ១០០%! 🇰🇭',
    thumbnail: '/images/spatial_vr_kit.png',
    gameUrl: '/games/cleancity/index.html',
    duration: '10 mins',
    level: 'Eco Hero',
    vrCardboardSupported: true,
    controllerSupported: true,
    runsCount: 3840,
    rating: 5.0,
    type: 'cleancity',
    location: 'Central Market (Phsar Thmey)',
    locationKhmer: 'ផ្សារធំថ្មី រាជធានីភ្នំពេញ',
    vehicle: 'Cambodian Eco Bicycle',
    learningObjectives: [
      'Master 5-bin waste separation: Green (Organic), Yellow (Plastic), Blue (Recyclable), Grey (General), Red (Hazardous)',
      'Extinguish open waste burning fires to eliminate PM2.5 toxic smog',
      'Track real-time Air Quality recovery and street cleanliness transformation'
    ]
  },
  {
    id: 'sim-cleancity-02',
    title: 'Clean City: Riverside Promenade (Tuk-Tuk Eco Express)',
    titleKhmer: 'ទីក្រុងស្អាត៖ មាត់ទន្លេភ្នំពេញ (Tuk-Tuk Eco Express)',
    category: 'Clean City',
    categoryKhmer: 'ទីក្រុងស្អាត & បរិស្ថាន',
    description: 'Pilot the solar-assisted Tuk-Tuk Eco Express along Sisowath Quay. Collect up to 10 bulk recyclable items, drop them off at the central Recycling Depot for +50 bonus points, and keep the riverside pristine.',
    descriptionKhmer: 'បើកបរយាន Tuk-Tuk Eco Express តាមបណ្តោយវិថីមាត់ទន្លេស៊ីសុវត្ថិ ប្រមូលសម្ភារៈកែច្នៃរហូតដល់ ១០ មុខ ដឹកយកទៅដេប៉ូកែច្នៃកណ្តាល (+50 Pts) និងសម្អាតទីក្រុងឱ្យស្អាតបរិសុទ្ធ។',
    thumbnail: '/images/spatial_vr_kit.png',
    gameUrl: '/games/cleancity/index.html',
    duration: '15 mins',
    level: 'Advanced Eco Driver',
    vrCardboardSupported: true,
    controllerSupported: true,
    runsCount: 2950,
    rating: 4.9,
    type: 'cleancity_tuktuk',
    location: 'Riverside Promenade (Sisowath Quay)',
    locationKhmer: 'មាត់ទន្លេស៊ីសុវត្ថិ រាជធានីភ្នំពេញ',
    vehicle: 'Tuk-Tuk Eco Express',
    learningObjectives: [
      'Drive the 3-wheeled Tuk-Tuk with responsive acceleration and braking',
      'Manage cargo capacity (up to 10 items) and drop off at the Recycling Depot',
      'Achieve 100% Pristine Clear Air Quality and zero street waste overflow'
    ]
  },
  {
    id: 'sim-solar-01',
    title: 'Solar System 3D Orbit & Planet Telemetry',
    titleKhmer: 'គន្លងតារាវិថីនៃប្រព័ន្ធព្រះអាទិត្យ 3D',
    category: 'Astronomy',
    categoryKhmer: 'តារាសាស្ត្រ',
    description: 'Explore the 8 major planets with realistic orbital velocity, gravitational dynamics, and live telemetry in immersive VR.',
    descriptionKhmer: 'ទស្សនាភពទាំង ៨ នៃប្រព័ន្ធព្រះអាទិត្យ ជាមួយនឹងល្បឿនគន្លងពិតប្រាកដ កម្លាំងទំនាញ និងទិន្នន័យ Telemetry ក្នុងប្រព័ន្ធ VR។',
    thumbnail: '/images/solar_simulation.jpg',
    duration: '20 mins',
    level: 'Beginner',
    vrCardboardSupported: true,
    controllerSupported: true,
    runsCount: 1420,
    rating: 4.9,
    type: 'solar',
    learningObjectives: [
      'Understand Kepler’s laws of planetary motion',
      'Compare scale and distance between terrestrial and gas giant planets',
      'Interact with planetary gravity fields using the DIY joystick'
    ]
  },
  {
    id: 'sim-heart-02',
    title: 'Human Heart Anatomy & Hologram Vascular Flow',
    titleKhmer: 'កាយវិភាគវិទ្យាបេះដូងមនុស្ស & ចរន្តឈាម Hologram',
    category: 'Anatomy',
    categoryKhmer: 'កាយវិភាគវិទ្យា',
    description: 'Dissect the human cardiac muscle, observe pulsating atriums and ventricles, and trace oxygenated vs deoxygenated blood flow.',
    descriptionKhmer: 'ស្វែងយល់អំពីរចនាសម្ព័ន្ធបេះដូងមនុស្ស ចលនានៃបន្ទប់បេះដូង និងចរន្តឈាមក្រហម/ខៀវ នៅក្នុងបន្ទប់ពិសោធន៍ Hologram។',
    thumbnail: '/images/heart_simulation.jpg',
    duration: '25 mins',
    level: 'Intermediate',
    vrCardboardSupported: true,
    controllerSupported: true,
    runsCount: 1890,
    rating: 5.0,
    type: 'heart',
    learningObjectives: [
      'Identify the 4 chambers, aorta, and vena cava',
      'Analyze systolic and diastolic pressure cycles',
      'Trigger simulated arrhythmias with the controller action buttons'
    ]
  },
  {
    id: 'sim-physics-03',
    title: 'Gravity Pendulum & Kinetic Momentum Lab',
    titleKhmer: 'បន្ទប់ពិសោធន៍រូបវិទ្យា៖ លំយោលប៉ោល & សន្ទុះចលនា',
    category: 'Physics',
    categoryKhmer: 'រូបវិទ្យា',
    description: 'Experiment with gravitational constants, kinetic-potential energy conversion, and elastic collisions in frictionless 3D space.',
    descriptionKhmer: 'ពិសោធន៍កម្លាំងទំនាញផែនដី ការបំលែងថាមពលប៉ូតង់ស្យែលទៅជាស៊ីនេទិច និងការទង្គិចគ្នាក្នុងលំហគ្មានកកិត។',
    thumbnail: '/images/solar_simulation.jpg',
    duration: '15 mins',
    level: 'Beginner',
    vrCardboardSupported: true,
    controllerSupported: true,
    runsCount: 960,
    rating: 4.8,
    type: 'physics',
    learningObjectives: [
      'Measure oscillation period vs length of string',
      'Simulate zero-g and lunar gravity conditions',
      'Record telemetry data graphs'
    ]
  },
  {
    id: 'sim-robotics-04',
    title: 'Mars Rover Teleoperation & Terrain Mapping',
    titleKhmer: 'ការបញ្ជាយានរុករកភពអង្គារ & ផែនទីដីភពអង្គារ',
    category: 'Robotics',
    categoryKhmer: 'រ៉ូបូតវិទ្យា',
    description: 'Drive an autonomous rover across the Jezero crater surface on Mars using your DIY Bluetooth controller joystick and buttons.',
    descriptionKhmer: 'បើកបរយានរុករកលើផ្ទៃភពអង្គារ Jezero Crater ដោយប្រើប្រាស់ Joystick និងប៊ូតុងរបស់ Controller DIY របស់អ្នក។',
    thumbnail: '/images/spatial_vr_kit.jpg',
    duration: '30 mins',
    level: 'Advanced',
    vrCardboardSupported: true,
    controllerSupported: true,
    runsCount: 2310,
    rating: 4.9,
    type: 'rover',
    learningObjectives: [
      'Navigate rough martian obstacle fields',
      'Calibrate analog stick deadzones and sensitivity',
      'Collect rock sample points with the robotic arm'
    ]
  }
];

// In-memory demo users
let memoryUsers = [
  {
    id: 'user-cadt-student',
    name: 'CADT Student Maker',
    email: 'student@cadt.edu.kh',
    passwordHash: '$2a$10$w8FmN2JzN3Qe8JzN3Qe8J.exampleHashedPassword',
    role: 'student',
    institution: 'CADT - Institute of Digital Technology',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    kitProgress: {
      cardboardCut: true,
      lensesFitted: true,
      controllerWired: true,
      bluetoothPaired: true,
      firstVrCompleted: false,
    },
    completedSimulations: ['sim-solar-01'],
    bookmarkedSimulations: ['sim-heart-02', 'sim-robotics-04'],
    createdAt: new Date().toISOString()
  },
  {
    id: 'user-cadt-educator',
    name: 'CADT STEM Educator',
    email: 'educator@cadt.edu.kh',
    passwordHash: '$2a$10$w8FmN2JzN3Qe8JzN3Qe8J.exampleHashedPassword',
    role: 'educator',
    institution: 'CADT - Institute of Digital Technology',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    kitProgress: {
      cardboardCut: true,
      lensesFitted: true,
      controllerWired: true,
      bluetoothPaired: true,
      firstVrCompleted: true,
    },
    completedSimulations: ['sim-solar-01', 'sim-heart-02', 'sim-physics-03'],
    bookmarkedSimulations: ['sim-robotics-04'],
    createdAt: new Date().toISOString()
  }
];

let memoryOrders = [
  {
    id: 'ord_101',
    fullName: 'CADT STEM Lab Member',
    email: 'student@cadt.edu.kh',
    phone: '+855 12 345 678',
    institution: 'CADT - Institute of Digital Technology',
    role: 'student',
    kitType: 'full_kit',
    quantity: 1,
    shippingAddress: 'CADT Innovation Building, 2nd Floor, Phnom Penh',
    notes: 'For final year student VR simulation testing',
    status: 'confirmed',
    createdAt: new Date().toISOString()
  }
];

export const mockStore = {
  getSimulations: () => initialSimulations,
  getSimulationById: (id) => initialSimulations.find(s => s.id === id || s._id === id),
  getUsers: () => memoryUsers,
  findUserByEmail: (email) => memoryUsers.find(u => u.email.toLowerCase() === email.toLowerCase()),
  findUserById: (id) => memoryUsers.find(u => u.id === id || u._id === id),
  addUser: (user) => {
    memoryUsers.push(user);
    return user;
  },
  updateUser: (id, updates) => {
    const user = memoryUsers.find(u => u.id === id || u._id === id);
    if (user) {
      Object.assign(user, updates);
      return user;
    }
    return null;
  },
  getOrders: () => memoryOrders,
  addOrder: (order) => {
    memoryOrders.unshift(order);
    return order;
  }
};
