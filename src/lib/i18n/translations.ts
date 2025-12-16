export type Lang = 'en' | 'de' | 'es';

export const languages: { code: Lang; name: string; flag: string }[] = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

export const defaultLang: Lang = 'de';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      rooms: 'Rooms & Prices',
      gallery: 'Gallery',
      location: 'Location',
      booking: 'Book Now',
      booked: 'Booked',
      contact: 'Contact',
      links: 'Links',
      language: 'Language'
    },
    // Hero Section
    hero: {
      title: "Bern's Best Budget Stay",
      subtitle: "Welcome to Bern's better alternative to the Youth Hostel",
      tagline: 'Member of Swiss Hostels',
      cta: 'Book Your Stay',
      learnMore: 'Learn More'
    },
    // Features
    features: {
      title: 'Why Choose Us',
      location: {
        title: 'Perfect Location',
        description: 'Located in the center of the old town, only 10 min walk from the train station'
      },
      amenities: {
        title: 'Great Amenities',
        description: 'Free WLAN, kitchen facilities, common room with TV, games, and gift shop'
      },
      security: {
        title: 'Safe & Clean',
        description: 'Solid security, non-smoking throughout, max 6 beds per room'
      },
      value: {
        title: 'Best Value',
        description: 'Competitive prices including sheets, all taxes. Credit cards & EURO accepted'
      }
    },
    // Rooms & Pricing
    rooms: {
      title: 'Rooms & Prices',
      subtitle: 'Find your perfect accommodation',
      perBed: 'per bed',
      perRoom: 'per room',
      sharedBath: 'Shared bathroom',
      privateBath: 'Private bathroom',
      dormitory6: '6-Bed Dormitory',
      dormitory2: '2-Bed Dormitory',
      doubleShared: 'Double Room',
      doublePrivate: 'Double Room (Private Bath)',
      triple: '3-Bed Room',
      quad: '4-Bed Room',
      single: 'Single Room',
      priceNote: 'All prices in Swiss Francs (CHF), including taxes. Breakfast not included.',
      sheetsIncluded: 'Sheets included',
      towelsAvailable: 'Towels available at CHF 3.-'
    },
    // Gallery
    gallery: {
      title: 'Our Hostel',
      subtitle: 'Take a look around',
      commonRoom: 'Common Room',
      kitchen: 'Kitchen',
      reception: 'Reception',
      singleRoom: 'Single Room',
      doubleRoom: 'Double Room',
      dormitory: 'Dormitory',
      dormitory2: '2-Bed Dormitory',
      dormitory4: '4-Bed Dormitory',
      dormitory6: '6-Bed Dormitory',
      munsterView: 'Münster View'
    },
    // Location
    location: {
      title: 'Find Us',
      subtitle: 'Getting to Bern Backpackers',
      address: 'Address',
      byTram: 'By Tram',
      byTramDesc: "Take tram nr. 9 towards 'Guisanplatz'. Get off at the 2nd stop 'Zytglogge'. Walk into 'Rathausgasse' – you see the hostel on the right side (after about 20 meters).",
      byFoot: 'On Foot',
      byFootDesc: "From the train station walk down Spitalgasse and Marktgasse. At the end of Marktgasse is the 'Zytglogge' (clock tower). Turn left and walk towards the bridge for 50 meters; turn right into Rathausgasse.",
      byCar: 'By Car',
      byCarDesc: "Take highway exit 'Wankdorf'. Follow signs 'Zentrum' and 'Bärengraben'. Cross 'Nydeggbridge' and drive into the old town. Before the clock tower, turn right. Turn left into Rathausgasse after 50 meters."
    },
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'d love to hear from you',
      getInTouch: 'Get in Touch',
      phone: 'Phone',
      fax: 'Fax',
      email: 'Email',
      hours: 'Reception Hours',
      hoursValue: '08:00 - 12:00 and 15:00 - 22:00',
      sendMessage: 'Send Message',
      name: 'Name',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Thank you! Your message has been sent successfully.',
      error: 'Sorry, there was an error. Please try again or email us directly.'
    },
    // Footer
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      member: 'Proud member of Swiss Hostels'
    },
    // Common
    common: {
      bookNow: 'Book Now',
      learnMore: 'Learn More',
      viewAll: 'View All',
      currency: 'CHF'
    }
  },
  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      rooms: 'Zimmer & Preise',
      gallery: 'Bilder',
      location: 'Lage',
      booking: 'Jetzt Buchen',
      booked: 'Ausgebucht',
      contact: 'Kontakt',
      links: 'Links',
      language: 'Sprache'
    },
    // Hero Section
    hero: {
      title: 'Berns beste Budget-Unterkunft',
      subtitle: 'Willkommen zur besseren Alternative zur Jugendherberge',
      tagline: 'Mitglied von Swiss Hostels',
      cta: 'Jetzt Buchen',
      learnMore: 'Mehr Erfahren'
    },
    // Features
    features: {
      title: 'Warum uns wählen',
      location: {
        title: 'Perfekte Lage',
        description: 'Mitten in der Altstadt, nur 10 Min. zu Fuss vom Bahnhof'
      },
      amenities: {
        title: 'Tolle Ausstattung',
        description: 'Gratis WLAN, Gästeküche, Aufenthaltsraum mit TV, Spielen und Shop'
      },
      security: {
        title: 'Sicher & Sauber',
        description: 'Solide Sicherheit, komplett rauchfrei, max. 6 Betten pro Zimmer'
      },
      value: {
        title: 'Bestes Preis-Leistung',
        description: 'Günstige Preise inkl. Bettwäsche und Steuern. Kreditkarten & EURO akzeptiert'
      }
    },
    // Rooms & Pricing
    rooms: {
      title: 'Zimmer & Preise',
      subtitle: 'Finden Sie Ihre perfekte Unterkunft',
      perBed: 'pro Bett',
      perRoom: 'pro Zimmer',
      sharedBath: 'Etagendusche',
      privateBath: 'mit Dusche/WC',
      dormitory6: '6-Bett Mehrbettzimmer',
      dormitory2: '2er Dormitory',
      doubleShared: 'Doppelzimmer',
      doublePrivate: 'Doppelzimmer (mit Bad)',
      triple: '3-Bett Zimmer',
      quad: '4-Bett Zimmer',
      single: 'Einzelzimmer',
      priceNote: 'Alle Preise in Schweizer Franken (CHF), inkl. Steuern. Ohne Frühstück.',
      sheetsIncluded: 'Bettwäsche inklusive',
      towelsAvailable: 'Handtücher erhältlich für CHF 3.-'
    },
    // Gallery
    gallery: {
      title: 'Unser Hostel',
      subtitle: 'Schauen Sie sich um',
      commonRoom: 'Aufenthaltsraum',
      kitchen: 'Küche',
      reception: 'Rezeption',
      singleRoom: 'Einzelzimmer',
      doubleRoom: 'Doppelzimmer',
      dormitory: 'Mehrbettzimmer',
      dormitory2: '2-Bett Zimmer',
      dormitory4: '4-Bett Zimmer',
      dormitory6: '6-Bett Zimmer',
      munsterView: 'Münsterblick'
    },
    // Location
    location: {
      title: 'So finden Sie uns',
      subtitle: 'Anreise zum Bern Backpackers',
      address: 'Adresse',
      byTram: 'Mit Tram',
      byTramDesc: "Nehmen Sie Tram Nr. 9 Richtung 'Guisanplatz'. Steigen Sie an der 2. Haltestelle 'Zytglogge' aus. Gehen Sie in die 'Rathausgasse' – Sie sehen das Hostel auf der rechten Seite (nach ca. 20 Metern).",
      byFoot: 'Zu Fuss',
      byFootDesc: "Vom Bahnhof gehen Sie die Spitalgasse und Marktgasse hinunter. Am Ende der Marktgasse ist der 'Zytglogge' (Zeitglockenturm). Biegen Sie links ab und gehen Sie etwa 50 Meter Richtung Brücke; dann rechts in die Rathausgasse.",
      byCar: 'Mit Auto',
      byCarDesc: "Autobahnausfahrt 'Wankdorf'. Folgen Sie den Schildern 'Zentrum' und 'Bärengraben'. Überqueren Sie die 'Nydeggbrücke' und fahren Sie in die Altstadt. Vor dem Zeitglockenturm rechts abbiegen. Nach 50 Metern links in die Rathausgasse."
    },
    // Contact
    contact: {
      title: 'Kontakt',
      subtitle: 'Wir freuen uns auf Ihre Nachricht',
      getInTouch: 'Kontaktieren Sie uns',
      phone: 'Telefon',
      fax: 'Fax',
      email: 'E-Mail',
      hours: 'Rezeptionszeiten',
      hoursValue: '08:00 - 12:00 und 15:00 - 22:00',
      sendMessage: 'Nachricht senden',
      name: 'Name',
      subject: 'Betreff',
      message: 'Nachricht',
      send: 'Senden',
      sending: 'Wird gesendet...',
      success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
      error: 'Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es erneut oder senden Sie uns eine E-Mail.'
    },
    // Footer
    footer: {
      rights: 'Alle Rechte vorbehalten',
      privacy: 'Datenschutz',
      terms: 'AGB',
      member: 'Stolzes Mitglied von Swiss Hostels'
    },
    // Common
    common: {
      bookNow: 'Jetzt Buchen',
      learnMore: 'Mehr Erfahren',
      viewAll: 'Alle Anzeigen',
      currency: 'CHF'
    }
  },
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      rooms: 'Habitaciones',
      gallery: 'Fotos',
      location: 'Ubicación',
      booking: 'Reservar',
      booked: 'Reservado',
      contact: 'Contacto',
      links: 'Enlaces',
      language: 'Idioma'
    },
    // Hero Section
    hero: {
      title: 'La Mejor Estancia Económica en Berna',
      subtitle: 'Bienvenido al primer Hotel Budget de Berna',
      tagline: 'Miembro de Swiss Hostels',
      cta: 'Reservar Ahora',
      learnMore: 'Saber Más'
    },
    // Features
    features: {
      title: 'Por qué elegirnos',
      location: {
        title: 'Ubicación Perfecta',
        description: 'En el centro del casco antiguo, a solo 15 min a pie de la estación'
      },
      amenities: {
        title: 'Excelentes Servicios',
        description: 'WLAN gratis, cocina, sala común con TV, juegos y tienda'
      },
      security: {
        title: 'Seguro y Limpio',
        description: 'Buena seguridad, totalmente libre de humo, máx. 6 camas por habitación'
      },
      value: {
        title: 'Mejor Valor',
        description: 'Precios competitivos con sábanas e impuestos incluidos. Aceptamos tarjetas y EURO'
      }
    },
    // Rooms & Pricing
    rooms: {
      title: 'Habitaciones y Precios',
      subtitle: 'Encuentra tu alojamiento perfecto',
      perBed: 'por cama',
      perRoom: 'por habitación',
      sharedBath: 'Baño compartido',
      privateBath: 'Baño privado',
      dormitory6: 'Dormitorio de 6 camas',
      dormitory2: 'Dormitorio de 2 camas',
      doubleShared: 'Habitación Doble',
      doublePrivate: 'Habitación Doble (Baño Privado)',
      triple: 'Habitación Triple',
      quad: 'Habitación Cuádruple',
      single: 'Habitación Individual',
      priceNote: 'Todos los precios en Francos Suizos (CHF), impuestos incluidos. Sin desayuno.',
      sheetsIncluded: 'Sábanas incluidas',
      towelsAvailable: 'Toallas disponibles por CHF 3.-'
    },
    // Gallery
    gallery: {
      title: 'Nuestro Hostal',
      subtitle: 'Echa un vistazo',
      commonRoom: 'Sala Común',
      kitchen: 'Cocina',
      reception: 'Recepción',
      singleRoom: 'Habitación Individual',
      doubleRoom: 'Habitación Doble',
      dormitory: 'Dormitorio',
      dormitory2: 'Dormitorio de 2 camas',
      dormitory4: 'Dormitorio de 4 camas',
      dormitory6: 'Dormitorio de 6 camas',
      munsterView: 'Vista al Münster'
    },
    // Location
    location: {
      title: 'Cómo Encontrarnos',
      subtitle: 'Cómo llegar a Bern Backpackers',
      address: 'Dirección',
      byTram: 'En Tranvía',
      byTramDesc: "Tome el tranvía nr. 9 dirección 'Guisanplatz'. Bájese en la 2ª parada 'Zytglogge'. Camine hacia 'Rathausgasse' – verá el hostal en el lado derecho (después de unos 20 metros).",
      byFoot: 'A Pie',
      byFootDesc: "Desde la estación de tren camine por Spitalgasse y Marktgasse. Al final de Marktgasse está el 'Zytglogge' (torre del reloj). Gire a la izquierda y camine 50 metros hacia el puente; gire a la derecha hacia Rathausgasse.",
      byCar: 'En Coche',
      byCarDesc: "Salida de autopista 'Wankdorf'. Siga las señales 'Zentrum' y 'Bärengraben'. Cruce 'Nydeggbridge' y conduzca hacia el casco antiguo. Antes de la torre del reloj gire a la derecha. Gire a la izquierda hacia Rathausgasse después de 50 metros."
    },
    // Contact
    contact: {
      title: 'Contáctenos',
      subtitle: 'Nos encantaría saber de usted',
      getInTouch: 'Póngase en contacto',
      phone: 'Teléfono',
      fax: 'Fax',
      email: 'Correo',
      hours: 'Horario de Recepción',
      hoursValue: '08:00 - 12:00 y 15:00 - 22:00',
      sendMessage: 'Enviar Mensaje',
      name: 'Nombre',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar',
      sending: 'Enviando...',
      success: '¡Gracias! Su mensaje ha sido enviado con éxito.',
      error: 'Lo sentimos, hubo un error. Por favor intente de nuevo o envíenos un correo electrónico.'
    },
    // Footer
    footer: {
      rights: 'Todos los derechos reservados',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      member: 'Orgulloso miembro de Swiss Hostels'
    },
    // Common
    common: {
      bookNow: 'Reservar Ahora',
      learnMore: 'Saber Más',
      viewAll: 'Ver Todo',
      currency: 'CHF'
    }
  }
} as const;

export type Translations = typeof translations.en;

export function getTranslations(lang: Lang): Translations {
  return translations[lang] || translations.en;
}
