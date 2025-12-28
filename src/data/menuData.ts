// Menu data for Al Diwan Al Yemeni - Hierarchical Structure
export const menuData = {
  mainSections: [
    {
      id: 'qalayat',
      name: {
        en: 'Pancakes Section',
        ar: 'قسم القلايات'
      },
      subcategories: [
        {
          id: 'breakfast',
          name: {
            en: 'Breakfast',
            ar: 'الفطور'
          }
        },
        {
          id: 'fatta',
          name: {
            en: 'Fatta',
            ar: 'الفتة'
          }
        }      
      ]
    },
    {
      id: 'marsa',
      name: {
        en: 'Marsa & Bakery Section',
        ar: 'قسم المرسة والمخبازة'
      },
      subcategories: [
        {
          id: 'baked-goods',
          name: {
            en: 'Baked Goods',
            ar: 'المخبوزات'
          }
        },
        {
          id: 'pancakes',
          name: {
            en: 'Pancakes',
            ar: 'المطبقات'
          }
        }
      ]
    },
    {
      id: 'lunch',
      name: {
        en: 'Lunch Section',
        ar: 'قسم الغداء'
      },
      subcategories: [
        {
          id: 'meats',
          name: {
            en: 'Meats',
            ar: 'اللحوم'
          }
        },
        {
          id: 'chicken',
          name: {
            en: 'Chicken',
            ar: 'الدجاج'
          }
        },
        {
          id: 'grills',
          name: {
            en: 'Grills',
            ar: 'المشويات'
          }
        },
        {
          id: 'stews',
          name: {
            en: 'Stews',
            ar: 'الإيدامات'
          }
        },
        {
          id: 'salads',
          name: {
            en: 'Salads',
            ar: 'السلطات'
          }
        },
        {
          id: 'appetizers',
          name: {
            en: 'Appetizers',
            ar: 'المقبلات'
          }
        }
      ]
    },
    {
      id: 'desserts-section',
      name: {
        en: 'Desserts Section',
        ar: 'قسم الحلويات'
      },
      subcategories: [
        {
          id: 'masoob',
          name: {
            en: 'Masoob',
            ar: 'المعصوب'
          }
        },
        {
          id: 'areeka',
          name: {
            en: 'Areeka',
            ar: 'العريكة'
          }
        }
      ]
    },
    {
      id: 'beverages-section',
      name: {
        en: 'Beverages Section',
        ar: 'قسم المشروبات'
      },
      subcategories: [
        {
          id: 'beverages',
          name: {
            en: 'Hot Beverages',
            ar: 'المشروبات'
          }
        },
        {
          id: 'juices',
          name: {
            en: 'Juices',
            ar: 'العصائر'
          }
        }
      ]
    }
  ],
  
  items: {
    // 1. قسم القلايات - 1.1 الفطور
    breakfast: [
      {
        id: 'lahsa-diwan',
        name: {
          en: 'Lahsa Al Diwan',
          ar: 'لحسة الديوان'
        },
        description: {
          en: 'Traditional Yemeni breakfast specialty',
          ar: 'فطور يمني تقليدي مميز'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'sudasi-diwan',
        name: {
          en: 'Sudasi Al Diwan',
          ar: 'سداسي الديوان'
        },
        description: {
          en: 'Special six-item breakfast platter',
          ar: 'طبق فطور خاص من ستة عناصر'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'shakshuka',
        name: {
          en: 'Shakshuka',
          ar: 'شكشوكة'
        },
        description: {
          en: 'Eggs poached in tomato sauce with spices',
          ar: 'بيض مطبوخ في صلصة الطماطم مع التوابل'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'mathloutha',
        name: {
          en: 'Mathloutha',
          ar: 'مثلوثة'
        },
        description: {
          en: 'Traditional Yemeni dish with special sauce',
          ar: 'طبق يمني تقليدي بصلصة خاصة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'fasolia-nashif',
        name: {
          en: 'Plain White Beans',
          ar: 'فاصولياء ناشف'
        },
        description: {
          en: 'Dry white beans dish',
          ar: 'طبق الفاصولياء البيضاء الناشفة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'fasolia-egg',
        name: {
          en: 'White Beans with Eggs',
          ar: 'فاصولياء مع البيض'
        },
        description: {
          en: 'White beans cooked with eggs',
          ar: 'فاصولياء بيضاء مطبوخة مع البيض'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'fasolia-cheese',
        name: {
          en: 'White Beans with Cheese',
          ar: 'فاصولياء مع الجبن'
        },
        description: {
          en: 'White beans with melted cheese',
          ar: 'فاصولياء بيضاء مع الجبن المذاب'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'peas-plain',
        name: {
          en: 'Plain Peas',
          ar: 'بازيلا سادة'
        },
        description: {
          en: 'Simple cooked peas',
          ar: 'بازيلا مطبوخة بسيطة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'peas-egg',
        name: {
          en: 'Peas with Eggs',
          ar: 'بازيلا مع البيض'
        },
        description: {
          en: 'Peas cooked with eggs',
          ar: 'بازيلا مطبوخة مع البيض'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'peas-tuna',
        name: {
          en: 'Peas with Tuna',
          ar: 'بازيلا مع التونة'
        },
        description: {
          en: 'Peas with tuna fish',
          ar: 'بازيلا مع سمك التونة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'mix-breakfast',
        name: {
          en: 'Mixed',
          ar: 'مكس'
        },
        description: {
          en: 'Mixed breakfast platter',
          ar: 'طبق فطور مشكل'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'ful-plain',
        name: {
          en: 'فول سادة',
          ar: 'فول سادة'
        },
        description: {
          en: 'Traditional fava beans',
          ar: 'فول مدمس تقليدي'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'ful-cheese',
        name: {
          en: 'Fava Beans with Cheese',
          ar: 'فول مع الجبن'
        },
        description: {
          en: 'Fava beans with cheese',
          ar: 'فول مدمس مع الجبن'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'ful-fasolia',
        name: {
          en: 'Fava Beans with White Beans',
          ar: 'فول مع الفاصولياء'
        },
        description: {
          en: 'Fava beans mixed with white beans',
          ar: 'فول مدمس ممزوج مع الفاصولياء البيضاء'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'liver-plain',
        name: {
          en: 'Plain Local Liver',
          ar: 'كبدة بلدي سادة'
        },
        description: {
          en: 'Traditional local liver dish',
          ar: 'طبق كبدة بلدي تقليدي'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'maqalqal-meat',
        name: {
          en: 'Meat Maqalqal',
          ar: 'مقلقل لحم'
        },
        description: {
          en: 'Sautéed meat with vegetables',
          ar: 'لحم مقلي مع الخضار'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'maqalqal-cheese',
        name: {
          en: 'Maqalqal with Cheese',
          ar: 'مقلقل مع الجبن'
        },
        description: {
          en: 'Sautéed dish with melted cheese',
          ar: 'طبق مقلي مع الجبن المذاب'
        },
        price: 0,
        image: '/image/default.webp'
      }
    ],
    
    // 1. قسم القلايات - 1.2 الفتة
    fatta: [
      {
        id: 'fatta-plain',
        name: {
          en: 'Plain Fatta',
          ar: 'فتة سادة'
        },
        description: {
          en: 'Traditional bread pudding with broth',
          ar: 'فتة تقليدية بالمرق'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'fatta-diwan',
        name: {
          en: 'Fatta Al Diwan',
          ar: 'فتة الديوان'
        },
        description: {
          en: 'Special Diwan fatta with extras',
          ar: 'فتة الديوان الخاصة مع إضافات'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'fatta-dates',
        name: {
          en: 'Fatta with Dates',
          ar: 'فتة بالتمر'
        },
        description: {
          en: 'Sweet fatta with dates',
          ar: 'فتة حلوة بالتمر'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'fatta-cream',
        name: {
          en: 'Fatta with Cream',
          ar: 'فتة قشطة'
        },
        description: {
          en: 'Fatta topped with fresh cream',
          ar: 'فتة مزينة بالقشطة الطازجة'
        },
        price: 0,
        image: '/image/default.webp'
      }
    ],
    
    // 2. قسم المرسة والمخبازة - 2.1 المخبوزات
    'baked-goods': [
      {
        id: 'mulawah-double',
        name: {
          en: 'Double Mulawah',
          ar: 'ملوح دبل'
        },
        description: {
          en: 'Double layered Yemeni flatbread',
          ar: 'خبز يمني مسطح مضاعف'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'mulawah-regular',
        name: {
          en: 'Regular Mulawah',
          ar: 'ملوح عادي'
        },
        description: {
          en: 'Traditional Yemeni flatbread',
          ar: 'خبز يمني مسطح تقليدي'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'mulawah-single',
        name: {
          en: 'Single Mulawah',
          ar: 'ملوح سنجل'
        },
        description: {
          en: 'Single layer Yemeni flatbread',
          ar: 'خبز يمني مسطح طبقة واحدة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'rashosh',
        name: {
          en: 'Rashosh',
          ar: 'راشوش'
        },
        description: {
          en: 'Traditional Yemeni bread dish',
          ar: 'طبق خبز يمني تقليدي'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'rashosh-egg',
        name: {
          en: 'Rashosh with Egg',
          ar: 'راشوش مع بيض'
        },
        description: {
          en: 'Rashosh bread with eggs',
          ar: 'راشوش مع البيض'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'rashosh-cheese',
        name: {
          en: 'Rashosh with Cheese',
          ar: 'راشوش مع الجبنة'
        },
        description: {
          en: 'Rashosh bread with melted cheese',
          ar: 'راشوش مع الجبنة المذابة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'triangle-bread',
        name: {
          en: 'Triangle Bread',
          ar: 'مثلث'
        },
        description: {
          en: 'Triangle-shaped flatbread',
          ar: 'خبز مسطح بشكل مثلث'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'square-bread',
        name: {
          en: 'Square Bread',
          ar: 'مربع'
        },
        description: {
          en: 'Square-shaped flatbread',
          ar: 'خبز مسطح بشكل مربع'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'hexagon-bread',
        name: {
          en: 'Hexagon Bread',
          ar: 'سداسي'
        },
        description: {
          en: 'Hexagon-shaped flatbread',
          ar: 'خبز مسطح بشكل سداسي'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'ratab',
        name: {
          en: 'Ratab',
          ar: 'رطب'
        },
        description: {
          en: 'Soft Yemeni bread',
          ar: 'خبز يمني رطب'
        },
        price: 0,
        image: '/image/default.webp'
      }
    ],
    
    // 2. قسم المرسة والمخبازة - 2.2 المطبقات
    pancakes: [
      {
        id: 'mutabbaq-cheese-sweet',
        name: {
          en: 'Sweet Cheese Mutabbaq',
          ar: 'مطبق حلو بالجبنة'
        },
        description: {
          en: 'Sweet pancake with cheese filling',
          ar: 'مطبق حلو محشو بالجبنة'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-21 at 19.06.54_9dc4d41e.jpg',
        popular: true
      },
      {
        id: 'mutabbaq-egg',
        name: {
          en: 'Egg Mutabbaq',
          ar: 'مطبق بالبيض'
        },
        description: {
          en: 'Pancake filled with eggs',
          ar: 'مطبق محشو بالبيض'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'mutabbaq-salty',
        name: {
          en: 'Salty Mutabbaq',
          ar: 'مطبق مالح'
        },
        description: {
          en: 'Savory pancake',
          ar: 'مطبق مالح'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-21 at 19.06.55_e38cdbe3.jpg'
      },
      {
        id: 'mutabbaq-meat',
        name: {
          en: 'Meat Mutabbaq',
          ar: 'مطبق باللحم'
        },
        description: {
          en: 'Pancake filled with spiced meat',
          ar: 'مطبق محشو باللحم المتبل'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-21 at 19.06.56_363855ea.jpg',
        popular: true
      },
      {
        id: 'mutabbaq-cheese-meat',
        name: {
          en: 'Cheese & Meat Mutabbaq',
          ar: 'مطبق جبنة مع اللحم'
        },
        description: {
          en: 'Pancake with cheese and meat filling',
          ar: 'مطبق محشو بالجبنة واللحم'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-21 at 19.06.56_363855ea.jpg'
      },
      {
        id: 'mutabbaq-diwan',
        name: {
          en: 'Diwan Special Mutabbaq',
          ar: 'مطبق الديوان'
        },
        description: {
          en: 'House special pancake with mixed fillings',
          ar: 'مطبق خاص بالديوان بحشوات متنوعة'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'mutabbaq-tuna',
        name: {
          en: 'Tuna Mutabbaq',
          ar: 'مطبق بالتونة'
        },
        description: {
          en: 'Pancake filled with tuna',
          ar: 'مطبق محشو بالتونة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'mutabbaq-spicy',
        name: {
          en: 'Spicy Mutabbaq',
          ar: 'مطبق سبايسي'
        },
        description: {
          en: 'Spicy pancake with hot filling',
          ar: 'مطبق حار بحشوة حارة'
        },
        price: 0,
        image: '/image/default.webp',
        // spicy: 2
      },
      {
        id: 'mutabbaq-cream-sweet',
        name: {
          en: 'Sweet Cream Mutabbaq',
          ar: 'مطبق حلو بالقشطة'
        },
        description: {
          en: 'Sweet pancake with fresh cream',
          ar: 'مطبق حلو بالقشطة الطازجة'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-21 at 19.06.55_e71ef256.jpg'
      },
      {
        id: 'mutabbaq-banana-sweet',
        name: {
          en: 'Sweet Banana Mutabbaq',
          ar: 'مطبق حلو بالموز'
        },
        description: {
          en: 'Sweet pancake with banana filling',
          ar: 'مطبق حلو محشو بالموز'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-21 at 19.06.54_9dc4d41e.jpg'
      }
    ],
    
    // 3. قسم الغداء - 3.1 اللحوم
    meats: [
      {
        id: 'mandi-lamb',
        name: {
          en: 'Lamb Mandi',
          ar: 'مندي لحم'
        },
        description: {
          en: 'Traditional Yemeni spiced lamb with aromatic rice',
          ar: 'لحم الضأن اليمني التقليدي المتبل مع أرز عطري'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.19_87ec1b72.jpg',
        popular: true
      },
      {
        id: 'zurbian-lamb',
        name: {
          en: 'Lamb Zurbian',
          ar: 'زربيان لحم'
        },
        description: {
          en: 'Spiced lamb with special Yemeni rice',
          ar: 'لحم ضأن متبل مع أرز يمني خاص'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-19 at 23.22.15_f41da439.jpg',
        popular: true
      },
      {
        id: 'bukhari-lamb',
        name: {
          en: 'البخاري لحم',
          ar: 'البخاري لحم'
        },
        description: {
          en: 'Lamb with Bukhari-style rice',
          ar: 'لحم مع أرز البخاري'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'zarb-lamb',
        name: {
          en: 'Lamb Zarb',
          ar: 'الزرب لحم'
        },
        description: {
          en: 'Underground cooked lamb',
          ar: 'لحم مطبوخ في الزرب'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'biryani-lamb',
        name: {
          en: 'Lamb Biryani',
          ar: 'البرياني لحم'
        },
        description: {
          en: 'Aromatic lamb biryani',
          ar: 'برياني لحم عطري'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-19 at 23.22.14_f79ffb9f.jpg'
      },
      {
        id: 'madhghoot-lamb',
        name: {
          en: 'Lamb Madhghoot',
          ar: 'مضغوط لحم'
        },
        description: {
          en: 'Pressed lamb with rice',
          ar: 'لحم مضغوط مع الأرز'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-19 at 12.35.10_ad98d381.jpg'
      },
      {
        id: 'haneeth-lamb',
        name: {
          en: 'Lamb Haneeth',
          ar: 'الحنيذ لحم'
        },
        description: {
          en: 'Slow-roasted lamb',
          ar: 'لحم مشوي ببطء'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-19 at 23.22.13_289a66de.jpg'
      },
      {
        id: 'madfoon-lamb',
        name: {
          en: 'Lamb Madfoon',
          ar: 'المدفون لحم'
        },
        description: {
          en: 'Buried lamb cooked underground',
          ar: 'لحم مدفون مطبوخ تحت الأرض'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'burma-lamb',
        name: {
          en: 'Lamb Burma',
          ar: 'برمة لحم'
        },
        description: {
          en: 'Lamb cooked in clay pot',
          ar: 'لحم مطبوخ في البرمة الفخارية'
        },
        price: 0,
        image: '/image/default.webp'
      }
    ],
    
    // 3. قسم الغداء - 3.2 الدجاج
    chicken: [
      {
        id: 'mandi-chicken',
        name: {
          en: 'Chicken Mandi',
          ar: 'مندي دجاج'
        },
        description: {
          en: 'Tender chicken with aromatic rice',
          ar: 'دجاج طري مع أرز عطري'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.34_f39dd0f3.jpg',
        popular: true
      },
      {
        id: 'zurbian-chicken',
        name: {
          en: 'Chicken Zurbian',
          ar: 'زربيان دجاج'
        },
        description: {
          en: 'Spiced chicken with Yemeni rice',
          ar: 'دجاج متبل مع أرز يمني'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.36_6babfe66.jpg',
        popular: true
      },
      {
        id: 'madhbi-chicken',
        name: {
          en: 'Chicken Madhbi',
          ar: 'مظبي دجاج'
        },
        description: {
          en: 'Grilled chicken',
          ar: 'دجاج مشوي'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.35_84c19327.jpg'
      },
      {
        id: 'zarb-chicken',
        name: {
          en: 'Chicken Zarb',
          ar: 'الزرب دجاج'
        },
        description: {
          en: 'Underground cooked chicken',
          ar: 'دجاج مطبوخ في الزرب'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'biryani-chicken',
        name: {
          en: 'Chicken Biryani',
          ar: 'البرياني دجاج'
        },
        description: {
          en: 'Aromatic chicken biryani',
          ar: 'برياني دجاج عطري'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.36_6babfe66.jpg'
      },
      {
        id: 'madhghoot-chicken',
        name: {
          en: 'Chicken Madhghoot',
          ar: 'مضغوط دجاج'
        },
        description: {
          en: 'Pressed chicken with rice',
          ar: 'دجاج مضغوط مع الأرز'
        },
        price: 0,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.35_29e9c4ff.jpg'
      },
      {
        id: 'haneeth-chicken',
        name: {
          en: 'Chicken Haneeth',
          ar: 'الحنيذ دجاج'
        },
        description: {
          en: 'Slow-roasted chicken',
          ar: 'دجاج مشوي ببطء'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'madfoon-chicken',
        name: {
          en: 'Chicken Madfoon',
          ar: 'المدفون دجاج'
        },
        description: {
          en: 'Buried chicken cooked underground',
          ar: 'دجاج مدفون مطبوخ تحت الأرض'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'burma-chicken',
        name: {
          en: 'Chicken Burma',
          ar: 'برمة دجاج'
        },
        description: {
          en: 'Chicken cooked in clay pot',
          ar: 'دجاج مطبوخ في البرمة الفخارية'
        },
        price: 0,
        image: '/image/default.webp'
      }
    ],
    
    // 3. قسم الغداء - 3.3 المشويات
    grills: [
      {
        id: 'turkish-chicken',
        name: {
          en: 'Turkish Chicken',
          ar: 'دجاج تركي'
        },
        description: {
          en: 'Turkish-style grilled chicken',
          ar: 'دجاج مشوي على الطريقة التركية'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'charcoal-chicken',
        name: {
          en: 'Charcoal Chicken',
          ar: 'دجاج فحم'
        },
        description: {
          en: 'Charcoal grilled chicken',
          ar: 'دجاج مشوي على الفحم'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'grill-chicken',
        name: {
          en: 'Grilled Chicken',
          ar: 'دجاج شواية'
        },
        description: {
          en: 'Classic grilled chicken',
          ar: 'دجاج مشوي كلاسيكي'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'tandoor-fish',
        name: {
          en: 'Tandoor Fish',
          ar: 'سمك تنور'
        },
        description: {
          en: 'Fish cooked in tandoor oven',
          ar: 'سمك مطبوخ في التنور'
        },
        price: 0,
        image: '/image/default.webp'
      }
    ],
    
    // 3. قسم الغداء - 3.4 الإيدامات
    stews: [
      {
        id: 'salta',
        name: {
          en: 'Salta',
          ar: 'سلتة'
        },
        description: {
          en: 'Traditional Yemeni stew',
          ar: 'يخنة يمنية تقليدية'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'fahsa',
        name: {
          en: 'Fahsa',
          ar: 'فحسة'
        },
        description: {
          en: 'Traditional meat stew',
          ar: 'يخنة لحم تقليدية'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'daqqa-meat',
        name: {
          en: 'Meat Daqqa',
          ar: 'دقة لحم'
        },
        description: {
          en: 'Minced meat dish',
          ar: 'طبق لحم مدقوق'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'oqda-meat',
        name: {
          en: 'Meat Oqda',
          ar: 'عقدة لحم'
        },
        description: {
          en: 'Meat stew with vegetables',
          ar: 'يخنة لحم بالخضار'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'oqda-chicken',
        name: {
          en: 'Chicken Oqda',
          ar: 'عقدة دجاج'
        },
        description: {
          en: 'Chicken stew with vegetables',
          ar: 'يخنة دجاج بالخضار'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'bamya',
        name: {
          en: 'Bamya (Okra)',
          ar: 'باميه'
        },
        description: {
          en: 'Okra stew',
          ar: 'يخنة البامية'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'molokhia',
        name: {
          en: 'Molokhia',
          ar: 'ملوخية'
        },
        description: {
          en: 'Jute leaves stew',
          ar: 'يخنة الملوخية'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'mixed-vegetables',
        name: {
          en: 'Mixed Vegetables',
          ar: 'خضار مشكل'
        },
        description: {
          en: 'Mixed vegetable stew',
          ar: 'يخنة خضار مشكلة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'broth-soup',
        name: {
          en: 'Broth Soup',
          ar: 'شوربة مرق'
        },
        description: {
          en: 'Traditional broth soup',
          ar: 'شوربة مرق تقليدية'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'lentil-soup',
        name: {
          en: 'Lentil Soup',
          ar: 'شوربة عدس'
        },
        description: {
          en: 'Traditional lentil soup',
          ar: 'شوربة عدس تقليدية'
        },
        price: 0,
        image: '/image/default.webp'
      }
    ],
    
    // 3. قسم الغداء - 3.5 السلطات    // 3. قسم الغداء - 3.5 السلطات
    salads: [
      {
        id: 'cucumber-yogurt-salad',
        name: {
          en: 'Cucumber Yogurt Salad',
          ar: 'سلطة خيار باللبن'
        },
        description: {
          en: 'Fresh cucumber with yogurt',
          ar: 'خيار طازج مع اللبن'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'tahini-salad',
        name: {
          en: 'Tahini Salad',
          ar: 'سلطة طحينية'
        },
        description: {
          en: 'Salad with tahini dressing',
          ar: 'سلطة بصلصة الطحينة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'arabic-salad',
        name: {
          en: 'Arabic Salad',
          ar: 'سلطة عربية'
        },
        description: {
          en: 'Traditional Arabic salad',
          ar: 'سلطة عربية تقليدية'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'fattoush',
        name: {
          en: 'Fattoush',
          ar: 'سلطة فتوش'
        },
        description: {
          en: 'Crispy bread salad',
          ar: 'سلطة الخبز المقرمش'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'arugula-salad',
        name: {
          en: 'Arugula Salad',
          ar: 'سلطة جرجير'
        },
        description: {
          en: 'Fresh arugula salad',
          ar: 'سلطة الجرجير الطازجة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'sahawiq-cheese',
        name: {
          en: 'Sahawiq with Cheese',
          ar: 'سحاوق بالجبن'
        },
        description: {
          en: 'Spicy sauce with cheese',
          ar: 'صلصة حارة بالجبن'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'greek-salad',
        name: {
          en: 'Greek Salad',
          ar: 'سلطة يونانية'
        },
        description: {
          en: 'Traditional Greek salad',
          ar: 'سلطة يونانية تقليدية'
        },
        price: 0,
        image: '/image/default.webp'
      }
    ],
    
    // 3. قسم الغداء - 3.6 المقبلات
    appetizers: [
      {
        id: 'sambusa-chicken',
        name: {
          en: 'Chicken Sambusa',
          ar: 'سمبوسه دجاج'
        },
        description: {
          en: 'Crispy pastry with chicken filling',
          ar: 'معجنات مقرمشة محشوة بالدجاج'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'sambusa-meat',
        name: {
          en: 'Meat Sambusa',
          ar: 'سمبوسه لحم'
        },
        description: {
          en: 'Crispy pastry with meat filling',
          ar: 'معجنات مقرمشة محشوة باللحم'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'sambusa-vegetable',
        name: {
          en: 'Vegetable Sambusa',
          ar: 'سمبوسه الخضار'
        },
        description: {
          en: 'Crispy pastry with vegetable filling',
          ar: 'معجنات مقرمشة محشوة بالخضار'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'sambusa-cheese',
        name: {
          en: 'Cheese Sambusa',
          ar: 'سمبوسه جبن'
        },
        description: {
          en: 'Crispy pastry with cheese filling',
          ar: 'معجنات مقرمشة محشوة بالجبن'
        },
        price: 0,
        image: '/image/default.webp'
      }
    ],
    
    // 4. قسم الحلويات - 4.1 المعصوب
    masoob: [
      {
        id: 'masoob-diwan',
        name: {
          en: 'Masoob Al Diwan',
          ar: 'معصوب الديوان'
        },
        description: {
          en: 'Special Diwan masoob with banana, bread, cream and honey',
          ar: 'معصوب الديوان الخاص بالموز والخبز والقشطة والعسل'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'masoob-cream-honey',
        name: {
          en: 'Masoob with Cream & Honey',
          ar: 'معصوب قشطة وعسل'
        },
        description: {
          en: 'Traditional masoob with cream and honey',
          ar: 'معصوب تقليدي بالقشطة والعسل'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'masoob-cream',
        name: {
          en: 'Masoob with Cream',
          ar: 'معصوب قشطة'
        },
        description: {
          en: 'Masoob topped with fresh cream',
          ar: 'معصوب مع القشطة الطازجة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'masoob-plain',
        name: {
          en: 'Plain Masoob',
          ar: 'معصوب عادي'
        },
        description: {
          en: 'Traditional plain masoob',
          ar: 'معصوب عادي تقليدي'
        },
        price: 0,
        image: '/image/default.webp'
      }
    ],
    
    // 4. قسم الحلويات - 4.2 العريكة
    areeka: [
      {
        id: 'areeka-diwan',
        name: {
          en: 'Areeka Al Diwan',
          ar: 'عريكة الديوان'
        },
        description: {
          en: 'Special Diwan areeka with dates, cream and honey',
          ar: 'عريكة الديوان الخاصة بالتمر والقشطة والعسل'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'areeka-cream-honey',
        name: {
          en: 'Areeka with Cream & Honey',
          ar: 'عريكة قشطة وعسل'
        },
        description: {
          en: 'Traditional areeka with cream and honey',
          ar: 'عريكة تقليدية بالقشطة والعسل'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'areeka-cream-honey-nuts',
        name: {
          en: 'Areeka with Cream, Honey & Nuts',
          ar: 'عريكة قشطة وعسل ومكسرات'
        },
        description: {
          en: 'Deluxe areeka with cream, honey and mixed nuts',
          ar: 'عريكة فاخرة بالقشطة والعسل والمكسرات'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      }
    ],
    
    // 5. قسم المشروبات - 5.1 المشروبات
    beverages: [
      {
        id: 'water',
        name: {
          en: 'Water',
          ar: 'مياه'
        },
        description: {
          en: 'Bottled water',
          ar: 'مياه معبأة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'tea',
        name: {
          en: 'Tea',
          ar: 'شاي'
        },
        description: {
          en: 'Traditional tea',
          ar: 'شاي تقليدي'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'black-tea',
        name: {
          en: 'Black Tea',
          ar: 'شاي احمر'
        },
        description: {
          en: 'Strong black tea',
          ar: 'شاي أحمر قوي'
        },
        price: 0,
        image: '/image/default.webp'  
      },
      {
        id: 'adeni-tea',
        name: {
          en: 'Adeni Tea',
          ar: 'شاي عدني'
        },
        description: {
          en: 'Traditional Yemeni tea with milk',
          ar: 'شاي يمني تقليدي بالحليب'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'yemeni-coffee',
        name: {
          en: 'Yemeni Coffee',
          ar: 'قهوة يمنية'
        },
        description: {
          en: 'Traditional Yemeni coffee',
          ar: 'قهوة يمنية تقليدية'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'matrix',
        name: {
          en: 'Matrix',
          ar: 'ماتركس'
        },
        description: {
          en: 'Special coffee blend',
          ar: 'مزيج قهوة خاص'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'ginger-coffee',
        name: {
          en: 'Ginger Coffee',
          ar: 'زنجبيل قهوة'
        },
        description: {
          en: 'Coffee with ginger',
          ar: 'قهوة بالزنجبيل'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'coffee-milk',
        name: {
          en: 'Coffee with Milk',
          ar: 'قهوة بحليب'
        },
        description: {
          en: 'Coffee with fresh milk',
          ar: 'قهوة بالحليب الطازج'
        },
        price: 0,
        image: '/image/default.webp'
      }
    ],
    
    // 5. قسم المشروبات - 5.2 العصائر
    juices: [
      {
        id: 'awar-qalb',
        name: {
          en: 'Awar Qalb',
          ar: 'عوار قلب'
        },
        description: {
          en: 'Special mixed fruit juice',
          ar: 'عصير فواكه مشكلة خاص'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'dala-albanat',
        name: {
          en: 'Dala Al Banat',
          ar: 'دلع البنات'
        },
        description: {
          en: 'Sweet mixed juice blend',
          ar: 'مزيج عصير حلو مميز'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'shahrzad',
        name: {
          en: 'Shahrzad',
          ar: 'شهرزاد'
        },
        description: {
          en: 'Exotic fruit juice mix',
          ar: 'مزيج عصير فواكه استوائية'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'lamset-zoq',
        name: {
          en: 'Lamset Zoq',
          ar: 'لمسة ذوق'
        },
        description: {
          en: 'Premium juice blend',
          ar: 'مزيج عصير راقي'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'mango',
        name: {
          en: 'Mango',
          ar: 'مانجا'
        },
        description: {
          en: 'Fresh mango juice',
          ar: 'عصير مانجو طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'strawberry',
        name: {
          en: 'Strawberry',
          ar: 'فراولة'
        },
        description: {
          en: 'Fresh strawberry juice',
          ar: 'عصير فراولة طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'cantaloupe',
        name: {
          en: 'Cantaloupe',
          ar: 'شمام'
        },
        description: {
          en: 'Fresh cantaloupe juice',
          ar: 'عصير شمام طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'watermelon',
        name: {
          en: 'Watermelon',
          ar: 'بطيخ'
        },
        description: {
          en: 'Fresh watermelon juice',
          ar: 'عصير بطيخ طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'orange',
        name: {
          en: 'Orange',
          ar: 'برتقال'
        },
        description: {
          en: 'Fresh orange juice',
          ar: 'عصير برتقال طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'carrot',
        name: {
          en: 'Carrot',
          ar: 'جزر'
        },
        description: {
          en: 'Fresh carrot juice',
          ar: 'عصير جزر طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'lemon',
        name: {
          en: 'Lemon',
          ar: 'ليمون'
        },
        description: {
          en: 'Fresh lemon juice',
          ar: 'عصير ليمون طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'lemon-mint',
        name: {
          en: 'Lemon Mint',
          ar: 'ليمون ونعنع'
        },
        description: {
          en: 'Fresh lemon and mint juice',
          ar: 'عصير ليمون ونعناع طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'pineapple',
        name: {
          en: 'Pineapple',
          ar: 'اناناس'
        },
        description: {
          en: 'Fresh pineapple juice',
          ar: 'عصير أناناس طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'banana-milk',
        name: {
          en: 'Banana with Milk',
          ar: 'موز وحليب'
        },
        description: {
          en: 'Banana smoothie with milk',
          ar: 'سموثي موز بالحليب'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'concentrate',
        name: {
          en: 'Concentrate',
          ar: 'مركز'
        },
        description: {
          en: 'Concentrated juice',
          ar: 'عصير مركز'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'arais-plain',
        name: {
          en: 'Arais Plain',
          ar: 'عرايس صافي'
        },
        description: {
          en: 'Traditional Arais drink',
          ar: 'مشروب عرايس تقليدي'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'arais-nuts',
        name: {
          en: 'Arais with Nuts',
          ar: 'عرايس بالمكسرات'
        },
        description: {
          en: 'Arais drink with mixed nuts',
          ar: 'مشروب عرايس بالمكسرات'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'diwan-juice',
        name: {
          en: 'Al Diwan Juice',
          ar: 'عصير الديوان'
        },
        description: {
          en: 'House special juice blend',
          ar: 'عصير الديوان الخاص'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'galaxy',
        name: {
          en: 'Galaxy',
          ar: 'جلاكسي'
        },
        description: {
          en: 'Special galaxy juice mix',
          ar: 'مزيج عصير جلاكسي خاص'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'rawaa',
        name: {
          en: 'Rawaa',
          ar: 'روعة'
        },
        description: {
          en: 'Premium juice blend',
          ar: 'مزيج عصير فاخر'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'orange-press',
        name: {
          en: 'Pressed Orange',
          ar: 'برتقال كبس'
        },
        description: {
          en: 'Fresh pressed orange juice',
          ar: 'عصير برتقال مكبوس طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'majmoo',
        name: {
          en: 'Majmoo',
          ar: 'مجموع'
        },
        description: {
          en: 'Mixed juice collection',
          ar: 'مجموعة عصائر مشكلة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'cocktail-diwan',
        name: {
          en: 'Cocktail Al Diwan',
          ar: 'كوكتيل الديوان'
        },
        description: {
          en: 'Special Diwan fruit cocktail',
          ar: 'كوكتيل فواكه الديوان الخاص'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'avocado',
        name: {
          en: 'Avocado',
          ar: 'افوكادو'
        },
        description: {
          en: 'Fresh avocado juice',
          ar: 'عصير أفوكادو طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'kiwi',
        name: {
          en: 'Kiwi',
          ar: 'كيوي'
        },
        description: {
          en: 'Fresh kiwi juice',
          ar: 'عصير كيوي طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'pomegranate',
        name: {
          en: 'Pomegranate',
          ar: 'رمان'
        },
        description: {
          en: 'Fresh pomegranate juice',
          ar: 'عصير رمان طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'guava',
        name: {
          en: 'Guava',
          ar: 'جوافة'
        },
        description: {
          en: 'Fresh guava juice',
          ar: 'عصير جوافة طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'fruit-salad',
        name: {
          en: 'Fruit Salad',
          ar: 'سلطة فواكه'
        },
        description: {
          en: 'Mixed fruit salad drink',
          ar: 'عصير سلطة فواكه مشكلة'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'avocado-diwan',
        name: {
          en: 'Avocado Al Diwan',
          ar: 'افوكادو الديوان'
        },
        description: {
          en: 'Special Diwan avocado blend',
          ar: 'مزيج أفوكادو الديوان الخاص'
        },
        price: 0,
        image: '/image/default.webp',
        popular: true
      },
      {
        id: 'green-ginger',
        name: {
          en: 'Green Ginger',
          ar: 'زنجبيل اخضر'
        },
        description: {
          en: 'Fresh green ginger juice',
          ar: 'عصير زنجبيل أخضر طازج'
        },
        price: 0,
        image: '/image/default.webp'
      },
      {
        id: 'lemon-ginger',
        name: {
          en: 'Lemon Ginger',
          ar: 'ليمون وزنجبيل'
        },
        description: {
          en: 'Lemon and ginger juice blend',
          ar: 'مزيج عصير ليمون وزنجبيل'
        },
        price: 0,
        image: '/image/default.webp'
      }
    ]
  }
}

export type MenuItem = {
  id: string
  name: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  price: number
  image: string
  popular?: boolean
  spicy?: number // 0-3 spice level
}

export type SubCategory = {
  id: string
  name: {
    en: string
    ar: string
  }
}

export type MainSection = {
  id: string
  name: {
    en: string
    ar: string
  }
  subcategories: SubCategory[]
}

