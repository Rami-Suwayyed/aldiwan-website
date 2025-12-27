# Translation Files Guide

## 📁 Structure

All application texts are centralized in JSON files located in the `src/lang` folder:

```
src/lang/
├── en/
│   └── common.json    # English translations
├── ar/
│   └── common.json    # Arabic translations
└── README.md          # This file
```

## 🌍 Language Support

The application currently supports:
- **English (en)** - Default language
- **Arabic (ar)** - RTL (Right-to-Left) support

## 📝 Translation File Structure

Each language file (`common.json`) contains the following sections:

### 1. **App Metadata**
```json
{
  "appName": "Al Diwan Al Yemeni",
  "loading": "Loading...",
  "metadata": {
    "title": "Page title",
    "description": "Page description"
  }
}
```

### 2. **Navigation**
```json
{
  "navigation": {
    "home": "Home",
    "menu": "Menu",
    "about": "About Us",
    "reservations": "Reservations",
    "contact": "Contact",
    "language": "العربية"
  }
}
```

### 3. **Hero Section**
```json
{
  "hero": {
    "title": "Main headline",
    "subtitle": "Subtitle",
    "description": "Description text",
    "cta": {
      "menu": "View Menu",
      "reservations": "Make Reservation"
    },
    "stats": {
      "rating": "Rating",
      "delivery": "Min Delivery",
      "customers": "Happy Customers"
    }
  }
}
```

### 4. **About Section**
```json
{
  "about": {
    "title": "Our Story",
    "subtitle": "Preserving Tradition",
    "description": "About description",
    "features": {
      "authentic": "Feature title",
      "authenticDesc": "Feature description"
    },
    "stats": {
      "yearsExp": "Years Experience",
      "customers": "Happy Customers",
      "dishes": "Authentic Dishes"
    },
    "awards": {
      "winning": "Award Winning",
      "bestRestaurant": "Award description"
    }
  }
}
```

### 5. **Menu Section**
```json
{
  "menu": {
    "title": "Our Menu",
    "subtitle": "Traditional Yemeni Cuisine",
    "browseFullMenu": "Browse Full Menu",
    "experienceMenu": "Experience Our Full Menu",
    "experienceDesc": "Description",
    "categories": {
      "mains": "Main Dishes",
      "rice": "Rice Dishes",
      "grilled": "Grilled Specialties",
      "appetizers": "Appetizers",
      "desserts": "Desserts",
      "beverages": "Beverages"
    }
  }
}
```

### 6. **Reservations**
```json
{
  "reservations": {
    "title": "Make a Reservation",
    "subtitle": "Book Your Table",
    "form": {
      "name": "Full Name",
      "email": "Email Address",
      "phone": "Phone Number",
      "date": "Reservation Date",
      "time": "Preferred Time",
      "guests": "Number of Guests",
      "requests": "Special Requests",
      "submit": "Book Table"
    },
    "success": "Success message",
    "error": "Error message"
  }
}
```

### 7. **Contact Section**
```json
{
  "contact": {
    "title": "Contact Us",
    "subtitle": "Get in Touch",
    "description": "Contact page description",
    "form": {
      "name": "Your Name",
      "email": "Your Email",
      "subject": "Subject",
      "message": "Your Message",
      "send": "Send Message"
    },
    "location": {
      "address": "Full address",
      "phone": "+962 7 9 801 1163",
      "email": "info@example.com",
      "getDirections": "Get Directions"
    },
    "hours": {
      "weekdays": "Mon - Thu: Hours",
      "weekend": "Fri - Sun: Hours"
    }
  }
}
```

### 8. **Footer**
```json
{
  "footer": {
    "description": "Footer description",
    "quickLinks": "Quick Links",
    "contactInfo": "Contact Info",
    "followUs": "Follow Us",
    "rights": "© 2024 Copyright text",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "newsletter": "Newsletter",
    "newsletterDesc": "Newsletter description",
    "newsletterPlaceholder": "Email address",
    "subscribe": "Subscribe",
    "madeWithLove": "Made with love"
  }
}
```

### 9. **Common Phrases**
```json
{
  "common": {
    "viewMore": "View More",
    "readMore": "Read More",
    "close": "Close",
    "backToTop": "Back to top"
  }
}
```

## 🔧 How to Use Translations in Components

### Import the translation hook:
```tsx
import { useTranslation } from './TranslationProvider'
```

### Use in component:
```tsx
export default function MyComponent() {
  const { t, isRTL } = useTranslation()
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  )
}
```

### Access nested keys:
```tsx
{t('navigation.home')}
{t('menu.categories.mains')}
{t('contact.form.name')}
```

### Use RTL for styling:
```tsx
<div className={isRTL ? 'text-right' : 'text-left'}>
  {t('about.title')}
</div>
```

## ✏️ How to Edit Translations

1. **Open the appropriate file:**
   - For English: `src/lang/en/common.json`
   - For Arabic: `src/lang/ar/common.json`

2. **Edit the text values** (keep the keys unchanged):
   ```json
   {
     "hero": {
       "title": "Your New Title Here"
     }
   }
   ```

3. **Save the file** - Changes will be reflected immediately in development mode

4. **Important Rules:**
   - ✅ DO edit the text values
   - ❌ DON'T change the keys (e.g., "hero", "title", "navigation")
   - ✅ DO maintain the JSON structure
   - ✅ DO keep both English and Arabic files in sync (same keys)

## 🚀 Adding New Translations

To add a new translation key:

1. Add the key to both `en/common.json` and `ar/common.json`:
   ```json
   // en/common.json
   {
     "newSection": {
       "newText": "English text"
     }
   }
   
   // ar/common.json
   {
     "newSection": {
       "newText": "النص العربي"
     }
   }
   ```

2. Use in component:
   ```tsx
   {t('newSection.newText')}
   ```

## 📋 Translation Checklist

When editing translations:
- [ ] Update both English and Arabic files
- [ ] Maintain the same JSON structure in both files
- [ ] Test the changes in both languages
- [ ] Check RTL layout for Arabic
- [ ] Verify special characters are properly escaped
- [ ] Rebuild the application: `npm run build`

## 🔍 Finding Translation Keys

To find where a specific text is used in the application:

1. Search for the translation key in the codebase
2. Look for `t('key.name')` pattern
3. Check component files in `src/components/`

## 💡 Tips

- Keep translations concise and clear
- Maintain consistent terminology across the app
- Consider cultural context for Arabic translations
- Test long text strings to ensure UI doesn't break
- Use placeholders for dynamic content when needed

## 🆘 Troubleshooting

**Translation not showing:**
- Check if the key exists in the JSON file
- Verify the key path is correct (e.g., `hero.title` not `hero-title`)
- Ensure JSON syntax is valid (no trailing commas, proper quotes)
- Restart development server: `npm run dev`

**Build errors:**
- Validate JSON files using a JSON validator
- Check for syntax errors in JSON files
- Ensure all translation keys are strings

## 📞 Support

For issues or questions about translations, please contact the development team.

---

**Last Updated:** October 24, 2025  
**Maintained by:** Al Diwan Al Yemeni Development Team
