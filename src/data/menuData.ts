// Menu data for Al Diwan Al Yemeni
export const menuData = {
  categories: {
    mains: {
      en: 'Main Dishes',
      ar: 'الأطباق الرئيسية'
    },
    rice: {
      en: 'Rice Dishes', 
      ar: 'أطباق الأرز'
    },
    grilled: {
      en: 'Grilled Specialties',
      ar: 'المشاوي'
    },
    appetizers: {
      en: 'Appetizers',
      ar: 'المقبلات'
    },
    desserts: {
      en: 'Desserts',
      ar: 'الحلويات'
    },
    beverages: {
      en: 'Beverages',
      ar: 'المشروبات'
    }
  },
  
  items: {
    mains: [
      {
        id: 'mandi-lamb',
        name: {
          en: 'Mandi Lamb',
          ar: 'مندي لحم'
        },
        description: {
          en: 'Traditional Yemeni spiced lamb with aromatic basmati rice, slow-cooked in underground oven',
          ar: 'لحم الضأن اليمني التقليدي المتبل مع أرز البسمتي العطري، مطبوخ ببطء في الفرن التحتي'
        },
        price: 25,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.19_87ec1b72.jpg',
        // popular: true,
        // spicy: 2
      },
      {
        id: 'mandi-chicken',
        name: {
          en: 'Mandi Chicken',
          ar: 'مندي دجاج'
        },
        description: {
          en: 'Tender chicken marinated in authentic Yemeni spices, served with fragrant rice',
          ar: 'دجاج طري متبل بالتوابل اليمنية الأصيلة، يُقدم مع الأرز العطري'
        },
        price: 18,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.18_68253f73.jpg',
        // popular: true,
        // spicy: 1
      },
      {
        id: 'zurbian-lamb',
        name: {
          en: 'Zurbian Lamb',
          ar: 'زربيان لحم'
        },
        description: {
          en: 'Premium lamb with mixed vegetables and aromatic spices, cooked to perfection',
          ar: 'لحم ضأن ممتاز مع خضار مشكلة وتوابل عطرية، مطبوخ بإتقان'
        },
        price: 28,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.19_c81034b7.jpg',
        // spicy: 2
      }
    ],
    
    rice: [
      {
        id: 'maqluba',
        name: {
          en: 'Maqluba',
          ar: 'مقلوبة'
        },
        description: {
          en: 'Upside-down rice dish with tender meat and roasted vegetables',
          ar: 'طبق الأرز المقلوب مع اللحم الطري والخضار المحمصة'
        },
        price: 22,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.35_29e9c4ff.jpg',
        // spicy: 1
      },
      {
        id: 'kabsa',
        name: {
          en: 'Kabsa',
          ar: 'كبسة'
        },
        description: {
          en: 'Traditional spiced rice with choice of lamb or chicken, mixed with almonds and raisins',
          ar: 'أرز مطبوخ بالتوابل التقليدية مع اختيار اللحم أو الدجاج، مخلوط باللوز والزبيب'
        },
        price: 20,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.34_f39dd0f3.jpg',
        // popular: true,
        // spicy: 2
      }
    ],
    
    grilled: [
      {
        id: 'lamb-ribs',
        name: {
          en: 'Grilled Lamb Ribs',
          ar: 'ضلوع الضأن المشوية'
        },
        description: {
          en: 'Succulent lamb ribs marinated overnight and grilled over charcoal',
          ar: 'ضلوع الضأن الشهية المنقوعة طوال الليل والمشوية على الفحم'
        },
        price: 32,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.35_84c19327.jpg',
        // spicy: 2
      },
      {
        id: 'grilled-fish',
        name: {
          en: 'Grilled Red Sea Fish',
          ar: 'سمك البحر الأحمر المشوي'
        },
        description: {
          en: 'Fresh catch from the Red Sea, grilled with traditional Yemeni herbs',
          ar: 'صيد طازج من البحر الأحمر، مشوي بالأعشاب اليمنية التقليدية'
        },
        price: 26,
        image: '/image/WhatsApp Image 2025-10-21 at 19.06.54_b442c5f5.jpg',
        // spicy: 1
      }
    ],
    
    appetizers: [
      {
        id: 'sambusa',
        name: {
          en: 'Sambusa',
          ar: 'سمبوسة'
        },
        description: {
          en: 'Crispy pastry filled with spiced meat or vegetables, served with tangy sauce',
          ar: 'معجنات مقرمشة محشوة باللحم المتبل أو الخضار، تُقدم مع الصلصة الحامضة'
        },
        price: 8,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.36_6babfe66.jpg',
        // popular: true,
        // spicy: 1
      },
      {
        id: 'fatayer',
        name: {
          en: 'Fatayer',
          ar: 'فطائر'
        },
        description: {
          en: 'Traditional pastries filled with cheese, spinach, or meat',
          ar: 'فطائر تقليدية محشوة بالجبن أو السبانخ أو اللحم'
        },
        price: 6,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.36_b36701f0.jpg',
        // spicy: 0
      }
    ],
    
    desserts: [
      {
        id: 'masub',
        name: {
          en: 'Masub',
          ar: 'معصوب'
        },
        description: {
          en: 'Traditional Yemeni dessert with banana, honey, cream, and crushed bread',
          ar: 'حلوى يمنية تقليدية بالموز والعسل والكريمة والخبز المفتت'
        },
        price: 12,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.47_1501f55f.jpg',
        // popular: true,
        // spicy: 0
      },
      {
        id: 'balaleet',
        name: {
          en: 'Balaleet',
          ar: 'بلاليط'
        },
        description: {
          en: 'Sweet vermicelli with cardamom, saffron, and rose water',
          ar: 'شعيرية حلوة بالهيل والزعفران وماء الورد'
        },
        price: 10,
        image: '/image/WhatsApp Image 2025-10-21 at 15.30.47_96dd6ca1.jpg',
        // spicy: 0
      }
    ],
    
    beverages: [
      {
        id: 'adeni-tea',
        name: {
          en: 'Adeni Tea',
          ar: 'شاي عدني'
        },
        description: {
          en: 'Traditional Yemeni tea with cardamom and condensed milk',
          ar: 'شاي يمني تقليدي بالهيل والحليب المكثف'
        },
        price: 4,
        image: '/image/WhatsApp Image 2025-10-21 at 19.06.55_4e515c31.jpg',
        // popular: true,
        // spicy: 0
      },
      {
        id: 'tamarind-juice',
        name: {
          en: 'Fresh Tamarind Juice',
          ar: 'عصير التمر الهندي الطازج'
        },
        description: {
          en: 'Refreshing tamarind juice sweetened naturally',
          ar: 'عصير التمر الهندي المنعش المحلى طبيعياً'
        },
        price: 5,
        image: '/image/WhatsApp Image 2025-10-21 at 19.06.55_e38cdbe3.jpg',
        // spicy: 0
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