import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { AppSettings } from '../../AppSettings';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  // const response = await Axios.get(`${AppSettings.ApiBaseUrl}/categories`);
  var data = [
    {
      "id": 897,
      "name": "Girls Uniform",
      "description": "<p>For students in Kindergarten to Year 6</p>"
    },
    {
      "id": 898,
      "name": "Boys Uniform",
      "description": "<p>For students in Kindergarten to Year 6</p>"
    },
    {
      "id": 1142,
      "name": "Hats",
      "description": "<p>For students in Preschool to Year 6</p>"
    },
    {
      "id": 1160,
      "name": "Sports Uniform",
      "description": "<p>For Preschool students only</p>"
    },
    {
      "id": 1177,
      "name": "Year 6 Uniform",
      "description": "<p>Year 6 uniform</p>"
    },
    {
      "id": 1267,
      "name": "Extra Curriculars",
      "description": ""
    },
    {
      "id": 1279,
      "name": "Uniform Packs",
      "description": ""
    },
    {
      "id": 1287,
      "name": "Prep Uniform",
      "description": ""
    },
    {
      "id": 1288,
      "name": "Accessories",
      "description": ""
    },
    {
      "id": 1289,
      "name": "Winter Uniform",
      "description": ""
    },
    {
      "id": 1290,
      "name": "Summer Uniform",
      "description": ""
    },
    {
      "id": 1291,
      "name": "Hospitality Uniform",
      "description": ""
    },
    {
      "id": 1293,
      "name": "Art Class Uniform",
      "description": ""
    }
  ];
  return data;
  //return response.data;
});

export const fetchProductData = createAsyncThunk('data/fetchProduct', async () => {
  // const response = await Axios.get(`${AppSettings.ApiBaseUrl}/products`);
  let data = [
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3680,
      "name": "Unisex Rain Parker",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_School Rain Jacket.png",
      "price": 40.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3681,
      "name": "Leather School Shoes",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Shoes.png",
      "price": 85.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3682,
      "name": "School Captain Pin",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Captain Pin.png",
      "price": 5.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3683,
      "name": "Girls Dress",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Dress.png",
      "price": 40.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3684,
      "name": "School Coat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Coat.png",
      "price": 60.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 897,
        "name": "Girls Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 3684,
      "name": "School Coat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Coat.png",
      "price": 60.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3682,
      "name": "School Captain Pin",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Captain Pin.png",
      "price": 5.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3247,
      "name": "Unisex Polo - Preschool",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 10.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 75,
              "name": "XXS"
            },
            {
              "attributeId": 60,
              "name": "XS"
            },
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 898,
        "name": "Boys Uniform",
        "description": "<p>For students in Kindergarten to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 1142,
        "name": "Hats",
        "description": "<p>For students in Preschool to Year 6</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 1160,
        "name": "Sports Uniform",
        "description": "<p>For Preschool students only</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3682,
      "name": "School Captain Pin",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Captain Pin.png",
      "price": 5.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3684,
      "name": "School Coat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Coat.png",
      "price": 60.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 1177,
        "name": "Year 6 Uniform",
        "description": "<p>Year 6 uniform</p>"
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 1267,
        "name": "Extra Curriculars",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 1279,
        "name": "Uniform Packs",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 1287,
        "name": "Prep Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 1288,
        "name": "Accessories",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 1289,
        "name": "Winter Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 1290,
        "name": "Summer Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 1291,
        "name": "Hospitality Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 3245,
      "name": "Back pack with School Logo",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (10).png",
      "price": 10.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        }
      ]
    },
    {
      "productId": 3489,
      "name": "School Scrunchies",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (4).png",
      "price": 10.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3579,
      "name": "Vocal Ensemble T Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (12).png",
      "price": 10.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3466,
      "name": "Girls Sweater",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (6).png",
      "price": 25.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3485,
      "name": "Sports Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Sports Shirt 1.png",
      "price": 15.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3438,
      "name": "School Hat",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (8).png",
      "price": 1.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            }
          ]
        }
      ]
    },
    {
      "productId": 3455,
      "name": "Socks",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (5).png",
      "price": 15.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": []
    },
    {
      "productId": 3248,
      "name": "Year 6 Shirt",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (11).png",
      "price": 10.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 3263,
      "name": "Drink Bottle",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (2).png",
      "price": 5.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            },
            {
              "attributeId": 7,
              "name": "Green"
            }
          ]
        }
      ]
    },
    {
      "productId": 2497,
      "name": "Polo Shirt - Short Sleeve - Unisex",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1).png",
      "price": 15.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            }
          ]
        }
      ]
    },
    {
      "productId": 3244,
      "name": "Girls Skort",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Skort 1.png",
      "price": 10.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2494,
      "name": "Girls Long Sleeve Blouse with Peter Pan Collar",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Girls Blouse.png",
      "price": 1.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 2,
          "name": "Color",
          "productAttributes": [
            {
              "attributeId": 5,
              "name": "Red"
            },
            {
              "attributeId": 6,
              "name": "Blue"
            }
          ]
        },
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            },
            {
              "attributeId": 90,
              "name": "XXXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2495,
      "name": "Unisex Long Pants",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (1) 1.png",
      "price": 20.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": [
        {
          "attributeCategoryId": 1,
          "name": "Size",
          "productAttributes": [
            {
              "attributeId": 1,
              "name": "S"
            },
            {
              "attributeId": 2,
              "name": "M"
            },
            {
              "attributeId": 3,
              "name": "L"
            },
            {
              "attributeId": 4,
              "name": "XL"
            },
            {
              "attributeId": 46,
              "name": "XXL"
            }
          ]
        }
      ]
    },
    {
      "productId": 2496,
      "name": "Unisex Shorts",
      "imageUrl": "https://www.school24.net.au//uniform_images/85_Parent Portal Mobile Image Template (9).png",
      "price": 10.0000,
      "category": {
        "id": 1293,
        "name": "Art Class Uniform",
        "description": null
      },
      "productAttributeCategories": []
    }
  ];
  return data;
  //return response.data;
});

// export const fetchPOSConfig = createAsyncThunk('data/fetchPosConfig', async () => {
//   try {
//     const response = await Axios.get(`${AppSettings.ApiBaseUrl}/PosConfig`);
//     return response.data;
//   } catch (e) {
//     console.log("error")
//   }

// });