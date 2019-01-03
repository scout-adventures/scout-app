'use strict'

const db = require('../server/db')
const {
  Categories,
  PageLevelCategories,
  User,
  SubCategories
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'pnoonan91@gmail.com',
      firstName: 'Patrick',
      lastName: 'Noonan',
      password: '123'
    }),
    User.create({
      email: 'mboban@gmail.com',
      firstName: 'Morgan',
      lastName: 'Boban',
      password: '123'
    })
  ])

  console.log(`seeded ${users.length} users`)

  const categories = await Promise.all([
    Categories.create({
      text: 'Camp & Hike',
      path: '/camp-hike',
      id: 1
    }),
    Categories.create({
      text: 'Climb',
      path: '/climb',
      id: 2
    }),
    Categories.create({
      text: 'Bike',
      path: '/bike',
      id: 3
    }),
    Categories.create({
      text: 'Paddle',
      path: '/paddle',
      id: 4
    }),
    Categories.create({
      text: 'Run',
      path: '/run',
      id: 5
    }),
    Categories.create({
      text: 'Snow',
      path: '/snow',
      id: 6
    }),
    Categories.create({
      text: 'Fish',
      path: '/fish',
      id: 7
    }),
    Categories.create({
      text: 'Men',
      path: '/men',
      id: 8
    }),
    Categories.create({
      text: 'Women',
      path: '/women',
      id: 9
    }),
    Categories.create({
      text: 'Kids',
      path: '/kids',
      id: 10
    }),
    Categories.create({
      text: 'More',
      path: '/more',
      id: 11
    })
  ])

  console.log(`seeded ${categories.length} categories`)

  const pageLevelCategories = await Promise.all([
    PageLevelCategories.create({
      text: 'Packs',
      path: '/camp-hike/packs',
      categoryId: 1,
      id: 1
    }),
    PageLevelCategories.create({
      text: 'Tents',
      path: '/camp-hike/tents',
      categoryId: 1,
      id: 2
    }),
    PageLevelCategories.create({
      text: 'Sleeping',
      path: '/camp-hike/sleeping',
      categoryId: 1,
      id: 3
    }),
    PageLevelCategories.create({
      text: 'Camp Kitchen',
      path: '/camp-hike/camp-kitchen',
      categoryId: 1,
      id: 4
    }),
    PageLevelCategories.create({
      text: 'Camp Furniture',
      path: '/camp-hike/camp-furniture',
      categoryId: 1,
      id: 5
    }),
    PageLevelCategories.create({
      text: 'Hydration',
      path: '/camp-hike/hydration',
      categoryId: 1,
      id: 6
    }),
    PageLevelCategories.create({
      text: 'Lighting',
      path: '/camp-hike/lighting',
      categoryId: 1,
      id: 7
    }),
    PageLevelCategories.create({
      text: 'Navigation',
      path: '/camp-hike/navigation',
      categoryId: 1,
      id: 8
    }),
    PageLevelCategories.create({
      text: 'Camp & Hike Essentials',
      path: '/camp-hike/essentials',
      categoryId: 1,
      id: 9
    }),
    PageLevelCategories.create({
      text: 'Hiking Footwear',
      path: '/camp-hike/hiking-footwear',
      categoryId: 1,
      id: 10
    }),
    PageLevelCategories.create({
      text: 'Hiking Clothing',
      path: '/camp-hike/hiking-clothing',
      categoryId: 1,
      id: 11
    }),
    PageLevelCategories.create({
      text: 'Health & Safety',
      path: '/camp-hike/health-safety',
      categoryId: 1,
      id: 12
    }),
    PageLevelCategories.create({
      text: 'Climbing Shoes',
      path: '/climb/shoes',
      categoryId: 2,
      id: 13
    }),
    PageLevelCategories.create({
      text: 'Sport',
      path: '/climb/sport',
      categoryId: 2,
      id: 14
    }),
    PageLevelCategories.create({
      text: 'Climbing Essentials',
      path: '/climb/essentials',
      categoryId: 2,
      id: 15
    }),
    PageLevelCategories.create({
      text: 'Climbing Hardware',
      path: '/climb/hardware',
      categoryId: 2,
      id: 16
    }),
    PageLevelCategories.create({
      text: 'Mountaineering',
      path: '/climb/mountaineering',
      categoryId: 2,
      id: 17
    }),
    PageLevelCategories.create({
      text: 'Climbing Clothing',
      path: '/climb/clothing',
      categoryId: 2,
      id: 18
    }),
    PageLevelCategories.create({
      text: 'Bikes & Frames',
      path: '/bike/bikes-frames',
      categoryId: 3,
      id: 19
    }),
    PageLevelCategories.create({
      text: 'Bike Helmets',
      path: '/bike/helmets',
      categoryId: 3,
      id: 20
    }),
    PageLevelCategories.create({
      text: 'Biking Shoes',
      path: '/bike/shoes',
      categoryId: 3,
      id: 21
    }),
    PageLevelCategories.create({
      text: 'Biking Clothing',
      path: '/bike/clothing',
      categoryId: 3,
      id: 22
    }),
    PageLevelCategories.create({
      text: 'Bike Accessories',
      path: '/bike/accessories',
      categoryId: 3,
      id: 23
    }),
    PageLevelCategories.create({
      text: 'Bike Racks',
      path: '/bike/bike-racks',
      categoryId: 3,
      id: 24
    }),
    PageLevelCategories.create({
      text: 'Bike Components',
      path: '/bike/bike-components',
      categoryId: 3,
      id: 25
    }),
    PageLevelCategories.create({
      text: 'Tools & Maintenance',
      path: '/bike/tools-maintenance',
      categoryId: 3,
      id: 26
    }),
    PageLevelCategories.create({
      text: 'Kayak',
      path: '/paddle/kayak',
      categoryId: 4,
      id: 27
    }),
    PageLevelCategories.create({
      text: 'Canoe',
      path: '/paddle/canoe',
      categoryId: 4,
      id: 28
    }),
    PageLevelCategories.create({
      text: 'Paddle Boarding',
      path: '/paddle/paddle-boarding',
      categoryId: 4,
      id: 29
    }),
    PageLevelCategories.create({
      text: 'Rafting',
      path: '/paddle/rafting',
      categoryId: 4,
      id: 30
    }),
    PageLevelCategories.create({
      text: 'PFDs',
      path: '/paddle/pfds',
      categoryId: 4,
      id: 31
    }),
    PageLevelCategories.create({
      text: 'Paddle Clothing',
      path: '/paddle/clothing',
      categoryId: 4,
      id: 32
    }),
    PageLevelCategories.create({
      text: 'Paddle Footwear',
      path: '/paddle/footwear',
      categoryId: 4,
      id: 33
    }),
    PageLevelCategories.create({
      text: 'Bags & Cases',
      path: '/paddle/bags-cases',
      categoryId: 4,
      id: 34
    }),
    PageLevelCategories.create({
      text: 'Paddle Accessories',
      path: '/paddle/accessories',
      categoryId: 4,
      id: 35
    }),
    PageLevelCategories.create({
      text: 'Paddle Racks',
      path: '/paddle/racks',
      categoryId: 4,
      id: 36
    }),
    PageLevelCategories.create({
      text: "Men's Running Shoes",
      path: '/run/mens-shoes',
      categoryId: 5,
      id: 37
    }),
    PageLevelCategories.create({
      text: "Womens's Running Shoes",
      path: '/run/womens-shoes',
      categoryId: 5,
      id: 38
    }),
    PageLevelCategories.create({
      text: "Men's Running Clothing",
      path: '/run/mens-clothing',
      categoryId: 5,
      id: 39
    }),
    PageLevelCategories.create({
      text: "Womens's Running Clothing",
      path: '/run/womens-clothing',
      categoryId: 5,
      id: 40
    }),
    PageLevelCategories.create({
      text: 'Injury Prevention & Recovery',
      path: '/run/injury-recovery',
      categoryId: 5,
      id: 41
    }),
    PageLevelCategories.create({
      text: 'Running Packs',
      path: '/run/packs',
      categoryId: 5,
      id: 42
    }),
    PageLevelCategories.create({
      text: 'Running Accessories',
      path: '/run/accessories',
      categoryId: 5,
      id: 43
    }),
    PageLevelCategories.create({
      text: 'Ski',
      path: '/snow/ski',
      categoryId: 6,
      id: 44
    }),
    PageLevelCategories.create({
      text: 'Snowboard',
      path: '/snow/snowboard',
      categoryId: 6,
      id: 45
    }),
    PageLevelCategories.create({
      text: 'Snowshoe',
      path: '/snow/snowshoe',
      categoryId: 6,
      id: 46
    }),
    PageLevelCategories.create({
      text: 'Snow Clothing',
      path: '/snow/clothing',
      categoryId: 6,
      id: 47
    }),
    PageLevelCategories.create({
      text: 'Snow Accessories',
      path: '/snow/accessories',
      categoryId: 6,
      id: 48
    }),
    PageLevelCategories.create({
      text: 'Avalanche Safety Gear',
      path: '/snow/avalanche',
      categoryId: 6,
      id: 49
    }),
    PageLevelCategories.create({
      text: 'Rods',
      path: '/fish/rods',
      categoryId: 7,
      id: 50
    }),
    PageLevelCategories.create({
      text: 'Reels & Spools',
      path: '/fish/reels-spools',
      categoryId: 7,
      id: 51
    }),
    PageLevelCategories.create({
      text: 'Wading',
      path: '/fish/wading',
      categoryId: 7,
      id: 52
    }),
    PageLevelCategories.create({
      text: 'Flies',
      path: '/fish/flies',
      categoryId: 7,
      id: 53
    }),
    PageLevelCategories.create({
      text: 'Fishing Essentials',
      path: '/fish/essentials',
      categoryId: 7,
      id: 54
    }),
    PageLevelCategories.create({
      text: 'Fishing Watercraft',
      path: '/fish/watercraft',
      categoryId: 7,
      id: 55
    }),
    PageLevelCategories.create({
      text: 'Storage & Transportation',
      path: '/fish/storage-transportation',
      categoryId: 7,
      id: 56
    }),
    PageLevelCategories.create({
      text: 'Fishing Clothing & Accessories',
      path: '/fish/clothing-accessories',
      categoryId: 7,
      id: 57
    }),
    PageLevelCategories.create({
      text: 'Clothing',
      path: '/men/clothing',
      categoryId: 8,
      id: 58
    }),
    PageLevelCategories.create({
      text: 'Footwear',
      path: '/men/footwear',
      categoryId: 8,
      id: 59
    }),
    PageLevelCategories.create({
      text: 'Accessories',
      path: '/men/accessories',
      categoryId: 8,
      id: 60
    }),
    PageLevelCategories.create({
      text: 'Clothing',
      path: '/women/clothing',
      categoryId: 9,
      id: 61
    }),
    PageLevelCategories.create({
      text: 'Footwear',
      path: '/women/footwear',
      categoryId: 9,
      id: 62
    }),
    PageLevelCategories.create({
      text: 'Accessories',
      path: '/women/accessories',
      categoryId: 9,
      id: 63
    }),
    PageLevelCategories.create({
      text: 'Clothing',
      path: '/kids/clothing',
      categoryId: 10,
      id: 64
    }),
    PageLevelCategories.create({
      text: 'Footwear',
      path: '/kids/footwear',
      categoryId: 10,
      id: 65
    }),
    PageLevelCategories.create({
      text: 'Accessories',
      path: '/kids/accessories',
      categoryId: 10,
      id: 66
    }),
    PageLevelCategories.create({
      text: 'Yoga',
      path: '/more/yoga',
      categoryId: 11,
      id: 67
    }),
    PageLevelCategories.create({
      text: 'Travel',
      path: '/more/travel',
      categoryId: 11,
      id: 68
    }),
    PageLevelCategories.create({
      text: 'Dog Gear',
      path: '/more/dog',
      categoryId: 11,
      id: 69
    }),
    PageLevelCategories.create({
      text: 'Books & Maps',
      path: '/more/books-maps',
      categoryId: 11,
      id: 70
    })
  ])

  console.log(`seeded ${pageLevelCategories.length} categories`)

  const subCategories = await Promise.all([
    SubCategories.create({
      text: 'Backpacking',
      path: '/camp-hike/packs/backpacking',
      pageLelveCategoryId: 1,
      id: 1
    }),
    SubCategories.create({
      text: 'Daypacks',
      path: '/camp-hike/packs/daypacks',
      pageLelveCategoryId: 1,
      id: 2
    }),
    SubCategories.create({
      text: 'Hydration Packs',
      path: '/camp-hike/packs/hydration-packs',
      pageLelveCategoryId: 1,
      id: 3
    }),
    SubCategories.create({
      text: 'Baby Carriers',
      path: '/camp-hike/packs/baby-carriers',
      pageLelveCategoryId: 1,
      id: 4
    }),
    SubCategories.create({
      text: 'Waist Packs',
      path: '/camp-hike/packs/waist-packs',
      pageLelveCategoryId: 1,
      id: 5
    }),
    SubCategories.create({
      text: '3-Season Tents',
      path: '/camp-hike/tents/3-season-tents',
      pageLelveCategoryId: 2,
      id: 6
    }),
    SubCategories.create({
      text: '4-Season Tents',
      path: '/camp-hike/tents/4-season-tents',
      pageLelveCategoryId: 2,
      id: 7
    }),
    SubCategories.create({
      text: 'Rooftop Tents',
      path: '/camp-hike/tents/rooftop',
      pageLelveCategoryId: 2,
      id: 8
    }),
    SubCategories.create({
      text: 'Shelters',
      path: '/camp-hike/tents/shelters',
      pageLelveCategoryId: 2,
      id: 9
    }),
    SubCategories.create({
      text: 'Bivys',
      path: '/camp-hike/tents/bivys',
      pageLelveCategoryId: 2,
      id: 10
    }),
    SubCategories.create({
      text: 'Accessories & Repair',
      path: '/camp-hike/tents/accessories-repair',
      pageLelveCategoryId: 2,
      id: 11
    }),
    SubCategories.create({
      text: 'Bags',
      path: '/camp-hike/sleeping/bags',
      pageLelveCategoryId: 3,
      id: 12
    }),
    SubCategories.create({
      text: 'Liners',
      path: '/camp-hike/sleeping/liners',
      pageLelveCategoryId: 3,
      id: 13
    }),
    SubCategories.create({
      text: 'Pads',
      path: '/camp-hike/sleeping/pads',
      pageLelveCategoryId: 3,
      id: 14
    }),
    SubCategories.create({
      text: 'Hammocks',
      path: '/camp-hike/sleeping/hammocks',
      pageLelveCategoryId: 3,
      id: 15
    }),
    SubCategories.create({
      text: 'Cots',
      path: '/camp-hike/sleeping/cots',
      pageLelveCategoryId: 3,
      id: 16
    }),
    SubCategories.create({
      text: 'Pillows',
      path: '/camp-hike/sleeping/pillows',
      pageLelveCategoryId: 3,
      id: 17
    }),
    SubCategories.create({
      text: 'Blankets',
      path: '/camp-hike/sleeping/blankets',
      pageLelveCategoryId: 3,
      id: 18
    }),
    SubCategories.create({
      text: 'Stoves & Grills',
      path: '/camp-hike/kitchen/stoves-grills',
      pageLelveCategoryId: 4,
      id: 19
    }),
    SubCategories.create({
      text: 'Cookware',
      path: '/camp-hike/kitchen/cookware',
      pageLelveCategoryId: 4,
      id: 20
    }),
    SubCategories.create({
      text: 'Dinnerware',
      path: '/camp-hike/kitchen/dinnerware',
      pageLelveCategoryId: 4,
      id: 21
    }),
    SubCategories.create({
      text: 'Cups, Mugs & Flasks',
      path: '/camp-hike/kitchen/cups-mugs-flasks',
      pageLelveCategoryId: 4,
      id: 22
    }),
    SubCategories.create({
      text: 'Coffee & Tea',
      path: '/camp-hike/kitchen/coffee-tea',
      pageLelveCategoryId: 4,
      id: 23
    }),
    SubCategories.create({
      text: 'Utensils',
      path: '/camp-hike/kitchen/utensils',
      pageLelveCategoryId: 4,
      id: 24
    }),
    SubCategories.create({
      text: 'Food',
      path: '/camp-hike/kitchen/food',
      pageLelveCategoryId: 4,
      id: 25
    }),
    SubCategories.create({
      text: 'Coolers',
      path: '/camp-hike/kitchen/coolers',
      pageLelveCategoryId: 4,
      id: 26
    }),
    SubCategories.create({
      text: 'Accessories',
      path: '/camp-hike/kitchen/accessories',
      pageLelveCategoryId: 4,
      id: 27
    }),
    SubCategories.create({
      text: 'Chairs',
      path: '/camp-hike/furniture/chairs',
      pageLelveCategoryId: 5,
      id: 28
    }),
    SubCategories.create({
      text: 'Tables',
      path: '/camp-hike/furniture/tables',
      pageLelveCategoryId: 5,
      id: 29
    }),
    SubCategories.create({
      text: 'Hammocks',
      path: '/camp-hike/furniture/hammocks',
      pageLelveCategoryId: 5,
      id: 30
    }),
    SubCategories.create({
      text: 'Cots',
      path: '/camp-hike/furniture/cots',
      pageLelveCategoryId: 5,
      id: 31
    }),
    SubCategories.create({
      text: 'Water Bottles',
      path: '/camp-hike/hydration/water-bottles',
      pageLelveCategoryId: 6,
      id: 32
    }),
    SubCategories.create({
      text: 'Filters & Purifiers',
      path: '/camp-hike/hydration/filters',
      pageLelveCategoryId: 6,
      id: 33
    }),
    SubCategories.create({
      text: 'Reservoirs',
      path: '/camp-hike/hydration/reservoirs',
      pageLelveCategoryId: 6,
      id: 67
    }),
    SubCategories.create({
      text: 'Hydration Packs',
      path: '/camp-hike/hydration/packs',
      pageLelveCategoryId: 6,
      id: 34
    }),
    SubCategories.create({
      text: 'Headlamps',
      path: '/camp-hike/lighting/headlamps',
      pageLelveCategoryId: 7,
      id: 35
    }),
    SubCategories.create({
      text: 'Lanterns',
      path: '/camp-hike/lighting/lanterns',
      pageLelveCategoryId: 7,
      id: 36
    }),
    SubCategories.create({
      text: 'Flashlights',
      path: '/camp-hike/lighting/flashlights',
      pageLelveCategoryId: 7,
      id: 37
    }),
    SubCategories.create({
      text: 'Batteries & Solar',
      path: '/camp-hike/lighting/batteries-solar',
      pageLelveCategoryId: 7,
      id: 38
    }),
    SubCategories.create({
      text: 'GPS',
      path: '/camp-hike/navigation/gps',
      pageLelveCategoryId: 8,
      id: 39
    }),
    SubCategories.create({
      text: 'Compasses',
      path: '/camp-hike/navigation/compasses',
      pageLelveCategoryId: 8,
      id: 40
    }),
    SubCategories.create({
      text: 'Binoculars',
      path: '/camp-hike/navigation/binoculars',
      pageLelveCategoryId: 8,
      id: 41
    }),
    SubCategories.create({
      text: 'Maps',
      path: '/camp-hike/navigation/maps',
      pageLelveCategoryId: 8,
      id: 42
    }),
    SubCategories.create({
      text: 'Trekking Poles',
      path: '/camp-hike/essentials/trekking-poles',
      pageLelveCategoryId: 9,
      id: 43
    }),
    SubCategories.create({
      text: 'Knives & Multi-Tools',
      path: '/camp-hike/essentials/knives-multitools',
      pageLelveCategoryId: 9,
      id: 44
    }),
    SubCategories.create({
      text: 'Saws & Axes',
      path: '/camp-hike/essentials/saws-axes',
      pageLelveCategoryId: 9,
      id: 45
    }),
    SubCategories.create({
      text: 'Books & Games',
      path: '/camp-hike/essentials/books-games',
      pageLelveCategoryId: 9,
      id: 46
    }),
    SubCategories.create({
      text: 'First Aid',
      path: '/camp-hike/essentials/first-aid',
      pageLelveCategoryId: 9,
      id: 47
    }),
    SubCategories.create({
      text: 'Showers',
      path: '/camp-hike/essentials/showers',
      pageLelveCategoryId: 9,
      id: 48
    }),
    SubCategories.create({
      text: 'Towels',
      path: '/camp-hike/essentials/towels',
      pageLelveCategoryId: 9,
      id: 49
    }),
    SubCategories.create({
      text: "Men's",
      path: '/camp-hike/footwear/mens',
      pageLelveCategoryId: 10,
      id: 50
    }),
    SubCategories.create({
      text: "Women's",
      path: '/camp-hike/footwear/womens',
      pageLelveCategoryId: 10,
      id: 51
    }),
    SubCategories.create({
      text: "Kids'",
      path: '/camp-hike/footwear/kids',
      pageLelveCategoryId: 10,
      id: 52
    }),
    SubCategories.create({
      text: 'Hiking Socks',
      path: '/camp-hike/footwear/socks',
      pageLelveCategoryId: 10,
      id: 53
    }),
    SubCategories.create({
      text: 'Gaiters',
      path: '/camp-hike/footwear/gaiters',
      pageLelveCategoryId: 10,
      id: 54
    }),
    SubCategories.create({
      text: 'Jackets',
      path: '/camp-hike/clothing/jackets',
      pageLelveCategoryId: 11,
      id: 55
    }),
    SubCategories.create({
      text: 'Shirts',
      path: '/camp-hike/clothing/shirts',
      pageLelveCategoryId: 11,
      id: 56
    }),
    SubCategories.create({
      text: 'Pants',
      path: '/camp-hike/clothing/pants',
      pageLelveCategoryId: 11,
      id: 57
    }),
    SubCategories.create({
      text: 'Shorts',
      path: '/camp-hike/clothing/shorts',
      pageLelveCategoryId: 11,
      id: 58
    }),
    SubCategories.create({
      text: 'Hats & Accessories',
      path: '/camp-hike/clothing/hats-accessories',
      pageLelveCategoryId: 11,
      id: 59
    }),
    SubCategories.create({
      text: 'Sunglasses',
      path: '/camp-hike/clothing/sunglasses',
      pageLelveCategoryId: 11,
      id: 60
    }),
    SubCategories.create({
      text: 'First Aid',
      path: '/camp-hike/health-safety/first-aid',
      pageLelveCategoryId: 12,
      id: 61
    }),
    SubCategories.create({
      text: 'Emergency & Survival',
      path: '/camp-hike/health-safety/emergency-survival',
      pageLelveCategoryId: 12,
      id: 62
    }),
    SubCategories.create({
      text: 'Camp Bathroom',
      path: '/camp-hike/health-safety/bathroom',
      pageLelveCategoryId: 12,
      id: 63
    }),
    SubCategories.create({
      text: 'Bear Safety',
      path: '/camp-hike/health-safety/bear-safety',
      pageLelveCategoryId: 12,
      id: 64
    }),
    SubCategories.create({
      text: 'Fire Safety',
      path: '/camp-hike/health-safety/fire-safety',
      pageLelveCategoryId: 12,
      id: 65
    }),
    SubCategories.create({
      text: 'Sun & Bug Protection',
      path: '/camp-hike/health-safety/sun-bug',
      pageLelveCategoryId: 12,
      id: 66
    })
  ])

  console.log(`seeded ${subCategories.length} categories`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
