// Initial Transit Data
const appData = {
  routes: [
    // ==========================================
    // ROUTE 1
    // ==========================================
    {
      id: '1A',
      number: '1',
      type: 'bus',
      color: '#03C03C',
      title: 'Gouda Station - Gildenburg',
      operator: 'Qbuzz',
      concession: 'Zuid-Holland-Noord',
      lineType: 'Stadsbus',
      since: '15 december 2024',
      predecessor: '1, 4',
      image: 'Qbuzz/Lijn_1_Gouda',
      caption: 'Buslijn 1 bij Gouda Station',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '0-2x/uur'
      },
      updates: [
        'Op 18 juli 2025 werd de begin- en eindhalte van deze lijn verplaatst naar het station. Daarnaast verviel de halte Ziekenhuis Hoofdingang en werd de halte De Baronie/Eikenlaan toegevoegd voor deze lijn.'
      ],
      stops: [
        { name: 'Gouda, Station', connecting: [{num: '1', color: '#2d6a4f', textColor: '#ffffff'}, {num: '2', color: '#1b4332', textColor: '#ffffff'}, {num: '3', color: '#40916c', textColor: '#ffffff'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Gouda, Ridder van Catsweg', connecting: [{num: '1', color: '#2d6a4f', textColor: '#ffffff'}, {num: '3', color: '#40916c', textColor: '#ffffff'}, {num: '175', color: '#1e5128', textColor: '#ffffff'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Gouda, Savelberg', connecting: [] },
        { name: 'Gouda, Johan de Wittlaan', connecting: [] },
        { name: 'Heemskerkstraat', connecting: [{num: '1', color: '#2d6a4f', textColor: '#ffffff'}, {num: '178', color: '#1e5128', textColor: '#ffffff'}] },
        { name: 'Gouda, Mammoet', connecting: [{num: '1', color: '#2d6a4f', textColor: '#ffffff'}, {num: '178', color: '#1e5128', textColor: '#ffffff'}] },
        { name: 'Gouda, Blommesteinsingel', connecting: [] },
        { name: 'Gouda, Raaigras', connecting: [] },
        { name: 'Gouda, Zuiderwerf', connecting: [] },
        { name: 'Gouda, Landluststraat', connecting: [] },
        { name: 'Gouda, Driehoven', connecting: [] },
        { name: 'Gouda, Rietzoom', connecting: [] },
        { name: 'Gouda, Gildenburg', connecting: [{num: '1', color: '#2d6a4f', textColor: '#ffffff'}, {num: '3', color: '#40916c', textColor: '#ffffff'}] }
      ]
    },

    // ==========================================
    // ROUTE 2 (Added Extra Two-Direction Line)
    // ==========================================
    {
      id: '1B',
      number: '1',
      type: 'bus',
      color: '#03C03C',
      title: 'Leiden Station De Vink - Leiderdorp Leyhof',
      operator: 'Qbuzz',
      concession: 'Zuid-Holland-Noord',
      lineType: 'Stadsbus',
      since: '15 december 2024',
      predecessor: '1',
      image: 'Qbuzz/Lijn_1_Leiden',
      caption: 'Buslijn 1 bij Leiden CS',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '1x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '1x/uur'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      directions: [
        {
          name: "Richting Leiderdorp Leyhof (Heenreis)",
          stops: [
                        { name: 'Leiden , Station De Vink', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '4', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Anne Frankweg', connecting: [] },
            { name: 'Stevensbloem', connecting: [] },
            { name: 'Leiden , Helena Verburgstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Gandhistraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Turkooislaant', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Robijnstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Opaalstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Damlaan', connecting: [] },
            { name: 'Leiden , Gerard Brandtstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Centraal Station', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Steenstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden ,  Breestraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c7575'}] },
            { name: 'Leiden , Korevaarstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
             { name: 'Leiden , Leliestraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '4', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Station Lammenschans', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '4', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Lorentzkade', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Moddermanstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Burggravenlaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Meerburgerkade', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Leiderdorpsebrug  ', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , van der Valk Boumanweg ', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , van Poelgeestlaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Vogellaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Dennenschans', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'} , {num: '56', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Buitendijklaan', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Dijkwacht', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Leyhof', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}] }
          ]
        },
        {
          name: "Richting Leiden Station De Vink (Terugreis)",
          stops: [
            { name: 'Leiden , Leyhof', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Dijkwacht', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Buitendijklaan', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Dennenschans', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}, {num: '56', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Vogellaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , van Poelgeestlaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , van der Valk Boumanweg', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Leiderdorpsebrug', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Meerburgerkade', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Wilhelminabrug', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Meerburgerkade', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Burggravenlaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Moddermanstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Lorentzkade', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Station Lammenschans', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '4', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Leliestraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '4', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Korevaarstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c7575'}] },
            { name: 'Leiden ,  Breestraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c7575'}] },
            { name: 'Leiden , Prinsessekade', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c7575'}] },
            { name: 'Leiden , Nieuwe Beestenmarkt', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c7575'}] },
            { name: 'Leiden , Centraal Station', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Verbeekstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '22', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Doctor Lelylaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '22', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Opaalstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Robijnstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Turkooislaant', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Gandhistraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Helena Verburgstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Stevensbloem', connecting: [] },
            { name: 'Leiden , Anne Frankweg', connecting: [] },
            { name: 'Leiden , Station De Vink', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '4', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
          ]
        }
      ]
    },
      {
      id: '1C',
      number: '1',
      type: 'bus',
      color: '#03C03C',
      title: 'Alphen a/d Rijn - Herenhof',
      operator: 'Qbuzz',
      concession: 'Zuid-Holland-Noord',
      lineType: 'Stadsbus',
      since: '19 Juli 2025',
      predecessor: '1, 4',
      image: 'Qbuzz/Lijn_1_Alphen',
      caption: 'Buslijn 1 bij Alphen a/d Rijn Station',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '0-2x/uur'
      },
      updates: [
        'Op 18 juli 2025 werd de begin- en eindhalte van deze lijn verplaatst naar het station. Daarnaast verviel de halte Ziekenhuis Hoofdingang en werd de halte De Baronie/Eikenlaan toegevoegd voor deze lijn.'
      ],
      stops: [
        { name: 'Alphen a/d Rijn , Station', connecting: [{num: '2', color: '#38a169'}, {num: '101', color: '#38a169'} , {num: '147', color: '#38a169'}] },
        { name: 'Alphen aan den Rijn, Castellumstraat', connecting: [{num: '2', color: '#38a169'}] } ,
        { name: 'Alphen aan den Rijn, De Aarhof', connecting: [{num: '2', color: '#38a169'} , {num: '722', color: '#E4D00A', textColor: '#000000'}] },
        { name: 'Alphen aan den Rijn, Meerkoetstraat', connecting: [{num: '2', color: '#38a169'} , {num: '147', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, De Aarhof', connecting: [{num: '2', color: '#38a169'} , {num: '169', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, Sportlaan', connecting: [{num: '2', color: '#38a169'} , {num: '169', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, Flat Meerzicht', connecting: [{num: '2', color: '#38a169'} , {num: '169', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, Ridderhof', connecting: [{num: '2', color: '#38a169'} , {num: '169', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, Saffierstraat', connecting: [{num: '2', color: '#38a169'} , {num: '169', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, Ericapark', connecting: [{num: '2', color: '#38a169'}] },
        { name: 'Alphen aan den Rijn, Paddestoelweg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Aardster', connecting: [{num: '2', color: '#38a169'} , {num: '169', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn ,Rijsenburg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Alhorst', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Bronkhorst', connecting: [{num: '', color: '#fbfdfc'}]}, 
        { name: 'Alphen aan den Rijn, Herenhof/Horstenweg', connecting: [{num: '2', color: '#38a169'}]}, 
        { name: 'Alphen aan den Rijn, Het Oude Ambacht', connecting: [{num: '2', color: '#38a169'}]}, 
        { name: 'Alphen aan den Rijn, Zadelmaker', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Poortwachter', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, IJzerweg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Haringvliet', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Stortemelk', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Concertweg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Ziekenhuis', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Albert Schweitzerbrug', connecting: [{num: '2', color: '#38a169'} , {num: '182', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, Avifauna', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Zwembad De Hoorn', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, De Baronie/Eikenlaan', connecting: [{num: '2', color: '#38a169'} , {num: '165', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Rijnhavenkade', connecting: [{num: '2', color: '#38a169'} , {num: '165', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Magazijnweg', connecting: [{num: '2', color: '#38a169'} , {num: '165', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Vennootsweg', connecting: [{num: '2', color: '#38a169'} , {num: '165', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Rijnvicus', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Albert Einsteinweg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Boerhaaveweg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Flemingweg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Sportpark', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Vroonhoevelaan', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Amerikalaan', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Europalaan', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Station/Aziëlaan', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Polderpeil', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Archeonlaan', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, De Schans', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Station', connecting: [{num: '2', color: '#38a169'}, {num: '101', color: '#38a169'} , {num: '147', color: '#38a169'},{num: '+', color: '#6c757d'}] }
      ]
    },

    {
    id: '1D',
      number: '1',
      type: 'bus',
      color: '#318CE7',
      title: '\'s-Hertogenbosch Centraal Station - De Aawijk ',     
      operator: 'Arriva (Bravo)',
      concession: 'Oost-brabant',
      lineType: 'Stadsbus',
      since: '10 December 2017',
      predecessor: '1',
      image: 'Arriva/Lijn_1_s-Hertogenbosch.jpg',
      caption: 'Buslijn 1 bij \'s-Hertogenbosch CS',
      frequencies: {
        'Spits': '0-2x/uur',
        'Dal': '0-2x/uur',
        'Avond': '1-2x/uur (tot 22:00)',
        'Zaterdag': '2x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      directions: [
        {
          name: "Richting De Aawijk",
          stops: [
            { name: '\'s-Hertogenbosch , Centraal Station ', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}, {num: '3', color: '#BEBFC5', textColor: '#000000'},{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Koningsweg', connecting: [{num: '8', color: '#66FF00', textColor: '#000000'}, {num: '9', color: '#006D6F', textColor: '#ffffff'},{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'},] },
            { name: '\'s-Hertogenbosch , Spinhuiswal', connecting: [{num: '3', color: '#7C0902', textColor: '#ffffff'}, {num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Hertog Hendriksingel', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Pettelaarseweg', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Sweelinckplein', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Chopinstraat/Provinciehuis', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '306', color: '#003262', textColor: '#ffffff'}] },
            { name: '\'s-Hertogenbosch , Provinciehuis', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Gestelseweg', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Vondelstraat', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Merwedelaan', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Rivierenplein', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Balistraat', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Dommelstraat', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Oosterplas', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
          ]
        },
        {
          name: "Richting \'s-Hertogenbosch Centraal Station ",
          stops: [
            { name: '\'s-Hertogenbosch , Oosterplas', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Scheldestraat', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Maassingel', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Geulweg', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Merwedelaan', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Erasmusstraat', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Zuiderparkweg', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Provinciehuis', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Chopinstraat/Provinciehuis', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '306', color: '#003262', textColor: '#ffff'}] },
            { name: '\'s-Hertogenbosch , Sweelinckplein', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Philips de Tweedestraat', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Pettelaarseweg', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Pettelaarseweg', connecting: [{num: '11', color: '#BEBFC5', textColor: '#0000'}, {num: '154', color: '#BEBFC5', textColor: '#000000'}, {num: '156', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Hertog Hendriksingel', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}, {num: '154', color: '#BEBFC5', textColor: '#000000'}, {num: '156', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Spinhuiswal', connecting: [{num: '3', color: '#7C0902', textColor: '#ffffff'}, {num: '11', color: '#BEBFC5', textColor: '#000000'}, {num: '154', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Koningsweg', connecting: [{num: '8', color: '#66FF00', textColor: '#000000'}, {num: '9', color: '#006D6F', textColor: '#ffff'}, {num: '11', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Centraal Station ', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}, {num: '3', color: '#BEBFC5', textColor: '#000000'}, {num: '4', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
          ]
        }
      ]
    },
    {
    id: '1E',
      number: '1',
      type: 'bus',
      color: '#FFD700',
      textColor: '#000000',
      title: 'Amersfoort Centraal Station - Birkhoven Park ',     
      operator: 'Keolis (U-OV)',
      concession: 'Utrecht Buiten',
      lineType: 'Stadsbus',
      since: '10 December 2017',
      predecessor: '1',
      image: 'Keolis/Lijn_1_Amersfoort.jpg',
      caption: 'Buslijn 1 bij Amersfoort CS',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '0-2x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': 'niet rijdt'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      directions: [
        {
          name: "Richting Birkhoven Park",
          stops: [
            { name: 'Amersfoort , Centraal Station ', connecting: [{num: '2', color: '#0047AB', textColor: '#000000'}, {num: '3', color: '#C46210', textColor: '#000000'},{num: '4', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Stadhuis', connecting: [{num: '2', color: '#0047AB', textColor: '#000000'}, {num: '3', color: '#C46210', textColor: '#000000'},{num: '4', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Eemplein', connecting: [] },
            { name: 'Amersfoort , Industrieweg', connecting: [{num: '573', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Mijnbouwweg', connecting: [] },
            { name: 'Amersfoort , Argonweg', connecting: [{num: '573', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Heliumweg', connecting: [{num: '573', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Kryptonweg', connecting: [{num: '573', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Birkhoven Park', connecting: [] },
          ]
        },
        {
          name: "Richting Amersfoort Centraal Station ",
          stops: [
            { name: 'Amersfoort , Birkhoven Park', connecting: [] },
            { name: 'Amersfoort , Plataanstraat', connecting: [] },
            { name: 'Amersfoort , Goudsbloemstraat', connecting: [] },
            { name: 'Amersfoort , Dongestraat', connecting: [] },
            { name: 'Amersfoort , Tulpstraat', connecting: [{num: '501', color: '#FFD700', textColor: '#000000'}] },
            { name: 'Amersfoort , Puntenburgerlaan', connecting: [{num: '501', color: '#FFD700', textColor: '#000000'}] },
            { name: 'Amersfoort , Groningerstraat/Oppidium', connecting: [] },
            { name: 'Amersfoort , Stadhuis', connecting: [{num: '2', color: '#0047AB', textColor: '#000000'}, {num: '3', color: '#C46210', textColor: '#000000'},{num: '4', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Snouckaertlaan', connecting: [{num: '2', color: '#0047AB', textColor: '#000000'}, {num: '3', color: '#C46210', textColor: '#000000'},{num: '4', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Centraal Station ', connecting: [{num: '2', color: '#0047AB', textColor: '#000000'}, {num: '3', color: '#C46210', textColor: '#000000'},{num: '4', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        }
      ]
    },
    {
      id: '1F',
      number: '1',
      type: 'bus',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Arnhem, Centraal Station - De Laar West',
      operator: 'Transdev Nederland (RRReis)',
      concession: 'Arnhem-Nijmegen-Foodvalley',
      lineType: 'Stadsbus',
      since: '10 december 2023',
      predecessor: '1',
      image: 'Transdev/Lijn_1_Arnhem.jpg',
      caption: 'Buslijn 1 rijdt bij Arnhem Nelson Mandelabrug',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-4x/uur'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      stops: [
        { name: 'Arnhem, Centraal Station', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}, {num: '3', color: '#BEBFC5', textColor: '#000000'}, {num: '5', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Arnhem, Rijnstraat', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}, {num: '7', color: '#BEBFC5', textColor: '#000000'}, {num: '11', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Arnhem, De Praets', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}, {num: '7', color: '#BEBFC5', textColor: '#000000'}, {num: '11', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Arnhem, Fonteinkruidstraat', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}, {num: '7', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Arnhem, Hagemanswei', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Arnhem, Bussumstraat', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Arnhem, Winkelcentrum Elderhof', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Arnhem, Hillegomweg', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Arnhem, Hollandweg', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Arnhem, Kroonse Wal', connecting: [] },
        { name: 'Arnhem, Woudrichemstraat', connecting: [] },
        { name: 'Arnhem, De Laar/Bredasingel', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}] },
        
      ]
    },
    {
      id: '02A',
      number: '2',
      type: 'Tram',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Amsterdam Centraal Station - Nieuw Sloten',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Tram',
      since: '23 september 1991',
      predecessor: '2',
      image: 'GVB/Lijn_2_Amsterdam.jpg',
      caption: 'Tramlijn 2 op Amsterdam Centraal station',
      frequencies: {
        'Spits': '8,8-5x/uur',
        'Dal': '8,8-5x/uur',
        'Avond': '6-8x/uur',
        'Zaterdag': '4-10x/uur',
        'Zondag': '4-8,5x/uur'
      },
      updates: [
        'Met ingang van 4 juli 2026 werd de dienstregeling tijdens de zomervakantie aangepast: de maximale frequentie werd op alle dagen 7,5x/uur (elke 8 minuten). Daarnaast werd op zondagavond na 22:00 uur nog maar 4x/uur gereden in plaats van 5x/uur.'
      ],
      stops: [
        { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Nieuwezijds Kolk', connecting: [{num: '17', color: '#568203', textColor: '#ffffff'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Dam', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '14', color: '#BEBFC5', textColor: '#000000'},{num: '17', color: '#568203', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Paleisstraat', connecting: [{num: '17', color: '#568203', textColor: '#ffffff'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Koningsplein', connecting: [{num: '17', color: '#568203', textColor: '#ffffff'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Keizersgracht', connecting: [{num: '17', color: '#568203', textColor: '#ffffff'},{num: '24', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Amsterdam ,Prinsengracht', connecting: [{num: '17', color: '#568203', textColor: '#ffffff'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Leidseplein', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Museumplein', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Cornelis Schuytstraat', connecting: [] },
        { name: 'Amsterdam ,Valeriusplein', connecting: [] },
        { name: 'Amsterdam ,Amstelveenseweg', connecting: [] }, 
        { name: 'Amsterdam ,Hoofddorpplein', connecting: [] },
        { name: 'Amsterdam ,Westlandgracht', connecting: [] },
        { name: 'Amsterdam ,Delflandlaan', connecting: [] },
        { name: 'Amsterdam ,Heemstedestraat', connecting: [] },   
        { name: 'Amsterdam ,Johan Huizingalaan', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'}] }, 
        { name: 'Amsterdam ,Louwesweg', connecting: [{num: '195', color: '#0000FF', textColor: '#ffffff'}] }, 
        { name: 'Amsterdam ,Laan van Vlaanderen', connecting: [{num: '195', color: '#0000FF', textColor: '#ffffff'},{num: '369', color: '#FF0800', textColor: '#ffffff'}] }, 
        { name: 'Amsterdam ,Centrum Nieuw Sloten', connecting: [] }, 
        { name: 'Amsterdam ,Oudenaardeplantsoen ', connecting: [] },
      ]
    },
    {
      id: '04A',
      number: '4',
      type: 'Tram',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Amsterdam Centraal Station - Amsterdam Station RAI',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Tram',
      since: '13 mei 1981',
      predecessor: '4',
      image: 'GVB/Lijn_4_Amsterdam.jpg',
      caption: 'Tramlijn 4 op Drentepark',
      frequencies: {
        'Spits': '4-5x/uur',
        'Dal': '4x/uur',
        'Avond': '4x/uur',
        'Zaterdag': '4-5x/uur',
        'Zondag': '4x/uur'
      },
      updates: [
        'Met ingang van 4 juli 2026 werd de dienstregeling tijdens de zomervakantie aangepast: de maximale frequentie werd op alle dagen 7,5x/uur (elke 8 minuten). Daarnaast werd op zondagavond na 22:00 uur nog maar 4x/uur gereden in plaats van 5x/uur.'
      ],
      stops: [
        { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Dam', connecting: [{num: '14', color: '#BEBFC5', textColor: '#000000'},{num: '17', color: '#568203', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Rokin', connecting: [{num: '4', color: '#568203', textColor: '#ffffff'},{num: '14', color: '#568203', textColor: '#ffffff'},{num: 'M52', color: '#00B9E8', textColor: '#ffffff'}] },
        { name: 'Amsterdam ,Rembrandtplein', connecting: [{num: '4', color: '#568203', textColor: '#ffffff'},{num: '14', color: '#568203', textColor: '#ffffff'}] },
        { name: 'Amsterdam ,Keizersgracht', connecting: []},
        { name: 'Amsterdam ,Prinsengracht', connecting: [{num: '14', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Frederiksplein', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Albert Cuypstraat', connecting: [{num: '19', color: '#FF9966', textColor: '#000000'}] },
        { name: 'Amsterdam ,Ceintuurbaan', connecting: [] }, 
        { name: 'Amsterdam ,Lutmastraat', connecting: [] },
        { name: 'Amsterdam ,Amstelkade', connecting: [] },    
        { name: 'Amsterdam ,Victorieplein', connecting: [{num: '12', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '245', color: '#BEBFC5', textColor: '#000000'}] }, 
        { name: 'Amsterdam ,Waalstraat', connecting: [] },  
        { name: 'Amsterdam ,Maasstraat', connecting: [] },  
        { name: 'Amsterdam ,Dintelstraat', connecting: [{num: '245', color: '#BEBFC5', textColor: '#000000'}] }, 
        { name: 'Amsterdam ,Europaplein', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: 'M52', color: '#00B9E8', textColor: '#ffffff'}] }, 
        { name: 'Amsterdam ,Station RAI', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '321', color: '#FFBF00', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Drentepark', connecting: [] },  
      ]
    },
    {
      id: '06A',
      number: '6',
      type: 'Tram',
      color: '#BEBFC5',
      textcolor: '#ffffff',
      title: 'Amstelveen Westwijk - Amsterdam Station Zuid',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Tram',
      since: '29 maart 2026',
      predecessor: '-',
      image: 'GVB/Lijn_6_Amsterdam.jpg',
      caption: 'Tramlijn 6 rijdt op Brink',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': 'niet rijdt',
        'Avond': 'niet rijdt',
        'Zaterdag': 'niet rijdt',
        'Zondag': 'niet rijdt'
      },
      updates: [
        'Op 29 maart 2026 gingen de uitgestelde dienstregelingwijzigingen van de nieuwe concessie Stadsvervoer Amsterdam in.Tram 12 ging hierbij na de halte Concertgebouw in plaats van van/naar het Centraal Station voortaan via de Bilderdijkstraat en het Frederik Hendrikplantsoen naar de Zoutkeetsgracht rijden. Hiermee werd voor een deel de opgeheven tramlijn 3 vervangen.',
        'Aangezien de nieuwe route van lijn 12 minder druk was, werd de frequentie hierbij verlaagd naar maximaal 6x/uur overdag. Vanwege werkzaamheden aan de Raadhuisstraat en Rozengracht, was de verwachting dat tram 12 pas vanaf maart 2027 verder rijden van/naar de Zoutkeetsgracht. Tot die tijd lag het eindpunt van deze lijn bij de halte Frederik Hendrikplantsoen.',
        'Echter werd deze verlenging al doorgevoerd op 30 september 2026 doordat het eindpunt van tram 13 verlegd werd van de Zoutkeetsgracht naar de Zeilstraat vanwege de werkzaamheden aan de Overtoomse Sluis.'
      ],
      stops: [
        { name: 'Westwijk', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
        { name: 'Sacharovlaan', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '357', color: '#FF8C00', textColor: '#ffffff'}] },
        { name: 'Poortwachter', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '178', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Brink', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
        { name: 'Meent', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
        { name: 'Sportlaan', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'}]},
        { name: 'Ouderkerkerlaan', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '149', color: '#BEBFC5', textColor: '#000000'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}]},
        { name: 'Oranjebaan', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '171', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}]},
        { name: 'Onderuit', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'}]},
        { name: 'Zonnestein', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'}]},
        { name: 'Kronenburg', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'}]},
        { name: 'Uilenstede', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'}]},
        { name: 'Van Boshuizenstraat', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '463', color: '#FE6F5E', textColor: '#000000'}]},
        { name: 'Arent Janszoon Ernststraat', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '461', color: '#000000', textColor: '#ffffff'},{num: '+', color: '#6c757d'}]},
        { name: 'Station Zuid', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'}]},
        { name: 'Amsterdam, Station Zuid WTC-zijde ', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}, {num: '178', color: '#BEBFC5', textColor: '#000000'},{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
      ]
    },
    {
      id: '12A',
      number: '12',
      type: 'Tram',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Amsterdam Amstelstation - Zoutkeetsgracht',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Tram',
      since: '29 maart 2026',
      predecessor: '3,12',
      image: 'GVB/Lijn_12_Amsterdam.jpg',
      caption: 'Tramlijn 12 op Amstelstation',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4-6x/uur',
        'Zondag': '4-6x/uur'
      },
      updates: [
        'Op 29 maart 2026 gingen de uitgestelde dienstregelingwijzigingen van de nieuwe concessie Stadsvervoer Amsterdam in.Tram 12 ging hierbij na de halte Concertgebouw in plaats van van/naar het Centraal Station voortaan via de Bilderdijkstraat en het Frederik Hendrikplantsoen naar de Zoutkeetsgracht rijden. Hiermee werd voor een deel de opgeheven tramlijn 3 vervangen.',
        'Aangezien de nieuwe route van lijn 12 minder druk was, werd de frequentie hierbij verlaagd naar maximaal 6x/uur overdag. Vanwege werkzaamheden aan de Raadhuisstraat en Rozengracht, was de verwachting dat tram 12 pas vanaf maart 2027 verder rijden van/naar de Zoutkeetsgracht. Tot die tijd lag het eindpunt van deze lijn bij de halte Frederik Hendrikplantsoen.',
        'Echter werd deze verlenging al doorgevoerd op 30 september 2026 doordat het eindpunt van tram 13 verlegd werd van de Zoutkeetsgracht naar de Zeilstraat vanwege de werkzaamheden aan de Overtoomse Sluis.'
      ],
      stops: [
        { name: 'Amsterdam ,Amstelstation', connecting: [{num: '40', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Amsteldijk', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Victorieplein', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Waalstraat', connecting: [] },
        { name: 'Amsterdam ,Maasstraat', connecting: [] },
        { name: 'Amsterdam ,Van Hilligaertstraat', connecting: [] },
        { name: 'Amsterdam ,De Pijp', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: 'M52', color: '#00B9E8', textColor: '#ffffff'}] },
        { name: 'Amsterdam ,Roelof Hartplein', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Concertgebouw', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Overtoom', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Kinkerstraat', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '13', color: '#8DB600', textColor: '#ffffff'},{num: '19', color: '#FF9966', textColor: '#000000'}] },
        { name: 'Amsterdam ,De Clercqstraat', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'}] },
        { name: 'Amsterdam ,Hugo de Grootplein', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'}] },
        { name: 'Amsterdam ,Frederik Hendrikplantsoen', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Marnixplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Nieuwe Willemsstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Haarlemmerplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Zoutkeetsgracht', connecting: [] },
      ]
    },
    {
    id: '15B',
      number: '15',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Sloterdijk- Amsterdam Station Zuid',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '13 December 2009',
      predecessor: '15 , 315',
      image: 'GVB/Lijn_15_Amsterdam.jpg',
      caption: 'Buslijn 1 rijdt bij Amsterdam, Haarlemmermeer Station',
      frequencies: {
        'Spits': '5x/uur',
        'Dal': '5x/uur',
        'Avond': '4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-4x/uur'
      },
      updates: [
        'Op 1 november 2026 werd op station Amsterdam Zuid de nieuwe Brittenpassage geopend, die ca. 200m westelijker lag dan de bestaande Minervapassage. Vanwege de veranderde looproutes werd de indeling van de tram- en bushaltes rondom het station aangepast. De halte Station Zuid aan de Strawinskylaan kreeg de toevoeging WTC-zijde, omdat de halte Parnassusweg de naam Station Zuid overnam.'
      ],
      directions: [
        {
          name: "Richting Amsterdam Station Zuid",
          stops: [
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Bos en Lommerplein', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '247', color: '#BEBFC5', textColor: '#000000'},{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Mercatorplein', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Willem Schoutenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Postjesweg', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam , Corantijnstraat', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam , Surinameplein', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam, Haarlemmermeerstraat', connecting: [] },
            { name: 'Amsterdam, Hoofddorpplein', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'},{num: 'N88', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Haarlemmermeerstation', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '257', color: '#BEBFC5', textColor: '#000000'},{num: '357', color: '#FF8C00', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Amsterdam, Olympiaweg', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Olympiaplein', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Prinses Irenestraat', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Station Zuid WTC-zijde ', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}, {num: '178', color: '#BEBFC5', textColor: '#000000'},{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        },
        {
          name: "Richting Station Sloterdijk ",
          stops: [
            { name: 'Amsterdam, Station Zuid WTC-zijde ', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}, {num: '178', color: '#BEBFC5', textColor: '#000000'},{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam, Prinses Irenestraat', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Olympiaplein', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Olympiaweg', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Haarlemmermeerstation', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '257', color: '#BEBFC5', textColor: '#000000'},{num: '357', color: '#FF8C00', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Amsterdam, Zeilstraat', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'},{num: '13', color: '#8DB600', textColor: '#000000'},{num: '357', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Amsterdam, Hoofddorpplein', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'},{num: 'N88', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Haarlemmermeerstraat', connecting: [] },
            { name: 'Amsterdam , Surinameplein', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam , Corantijnstraat', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam , Postjesweg', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam , Willem Schoutenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Mercatorplein', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Erasmusgracht', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Bos en Lommerplein', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '247', color: '#BEBFC5', textColor: '#000000'},{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        }
      ]
    },
    {
    id: '18B',
      number: '18',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Centraal Station - Riekerpolder',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '	29 maart 2026',
      predecessor: '18,68',
      image: 'GVB/Lijn_18_Amsterdam.jpg',
      caption: 'Buslijn 18 bij Amsterdam',
      frequencies: {
        'Spits': '5x/uur',
        'Dal': '4x/uur',
        'Avond': '4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-4x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Riekerpolder",
          stops: [
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Buiten Brouwersstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Haarlemmerplein', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nieuwe Willemsstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Marnixplein', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Frederik Hendrikplantsoen', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Gillis van Ledenberchstraat', connecting: [{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Markthallen', connecting: [{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '19', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan Evertsenstraat', connecting: [] },
            { name: 'Amsterdam , Marco Polostraat', connecting: [{num: '13', color: '#8DB600', textColor: '#000000'}] },
            { name: 'Amsterdam , Mercatorplein', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '15', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Willem Schoutenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '15', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Hoofdweg', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '15', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Nachtwachtlaan', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Derkinderenstraat', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Derkinderenstraat', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'},{num: 'Metro', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Robert Fruinlaan', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Justus Lipsiusstraat', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Cornelis Lelylaan', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Station Lelylaan', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Sierplein', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Johan Huizingalaan', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Sloterweg', connecting: [] },
            { name: 'Amsterdam , John M. Keynesplein', connecting: [] },
          ]
        },
        {
          name: "Richting Amsterdam Centraal Station ",
          stops: [
            { name: 'Amsterdam , John M. Keynesplein', connecting: [] },
            { name: 'Amsterdam , Sloterweg', connecting: [] },
            { name: 'Amsterdam , Johan Huizingalaan', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Sierplein', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Station Lelylaan', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Cornelis Lelylaan', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Justus Lipsiusstraat', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Robert Fruinlaan', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Derkinderenstraat', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'},{num: 'Metro', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Derkinderenstraat', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Nachtwachtlaan', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Postjesweg', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam , Willem Schoutenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '15', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Mercatorplein', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '15', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Marco Polostraat', connecting: [{num: '13', color: '#8DB600', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan Evertsenstraat', connecting: [] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '19', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Markthallen', connecting: [{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Gillis van Ledenberchstraat', connecting: [{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Frederik Hendrikplantsoen', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Marnixplein', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nieuwe Willemsstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Haarlemmerplein', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Buiten Brouwersstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        }
      ]
    },
    {
    id: '21B',
      number: '21',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Centraal Station - Geuzenveld',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '	8 maart 1959',
      predecessor: '-',
      image: 'GVB/Lijn_21_Amsterdam.jpg',
      caption: 'Buslijn 21 bij Amsterdam',
      frequencies: {
        'Spits': '8x/uur',
        'Dal': '8x/uur',
        'Avond': '6-8x/uur',
        'Zaterdag': '6-8x/uur',
        'Zondag': '6-8x/uur'
      },
      updates: [
        'Met ingang van 4 juli 2026 werd de dienstregeling tijdens de zomervakantie aangepast: doordeweeks werd voortaan al vanaf circa 7:30 uur 8x/uur gereden. Daarentegen werd op zondagen de maximale frequentie verlaagd van 8x/uur naar 6x/uur.'
      ],
      directions: [
        {
          name: "Richting Geuzenveld",
          stops: [
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Buiten Brouwersstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Buiten Oranjestraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Haarlemmerplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nieuwe Willemsstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Marnixplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Frederik Hendrikplantsoen', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Kostverlorenstraat', connecting: [] },
            { name: 'Amsterdam , Van Beuningenplein', connecting: [] },
            { name: 'Amsterdam , Van der Hoopstraat', connecting: [] },
            { name: 'Amsterdam , Van Hallstraat', connecting: [] },
            { name: 'Amsterdam , Vredenhof', connecting: [] },
            { name: 'Amsterdam , Solebaystraat', connecting: [] },
            { name: 'Amsterdam , Bos en Lommerweg', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Egidiusstraat', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Bos en Lommerweg', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Burgemeester de Vlugtlaan', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Burgemeester Fockstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Burgemeester Eliasstraat', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Plein 40-45 ', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Antony Moddermanstraat ', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Jacob Cabeliaustraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Aalbersestraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Sam van Houtenstraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Michel de Klerkhof', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nolensstraat', connecting: [] },
            { name: 'Amsterdam , De Savornin Lohmanstraat', connecting: [] },
          ]
        },
        {
          name: "Richting Amsterdam Centraal Station ",
          stops: [
            { name: 'Amsterdam , De Savornin Lohmanstraat', connecting: [] },
            { name: 'Amsterdam , Michel de Klerkhof', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Sam van Houtenstraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Aalbersestraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Dr. H. Colijnstraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Antony Moddermanstraat ', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Plein 40-45 ', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Burgemeester Eliasstraat', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Burgemeester Fockstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Burgemeester de Vlugtlaan', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Bos en Lommerweg', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Egidiusstraat', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Bos en Lommerweg', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Solebaystraat', connecting: [] },
            { name: 'Amsterdam , Vredenhof', connecting: [] },
            { name: 'Amsterdam , Van Hallstraat', connecting: [] },
            { name: 'Amsterdam , Van der Hoopstraat', connecting: [] },
            { name: 'Amsterdam , Van Beuningenplein', connecting: [] },
            { name: 'Amsterdam , Kostverlorenstraat', connecting: [] },
            { name: 'Amsterdam , Frederik Hendrikplantsoen', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Marnixplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nieuwe Willemsstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Haarlemmerplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Buiten Brouwersstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        },
        {
          name: "Richting J.M. den Uylstraat ",
          stops: [
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Buiten Brouwersstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Buiten Oranjestraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Haarlemmerplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nieuwe Willemsstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Marnixplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Frederik Hendrikplantsoen', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Kostverlorenstraat', connecting: [] },
            { name: 'Amsterdam , Van Beuningenplein', connecting: [] },
            { name: 'Amsterdam , Van der Hoopstraat', connecting: [] },
            { name: 'Amsterdam , Van Hallstraat', connecting: [] },
            { name: 'Amsterdam , Vredenhof', connecting: [] },
            { name: 'Amsterdam , Solebaystraat', connecting: [] },
            { name: 'Amsterdam , Bos en Lommerweg', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Egidiusstraat', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Bos en Lommerweg', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Burgemeester de Vlugtlaan', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Burgemeester Fockstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Burgemeester Eliasstraat', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Plein 40-45 ', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Antony Moddermanstraat ', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Jacob Cabeliaustraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Aalbersestraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , J.M. den Uylstraat', connecting: [] },
            
          ]
        }
      ]
    },
    {
      id: '22A',
      number: '22',
      type: 'bus',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Amsterdam Station Sloterdijk - Amsterdam Centraal Station',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 maart 2026',
      predecessor: '22,68',
      image: 'GVB/Lijn_22_Amsterdam.jpg',
      caption: 'Buslijn 22 rijdt bij Amsterdam,Insulindeweg',
      frequencies: {
        'Spits': '6-8x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4-6x/uur',
        'Zondag': '4-6x/uur'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      stops: [
        { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '15', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam , La Guardiaweg ', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}, {num: '103', color: '#003262', textColor: '#ffffff'},{num: '272', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam , Kabelweg ', connecting: [] },
        { name: 'Amsterdam , Contactweg ', connecting: [] },
        { name: 'Amsterdam , Spaarndammerdijk ', connecting: [] },
        { name: 'Amsterdam , Zaanstraat ', connecting: [] },
        { name: 'Amsterdam , Assendelftstraat', connecting: [] },
        { name: 'Amsterdam , Nassauplein ', connecting: []},
        { name: 'Amsterdam , Buiten Brouwersstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '21', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam , Buiten Oranjestraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Haarlemmerplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
      ]
    },
    {
      id: '25A',
      number: '25',
      type: 'Tram',
      color: '#FE6F5E',
      textcolor: '#ffffff',
      title: 'Uithoorn Centrum - Muiderpoortation',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Tram',
      since: '29 maart 2026',
      predecessor: '3,25',
      image: 'GVB/Lijn_25_Amsterdam.jpg',
      caption: 'Tramlijn 25 rijdt op Javaplein',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4-6x/uur',
        'Zondag': '4-6x/uur'
      },
      updates: [
        'Op 29 maart 2026 gingen de uitgestelde dienstregelingwijzigingen van de nieuwe concessie Stadsvervoer Amsterdam in.Tram 12 ging hierbij na de halte Concertgebouw in plaats van van/naar het Centraal Station voortaan via de Bilderdijkstraat en het Frederik Hendrikplantsoen naar de Zoutkeetsgracht rijden. Hiermee werd voor een deel de opgeheven tramlijn 3 vervangen.',
        'Aangezien de nieuwe route van lijn 12 minder druk was, werd de frequentie hierbij verlaagd naar maximaal 6x/uur overdag. Vanwege werkzaamheden aan de Raadhuisstraat en Rozengracht, was de verwachting dat tram 12 pas vanaf maart 2027 verder rijden van/naar de Zoutkeetsgracht. Tot die tijd lag het eindpunt van deze lijn bij de halte Frederik Hendrikplantsoen.',
        'Echter werd deze verlenging al doorgevoerd op 30 september 2026 doordat het eindpunt van tram 13 verlegd werd van de Zoutkeetsgracht naar de Zeilstraat vanwege de werkzaamheden aan de Overtoomse Sluis.'
      ],
      stops: [
        { name: 'Uithoorn , Centrum', connecting: [{num: '123', color: '#FDEE00', textColor: '#000000'},{num: '330', color: '#72A0C1', textColor: '#ffffff'},{num: '526', color: '#72A0C1', textColor: '#000000'}] },
        { name: 'Uithoorn , Busstation', connecting: [{num: '123', color: '#FDEE00', textColor: '#000000'},{num: '147', color: '#568203', textColor: '#000000'},{num: '149', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Aan De Zoom', connecting: [] },
        { name: 'Westwijk', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
        { name: 'Sacharovlaan', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '357', color: '#FF8C00', textColor: '#ffffff'}] },
        { name: 'Poortwachter', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '178', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Brink', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
        { name: 'Meent', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
        { name: 'Sportlaan', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Ouderkerkerlaan', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '149', color: '#BEBFC5', textColor: '#000000'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}]},
        { name: 'Oranjebaan', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '171', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}]},
        { name: 'Onderuit', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Zonnestein', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Kronenburg', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Uilenstede', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Van Boshuizenstraat', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '463', color: '#FE6F5E', textColor: '#000000'}]},
        { name: 'Arent Janszoon Ernststraat', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '461', color: '#000000', textColor: '#ffffff'},{num: '+', color: '#6c757d'}]},
        { name: 'Station Zuid', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Amsterdam, Station Zuid WTC-zijde ', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}, {num: '178', color: '#BEBFC5', textColor: '#000000'},{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam, Prinses Irenestraat ', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'}] },
        { name: 'Amsterdam, Stadionweg ', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'}] },
        { name: 'Amsterdam, Gerrit van der Veenstraat ', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'}] },
        { name: 'Amsterdam, Roelof Hartplein ', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'}] },
        { name: 'Amsterdam ,De Pijp', connecting: [{num: '12', color: '#BEBFC5', textColor: '#000000'},{num: 'M52', color: '#00B9E8', textColor: '#ffffff'}] },
        { name: 'Amsterdam ,2e van der Helststraat', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '19', color: '#FF4F00', textColor: '#000000'}] },
        { name: 'Amsterdam ,Van Woustraat', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Wibautstraat', connecting: [{num: 'M51', color: '#FF8C00', textColor: '#000000'},{num: 'M53', color: '#FF0800', textColor: '#ffffff'},{num: 'M54', color: '#FDEE00', textColor: '#000000'}] },
        { name: 'Amsterdam ,Camperstraat', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Beukenweg', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Linnaeusstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '245', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Dapperstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '245', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Dapperstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '14', color: '#BEBFC5', textColor: '#000000'},{num: '19', color: '#FF4F00', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
      ]
    },
    {
      id: '26A',
      number: '26',
      type: 'Tram',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Amsterdam Centraal Station - IJburg Strandeiland',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Tram',
      since: '30 mei 2005',
      predecessor: '326',
      image: 'GVB/Lijn_26_Amsterdam.jpg',
      caption: 'Tramlijn 26 rijdt op Amsterdam IJburglaan ',
      frequencies: {
        'Spits': '10x/uur',
        'Dal': '8x/uur',
        'Avond': '6-8x/uur',
        'Zaterdag': '6-8x/uur',
        'Zondag': '6-8x/uur'
      },
      updates: [
        'Per 31 augustus 2026 werd lijn 26 verlengd naar het Strandeiland op IJburg. De bestaande halte met de naam IJburg heette voortaan Theo van Goghpark en werd een halte in twee richtingen. Nieuwe tramhaltes waren Centrumeiland, Buiteneilandlaan en Franz Kafkastraat. De spitsfrequentie werd verhoogd van 8-9x/uur naar 10x/uur en de dalfrequentie werd verlaagd van 8-9x/uur naar 8x/uur.'
      ],
      stops: [
        { name: 'Amsterdam , Centraal Station (Tram Oostzijde)', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam , Muziekgebouw Bimhuis', connecting: [] },
        { name: 'Amsterdam , Kattenburgerstraat', connecting: [{num: '43', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Zuiderzeeweg', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '245', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Bob Haarmslaan', connecting: [] },
        { name: 'Amsterdam , Steigereiland', connecting: [] },
        { name: 'Amsterdam , Vennepluimstraat', connecting: [] },
        { name: 'Amsterdam , Diemerparklaan', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Lumièrestraat', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Theo van Goghpark', connecting: [] },
        { name: 'Amsterdam , Centrumeiland', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '360', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Buiteneilandlaan', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '360', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Franz Kafkastraat', connecting: [] },
      ]
    },
    {
    id: '34A',
      number: '34',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Station Noord - Vogelbuurt',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 maart 2026',
      predecessor: '34,38',
      image: '',
      caption: '-',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4-6x/uur',
        'Zondag': '4-6x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Vogelbuurt",
          stops: [
            { name: 'Amsterdam , Station Noord ', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'}, {num: '39', color: '#BEBFC5', textColor: '#000000'},{num: '111', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam ,  G.J. Scheurleerweg', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}, {num: '247', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Oosterlengte', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'},{num: '245', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Grootzeil', connecting: [] },
            { name: 'Amsterdam , Masthof', connecting: [] },
            { name: 'Amsterdam , Staghof', connecting: [] },
            { name: 'Amsterdam , Tussendek', connecting: [] },
            { name: 'Amsterdam , Voordek', connecting: [] },
            { name: 'Amsterdam , Statenjachtstraat', connecting: [] },
            { name: 'Amsterdam , Tjalkstraat', connecting: [] },
            { name: 'Amsterdam , Barkpad', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Pinksterbloemstraat', connecting: [] },
            { name: 'Amsterdam , Sneeuwbalstraat', connecting: [] }, 
            { name: 'Amsterdam , Mosplein', connecting: [] }, 
            { name: 'Amsterdam , Noorderpark', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Hamerstraat', connecting: [] }, 
            { name: 'Amsterdam , Havikslaan', connecting: [] }, 
            { name: 'Amsterdam , Spreeuwenpark', connecting: [] },
            { name: 'Amsterdam ,  Valkenweg', connecting: [] }, 
          ]
        },
        {
          name: "Richting Amsterdam Station Noord",
          stops: [
            { name: 'Amsterdam ,  Valkenweg', connecting: [] }, 
            { name: 'Amsterdam , Havikslaan', connecting: [] }, 
            { name: 'Amsterdam , Hamerstraat', connecting: [] },
            { name: 'Amsterdam , Johan van Hasseltweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Noorderpark', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Mosplein', connecting: [] }, 
            { name: 'Amsterdam , Sneeuwbalstraat', connecting: [] }, 
            { name: 'Amsterdam , Pinksterbloemstraat', connecting: [] },
            { name: 'Amsterdam , Barkpad', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Tjalkstraat', connecting: [] },
            { name: 'Amsterdam , Statenjachtstraat', connecting: [] },
            { name: 'Amsterdam , Voordek', connecting: [] },
            { name: 'Amsterdam , Tussendek', connecting: [] },
            { name: 'Amsterdam , Staghof', connecting: [] },
            { name: 'Amsterdam , Masthof', connecting: [] },
            { name: 'Amsterdam , Grootzeil', connecting: [] },
            { name: 'Amsterdam , Oosterlengte', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'},{num: '245', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,  G.J. Scheurleerweg', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}, {num: '247', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Station Noord ', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'}, {num: '39', color: '#BEBFC5', textColor: '#000000'},{num: '111', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] }
          ]
        }
      ]
    },
    {
    id: '36A',
      number: '36',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Station Sloterdijk - Olof Palmeplein',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 maart 2026',
      predecessor: '35,36',
      image: 'GVB/Lijn_36_Amsterdam.jpg',
      caption: 'Lijn 36 op Amsterdam de Werengouw',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4-6x/uur',
        'Zondag': '4-6x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Olof Palmeplein",
          stops: [
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '15', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , La Guardiaweg ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '103', color: '#003262', textColor: '#ffffff'},{num: '272', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Basiswege', connecting: [{num: '103', color: '#003262', textColor: '#ffffff'},{num: '272', color: '#003262', textColor: '#ffffff'},{num: '273', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Oostzanerdijk', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'},{num: '103', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Bovenkruier', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Petmolen', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Standerdmolen', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Appelweg', connecting: [] },
            { name: 'Amsterdam , Druivenstraat', connecting: [] },
            { name: 'Amsterdam , Ananasplein', connecting: [] },
            { name: 'Amsterdam , Pomonastraat', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nageljongenstraat', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Atatürk', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Floraweg', connecting: [{num: '391', color: '#FF0800', textColor: '#ffffff'},{num: '394', color: '#FF0800', textColor: '#ffffff'}] }, 
            { name: 'Amsterdam , Mosplein', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Noorderpark', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Johan van Hasseltweg', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Merelstraat', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Rode Kruisstraat', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nieuwe Purmerweg', connecting: [] }, 
            { name: 'Amsterdam , Wervershoofstraat', connecting: [] }, 
            { name: 'Amsterdam , Purmerplein', connecting: [] },
            { name: 'Amsterdam , Purmerweg', connecting: [] },
            { name: 'Amsterdam , Waterlandplein', connecting: [] },
            { name: 'Amsterdam , De Egmondenstraat', connecting: [] },
            { name: 'Amsterdam , Ilperveldstraat', connecting: [] },
            { name: 'Amsterdam , Olof Palmeplein', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'},{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
          ]
        },
        {
          name: "Richting Amsterdam Station Sloterdijk",
          stops: [
            { name: 'Amsterdam , Olof Palmeplein', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'},{num: '39', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Ilperveldstraat', connecting: [] },
            { name: 'Amsterdam , De Egmondenstraat', connecting: [] },
            { name: 'Amsterdam , Waterlandplein', connecting: [] },
            { name: 'Amsterdam , Purmerweg', connecting: [] },
            { name: 'Amsterdam , Purmerplein', connecting: [] },
            { name: 'Amsterdam , Wervershoofstraat', connecting: [] },
            { name: 'Amsterdam , Nieuwe Purmerweg', connecting: [] }, 
            { name: 'Amsterdam , Rode Kruisstraat', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Waddenweg', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Merelstraat', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Johan van Hasseltweg', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Noorderpark', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Mosplein', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Floraweg', connecting: [{num: '391', color: '#FF0800', textColor: '#fffffff'},{num: '394', color: '#FF0800', textColor: '#ffffff'}] }, 
            { name: 'Amsterdam , Atatürk', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Nageljongenstraat', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Pomonastraat', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Ananasplein', connecting: [] },
            { name: 'Amsterdam , Druivenstraat', connecting: [] },
            { name: 'Amsterdam , Appelweg', connecting: [] },
            { name: 'Amsterdam , Standerdmolen', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Petmolen', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Bovenkruier', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Oostzanerdijk', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'},{num: '103', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Basiswege', connecting: [{num: '103', color: '#003262', textColor: '#ffffff'},{num: '272', color: '#003262', textColor: '#ffffff'},{num: '273', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam , La Guardiaweg ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '103', color: '#003262', textColor: '#ffffff'},{num: '272', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '15', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] }
          ]
        }
      ]
    },
    {
      id: '37A',
      number: '37',
      type: 'bus',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Amsterdam Station Noord- Amstelstation',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '22 Juli 2018',
      predecessor: '37',
      image: 'GVB/Lijn_37_Amsterdam.jpg',
      caption: 'Buslijn 37 bij Amsterdam station Noord ',
      frequencies: {
        'Spits': '7-5x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4-6x/uur',
        'Zondag': '4-6x/uur'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      stops: [
        { name: 'Amsterdam , Station Noord ', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}, {num: '39', color: '#BEBFC5', textColor: '#000000'},{num: '111', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam , Buikslotermeerplein', connecting: [] },
        { name: 'Amsterdam , J. Drijverweg ', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Beemsterstraat ', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Dijkmanshuizenstraat ', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Volendammerweg ', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Hilversumstraat', connecting: [] },
        { name: 'Amsterdam , Volkstuin ', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Amsterdam , Liergouw', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Zuiderzeeweg', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Insulindeweg', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '14', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Soembawastraat', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '4', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Molukkenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '19', color: '#FF4F00', textColor: '#000000'},{num: '40', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Muiderpoortstation', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '14', color: '#BEBFC5', textColor: '#000000'},{num: '19', color: '#FF4F00', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam , Dapperstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Beukenplein', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Beukenplein', connecting: [{num: '245', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , James Wattstraat', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Maxwellstraat', connecting: [] },
        { name: 'Amsterdam ,Fizeaustraat', connecting: [{num: '40', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '65', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Amstelstation', connecting: [{num: '40', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
      ]
    },
    {
    id: '38A',
      number: '38',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Station Olof Palmeplein - Overhoeks',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 maart 2026',
      predecessor: '38',
      image: 'GVB/Lijn_38_Amsterdam.jpg',
      caption: 'Lijn 38 bij Amsterdam,Waddenweg.',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-3x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Overhoeks",
          stops: [
            { name: 'Amsterdam , Olof Palmeplein', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Het Breed', connecting: [] },
            { name: 'Amsterdam , Rode Kruisstraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Waddenweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Merelstraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Johan van Hasseltweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Noorderpark', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'},{num: '36', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Mosplein', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Klaprozenweg', connecting: [] },
            { name: 'Amsterdam , Distelweg', connecting: [] },
            { name: 'Amsterdam , Grasweg', connecting: [] },
            { name: 'Amsterdam , Meidoornplein', connecting: [] },
          ]
        },
        {
          name: "Richting Olof Palmeplein",
          stops: [
            { name: 'Amsterdam , Meidoornplein', connecting: [] },
            { name: 'Amsterdam , Noorderpark', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'},{num: '36', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Johan van Hasseltweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Merelstraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Rode Kruisstraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Het Breed', connecting: [] },
            { name: 'Amsterdam , Winkelcentrum', connecting: [] },
            { name: 'Amsterdam , Olof Palmeplein', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
          ]
        }
      ]
    },
    {
    id: '39A',
      number: '39',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Station Olof Palmeplein - Molenwijk',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 maart 2026',
      predecessor: '34,35,36,38',
      image: 'GVB/Lijn_39_Amsterdam.jpg',
      caption: 'Lijn 39 bij Station Olof Palmeplein',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-3x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Molenwijk",
          stops: [
            { name: 'Amsterdam , Olof Palmeplein', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Th. Weeversweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , J. Drijverweg', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Spelderholt', connecting: [] },
            { name: 'Amsterdam , Amerbos', connecting: [] },
            { name: 'Amsterdam , Bakkerswaal', connecting: [] },
            { name: 'Amsterdam , Station Noord ', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}, {num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '111', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] }, 
            { name: 'Amsterdam , G.J. Scheurleerweg', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Oosterlengte', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , BovenIJ Ziekenhuis', connecting: [] },
            { name: 'Amsterdam , Fluitschipstraat', connecting: [] },
            { name: 'Amsterdam , Barkpad', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Floraweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '391', color: '#FF0800', textColor: '#ffffff'},{num: '394', color: '#FF0800', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Atatürk', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nageljongenstraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Pomonastraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Meteorensingel', connecting: [] },
            { name: 'Amsterdam , Maanstraat', connecting: [] },
            { name: 'Amsterdam , Meteorenweg', connecting: [] },
            { name: 'Amsterdam , Kometensingel', connecting: [] },
            { name: 'Amsterdam , Oostzanerdijk', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '103', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Bovenkruier', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Petmolen', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Standerdmolen', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Molenwijk', connecting: [] },
            
          ]
        },
        {
          name: "Richting Olof Palmeplein",
          stops: [
          { name: 'Amsterdam , Molenwijk', connecting: [] },
          { name: 'Amsterdam , Standerdmolen', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Petmolen', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Bovenkruier', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Oostzanerdijk', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '103', color: '#003262', textColor: '#ffffff'}] },
          { name: 'Amsterdam , Kometensingel', connecting: [] },
          { name: 'Amsterdam , Meteorenweg', connecting: [] },
          { name: 'Amsterdam , Maanstraat', connecting: [] },
          { name: 'Amsterdam , Meteorensingel', connecting: [] },
          { name: 'Amsterdam , Pomonastraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Nageljongenstraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Atatürk', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Slijperweg', connecting: [] },
          { name: 'Amsterdam , Barkpad', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Fluitschipstraat', connecting: [] },
          { name: 'Amsterdam , BovenIJ Ziekenhuis', connecting: [] },
          { name: 'Amsterdam , Oosterlengte', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , G.J. Scheurleerweg', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Station Noord ', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}, {num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '111', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] }, 
          { name: 'Amsterdam , Bakkerswaal', connecting: [] },
          { name: 'Amsterdam , Amerbos', connecting: [] },
          { name: 'Amsterdam , Spelderholt', connecting: [] },
          { name: 'Amsterdam , J. Drijverweg', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Th. Weeversweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Olof Palmeplein', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] }
          ]
        }
      ]
    },
    {
    id: '40A',
      number: '40',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Amstelstation - Muiderpoortation',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '28 mei 2006',
      predecessor: '67',
      image: 'GVB/Lijn_40_Amsterdam.jpg',
      caption: 'Lijn 40 rijdt op Hugo de Vrieslaan',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '4-6x/uur',
        'Avond': '3-4x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Muiderpoortation",
          stops: [
            { name: 'Amsterdam ,Amstelstation', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam ,Fizeaustraat', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '65', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Lorentzlaan', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Pekelharingstraat', connecting: [] },
            { name: 'Amsterdam ,Kruislaan', connecting: [] },
            { name: 'Amsterdam ,Linnaeusparkweg', connecting: [] },
            { name: 'Amsterdam ,Station Science Park', connecting: [] },
            { name: 'Amsterdam ,Science Park Aer', connecting: [] },
            { name: 'Amsterdam ,Science Park Aqua', connecting: [] },
            { name: 'Amsterdam , Science Park Terra', connecting: [] },
            { name: 'Amsterdam , Science Park', connecting: [] },
            { name: 'Amsterdam , Carolina Mac Gillavrylaan', connecting: [] },
            { name: 'Amsterdam , Valentijnkade', connecting: [{num: '65', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Molukkenstraat', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Muiderpoortation', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
          ]
        },
        {
          name: "Richting Amstelation",
          stops: [
          { name: 'Amsterdam , Muiderpoortation', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Molukkenstraat', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Valentijnkade', connecting: [{num: '65', color: '#BEBFC5', textColor: '#000000'},] },
          { name: 'Amsterdam , Carolina Mac Gillavrylaan', connecting: [] },
          { name: 'Amsterdam , Science Park', connecting: [] },
          { name: 'Amsterdam , Science Park Terra', connecting: [] },
          { name: 'Amsterdam ,Science Park Aqua', connecting: [] },
          { name: 'Amsterdam ,Science Park Aer', connecting: [] },
          { name: 'Amsterdam ,Station Science Park', connecting: [] },
          { name: 'Amsterdam ,Linnaeusparkweg', connecting: [] },
          { name: 'Amsterdam ,Kruislaan', connecting: [] },
          { name: 'Amsterdam ,Pekelharingstraat', connecting: [] },
          { name: 'Amsterdam ,Lorentzlaan', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Maxwellstraat ', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '65', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Fizeaustraat', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '65', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Amstelstation', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        ]
        }
      ]
    },
    {
    id: '42A',
      number: '42',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Centraal Station - Cruquius-eiland',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 mei 2026',
      predecessor: '22',
      image: 'GVB/Lijn_42_Amsterdam.jpg',
      caption: 'Lijn 42 bij Amsterdam CS',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-4x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Cruquius-eiland ",
          stops: [
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam ,Prins Hendrikkade', connecting: [] },
            { name: 'Amsterdam ,Kadijksplein', connecting: [] },
            { name: 'Amsterdam ,Kattenburgerplein', connecting: [] },
            { name: 'Amsterdam ,Wittenburgergracht', connecting: [] },
            { name: 'Amsterdam ,Oostenburgergracht', connecting: [] },
            { name: 'Amsterdam ,Het Funen', connecting: [] },
            { name: 'Amsterdam ,Veelaan', connecting: [{num: '65', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Th. K. van Lohuizenlaan', connecting: [] },
            { name: 'Amsterdam , Pigmentstraat', connecting: [] },
          ]
        },
      ]
    },
    {
    id: '43A',
      number: '43',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Centraal Station - Borneo-eiland',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '3 Januari 2026',
      predecessor: '48',
      image: 'GVB/Lijn_43_Amsterdam.jpg',
      caption: 'Lijn 43 bij Amsterdam CS',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-3x/uur',
        'Zondag': '2-3x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Borneo-eiland ",
          stops: [
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Piet Heinkade', connecting: [] },
            { name: 'Amsterdam , Kattenburg', connecting: [] },
            { name: 'Amsterdam , Rietlandpark', connecting: [] },
            { name: 'Amsterdam , Amsterdam, Borneolaan', connecting: [] },
          ]
        },
      ]
    },
    {
    id: '44A',
      number: '44',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Bijlmer Arena - Diemen Noord',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '28 mei 2006',
      predecessor: '177',
      image: 'GVB/Lijn_44_Amsterdam.jpg',
      caption: 'Lijn 44',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-3x/uur',
        'Zaterdag': '2-3x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Diemen Noord",
          stops: [
            { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '47', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam ,Bijlmerplein', connecting: [{num: '47', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '276', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Dolingadreef', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Dennenrode', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '330', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Echtenstein', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '370', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Diemen , Nienoord', connecting: [] },
            { name: 'Diemen , Station Diemen Zuid', connecting: [{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Diemen ,Tarwekamp', connecting: [] },
            { name: 'Diemen ,Boven Rijkersloot', connecting: [] },
            { name: 'Diemen ,Beukenhorst', connecting: [] },
            { name: 'Diemen , Diemerbrug', connecting: [] },
            { name: 'Diemen , Prins Bernhardlaan', connecting: [] },
            { name: 'Diemen , Prinses Beatrixlaan', connecting: [] },
            { name: 'Diemen , Winkelcentrum', connecting: [] },
            { name: 'Diemen , Station Diemen', connecting: [] },
            { name: 'Diemen , Diemen, Buitenlust', connecting: [] },
            { name: 'Diemen , Vogelweg', connecting: [] },
            { name: 'Diemen , Rietzangerweg', connecting: [] },
            { name: 'Diemen , Meerkoet', connecting: [] },
            { name: 'Diemen , Tureluurweg', connecting: [] },
            { name: 'Diemen ,  Klipperweg', connecting: [] },
            { name: 'Diemen ,  Diemen Noord', connecting: [] },
          ]
        },
        {
          name: "Richting Amsterdam Bijlmer Arena",
          stops: [
          { name: 'Diemen ,  Diemen Noord', connecting: [] },
          { name: 'Diemen ,  Klipperweg', connecting: [] },
          { name: 'Diemen, Tureluurweg', connecting: [] },
          { name: 'Diemen , Zeezigt', connecting: [] },
          { name: 'Diemen , Oude Waelweg', connecting: [] },
          { name: 'Diemen , Buytenweg', connecting: [] },
          { name: 'Diemen , Buitenlust', connecting: [] },
          { name: 'Diemen , Station Diemen', connecting: [] },
          { name: 'Diemen , Burgemeester Bickerstraat', connecting: [] },
          { name: 'Diemen ,Beukenhorst', connecting: [] },
          { name: 'Diemen ,Boven Rijkersloot', connecting: [] },
          { name: 'Diemen ,Tarwekamp', connecting: [] },
          { name: 'Diemen , Station Diemen Zuid', connecting: [{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Diemen , Nienoord', connecting: [] },
          { name: 'Amsterdam ,Echtenstein', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '370', color: '#FF0800', textColor: '#ffffff'}] },
          { name: 'Amsterdam ,Dennenrode', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '330', color: '#FF0800', textColor: '#ffffff'}] },
          { name: 'Amsterdam ,Dolingadreef', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Foppingadreef', connecting: [{num: '47', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '276', color: '#003262', textColor: '#ffffff'}] },
          { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '47', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        ]
        }
      ]
    },
    {
    id: '47A',
      number: '47',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Bijlmer Arena - Holendrecht Station',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '28 mei 2006',
      predecessor: '59',
      image: 'GVB/Lijn_47_Amsterdam.jpg',
      caption: 'Lijn 47 bij Amsterdam Bijlmer Arena',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-3x/uur',
        'Zaterdag': '3x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Holendrecht Station",
          stops: [
            { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam ,Bijlmerplein', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '276', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Anton de Komplein', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Florijn', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Tulastraat', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Annie Romeinplein', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Ganzenhoef', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Grubbehoeve', connecting: [] },
            { name: 'Amsterdam ,Geerdinkhof', connecting: [] },
            { name: 'Amsterdam , Koornhorst', connecting: [] },
            { name: 'Amsterdam , Kraaiennest', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Gaasperplas', connecting: [{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Leusdenhof', connecting: [] },
            { name: 'Amsterdam , Veenendaalplein', connecting: [] },
            { name: 'Amsterdam , Wamelstraat', connecting: [] },
            { name: 'Amsterdam , Willem Gertenbachstraat', connecting: [] },
            { name: 'Amsterdam , Gein', connecting: [] },
            { name: 'Amsterdam , Woudrichemstraat', connecting: [] },
            { name: 'Amsterdam , Staverdenplein', connecting: [] },
            { name: 'Amsterdam , Schaarsbergenstraat', connecting: [] },
            { name: 'Amsterdam , Schoonhovendreef', connecting: [] },
            { name: 'Amsterdam , Reigersbos', connecting: [] },
            { name: 'Amsterdam , Rhenenhof', connecting: [] },
            { name: 'Amsterdam , Meernhof', connecting: [] },
            { name: 'Amsterdam , Holendrechtplein', connecting: [] },
            { name: 'Amsterdam ,  Holendrecht Station', connecting: [] },
          ]
        },
        {
          name: "Richting Amsterdam Bijlmer Arena",
          stops: [
          { name: 'Amsterdam ,  Holendrecht Station', connecting: [] },
          { name: 'Amsterdam , Holendrechtplein', connecting: [] },
          { name: 'Amsterdam , Meernhof', connecting: [] },
          { name: 'Amsterdam , Rhenenhof', connecting: [] },
          { name: 'Amsterdam , Reigersbos', connecting: [] },
          { name: 'Amsterdam , Schoonhovendreef', connecting: [] },
          { name: 'Amsterdam , Schaarsbergenstraat', connecting: [] },
          { name: 'Amsterdam , Staverdenplein', connecting: [] },
          { name: 'Amsterdam , Woudrichemstraat', connecting: [] },
          { name: 'Amsterdam , Gein', connecting: [] },
          { name: 'Amsterdam , Willem Gertenbachstraat', connecting: [] },
          { name: 'Amsterdam , Wamelstraat', connecting: [] },
          { name: 'Amsterdam , Veenendaalplein', connecting: [] },
          { name: 'Amsterdam , Leusdenhof', connecting: [] },
          { name: 'Amsterdam , Gaasperplas', connecting: [{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Kraaiennest', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Koornhorst', connecting: [] },
          { name: 'Amsterdam , Geerdinkhof', connecting: [] },
          { name: 'Amsterdam , Grubbehoeve', connecting: [] },
          { name: 'Amsterdam , Ganzenhoef', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Annie Romeinplein', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Tulastraat', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Florijn', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Anton de Komplein', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Foppingadreef', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '276', color: '#003262', textColor: '#ffffff'}] },
          { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        ]
        }
      ]
    },
    {
    id: '48A',
      number: '48',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Centraal Station - Houthavens',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '3 Januari 2026',
      predecessor: '48',
      image: 'GVB/Lijn_48_Amsterdam.jpg',
      caption: 'Lijn 48 bij Amsterdam CS',
      frequencies: {
        'Spits': '6-12x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4x/uur',
        'Zondag': '4x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Houthavens",
          stops: [
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Westerdoksdijk', connecting: [] },
            { name: 'Amsterdam , Barentszplein', connecting: [] },
            { name: 'Amsterdam , Houtmankade', connecting: [] },
            { name: 'Amsterdam , Spaarndammerstraat', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Haparandaweg', connecting: [] },
            { name: 'Amsterdam , Haparandaweg', connecting: [] },
          ]
        },
      ]
    },
    {
    id: '61A',
      number: '61',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Sloterdijk- Osdorpplein',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '3 Januari 2021',
      predecessor: '61',
      image: 'GVB/Lijn_61_Amsterdam.jpg',
      caption: 'Buslijn 61 rijdt bij Amsterdam',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Osdorpplein Noord",
          stops: [
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Plesostraat', connecting: [{num: '231', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Naritaweg', connecting: [{num: '231', color: '#BEBFC5', textColor: '#000000'},{num: '382', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Seineweg', connecting: [] },
            { name: 'Amsterdam , Antony Moddermanstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jacob Cabeliaustraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Aalbersestraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Sam van Houtenstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Michel de Klerkhof', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Troelstralaan', connecting: [] },
            { name: 'Amsterdam ,Willinklaan', connecting: [] },
            { name: 'Amsterdam ,Herman Bonpad', connecting: [] },
            { name: 'Amsterdam ,Ookmeerweg', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'},{num: '369', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Osdorper Ban', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Osdorpplein Noord', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: '71', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] }, 
            
          ]
        },
        {
          name: "Richting Station Sloterdijk ",
          stops: [
            { name: 'Amsterdam ,Osdorper Ban', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: '71', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] }, 
            { name: 'Amsterdam ,Osdorper Ban', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Ookmeerweg', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'},{num: '369', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Herman Bonpad', connecting: [] },
            { name: 'Amsterdam ,Willinklaan', connecting: [] },
            { name: 'Amsterdam ,Troelstralaan', connecting: [] },
            { name: 'Amsterdam ,Michel de Klerkhof', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Sam van Houtenstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Aalbersestraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Dr. H. Colijnstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Antony Moddermanstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Seineweg', connecting: [] },
            { name: 'Amsterdam , Naritaweg', connecting: [{num: '231', color: '#BEBFC5', textColor: '#000000'},{num: '382', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Plesostraat', connecting: [{num: '231', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Antony Moddermanstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Seineweg', connecting: [] },
            { name: 'Amsterdam , Naritaweg', connecting: [{num: '231', color: '#BEBFC5', textColor: '#000000'},{num: '382', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Plesostraat', connecting: [{num: '231', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] }
          ]
        }
      ]
    },
    {
    id: '63A',
      number: '63',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Station Lelylaan - Osdorp De Aker',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '28 mei 2006',
      predecessor: '23',
      image: 'GVB/Lijn_63_Amsterdam.jpg',
      caption: 'Buslijn 63 rijdt bij Amsterdam',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Osdorp De Aker",
          stops: [
            { name: 'Amsterdam , Station Lelylaan', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Cornelis Lelylaan', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Hemsterhuisstraat', connecting: [] },
            { name: 'Amsterdam , Van Mourik Broekmanstraat', connecting: [] },
            { name: 'Amsterdam , Piet Wiedijkstraat', connecting: [] },
            { name: 'Amsterdam , C.K. Eloutstraat', connecting: [] },
            { name: 'Amsterdam , Meer en Vaart', connecting: [] },
            { name: 'Amsterdam , Osdorpplein Oost', connecting: [{num: '71', color: '#BEBFC5', textColor: '#000000'},{num: '369', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Osdorper Ban', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Bullepad', connecting: [] }, 
            { name: 'Amsterdam ,Reimerswaalstraat', connecting: [] }, 
            { name: 'Amsterdam ,Saaftingestraat', connecting: [] }, 
            { name: 'Amsterdam ,Baden Powellweg', connecting: [] }, 
            { name: 'Amsterdam ,Jan Rebelstraat', connecting: [] }, 
            { name: 'Amsterdam ,Griendstraat', connecting: [] }, 
            { name: 'Amsterdam , Matterhorn', connecting: [{num: '71', color: '#BEBFC5', textColor: '#000000'}] }, 
          ]
        },
        {
          name: "Richting Station Lelylaan ",
          stops: [
            { name: 'Amsterdam , Matterhorn', connecting: [{num: '71', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Griendstraat', connecting: [] }, 
            { name: 'Amsterdam ,Zuidermolenweg', connecting: [] }, 
            { name: 'Amsterdam ,Baden Powellweg', connecting: [] },
            { name: 'Amsterdam ,Saaftingestraat', connecting: [] }, 
            { name: 'Amsterdam ,Reimerswaalstraat', connecting: [] }, 
            { name: 'Amsterdam ,Bullepad', connecting: [] }, 
            { name: 'Amsterdam ,Osdorper Ban', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Osdorpplein Oost', connecting: [{num: '71', color: '#BEBFC5', textColor: '#000000'},{num: '369', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Meer en Vaart', connecting: [] },
            { name: 'Amsterdam , C.K. Eloutstraat', connecting: [] },
            { name: 'Amsterdam , Piet Wiedijkstraat', connecting: [] },
            { name: 'Amsterdam , Van Mourik Broekmanstraat', connecting: [] },
            { name: 'Amsterdam , Hemsterhuisstraat', connecting: [] },
            { name: 'Amsterdam , Cornelis Lelylaan', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Station Lelylaan', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'}] },
          ]
        }
      ]
    },
    {
    id: '65A',
      number: '65',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Amstelstation - KNSM-eiland',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '8 december 2023',
      predecessor: '65',
      image: 'GVB/Lijn_65_Amsterdam.jpg',
      caption: 'Buslijn 65 op het Amstelstation',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '5x/uur',
        'Avond': '4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-4x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting KNSM-eiland",
          stops: [
            { name: 'Amsterdam , Amstelstation', connecting: [{num: '40', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Fizeaustraat', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '40', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Maxwellstraat', connecting: [] },
            { name: 'Amsterdam , Middenweg', connecting: [] },
            { name: 'Amsterdam , Radioweg', connecting: [] },
            { name: 'Amsterdam , Archimedesweg', connecting: [] },
            { name: 'Amsterdam , Valentijnkade', connecting: [{num: '40', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Javaplein', connecting: [] },
            { name: 'Amsterdam , Zeeburgerdijk', connecting: [] },
            { name: 'Amsterdam ,Veelaan', connecting: [{num: '42', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam ,Borneolaan', connecting: [] }, 
            { name: 'Amsterdam ,Cornelis van Eesterenlaan', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'}] }, 
            { name: 'Amsterdam ,Azartplein', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'}] }, 
            { name: 'Amsterdam ,Levantplein', connecting: [] }, 
            { name: 'KNSM-laan', connecting: [] },  
          ]
        },
      ]
    },
    {
    id: '66A',
      number: '66',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Bijlmer Arena - IJburg',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 Augustus 2009',
      predecessor: '-',
      image: 'GVB/Lijn_66_Amsterdam.jpg',
      caption: 'Lijn 66 bij Amsterdam Bijlmer Arena',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-3x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting IJburg",
          stops: [
            { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam ,Bijlmerplein', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '276', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Anton de Komplein', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Florijn', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Tulastraat', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Annie Romeinplein', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Ganzenhoef', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Geldershoofd', connecting: [] },
            { name: 'Diemen , Provincialeweg', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '330', color: '#FF0800', textColor: '#ffffff'},{num: '370', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Diemen , Vinkenbrug', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '370', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Diemen , Stammerkamp', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '330', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Diemen , Diemerknoop', connecting: [{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '320', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam, Peter Martensstraat', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '360', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Pieter Oosterhuisstraat', connecting: [] },
            { name: 'Amsterdam, Lumièrestraat', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Diemerparklaan', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Vennepluimstraat', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'}] },
            
            
          ]
        },
        {
          name: "Richting Amsterdam Bijlmer Arena",
          stops: [
          { name: 'Amsterdam, Vennepluimstraat', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam, Diemerparklaan', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam, Lumièrestraat', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam, Pieter Oosterhuisstraat', connecting: [] },
          { name: 'Amsterdam, Peter Martensstraat', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '360', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Diemen , Diemerknoop', connecting: [{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '320', color: '#FF0800', textColor: '#ffffff'}] },
          { name: 'Diemen , Stammerkamp', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '330', color: '#FF0800', textColor: '#ffffff'}] },
          { name: 'Diemen , Vinkenbrug', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '370', color: '#FF0800', textColor: '#ffffff'}] },
          { name: 'Diemen , Provincialeweg', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '330', color: '#FF0800', textColor: '#ffffff'},{num: '370', color: '#FF0800', textColor: '#ffffff'}] },
          { name: 'Amsterdam ,Geldershoofd', connecting: [] },
          { name: 'Amsterdam , Ganzenhoef', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Annie Romeinplein', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Tulastraat', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Florijn', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Anton de Komplein', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Foppingadreef', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '276', color: '#003262', textColor: '#ffffff'}] },
          { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        ]
        }
      ]
    },
    {
    id: '160C',
      number: '160',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Hoofddorp Station - Hoofddorp Centrum',     
      operator: 'Connexxion',
      concession: 'Amstelland-Meerland',
      lineType: 'Stadsbus',
      since: '3 Januari 2021',
      predecessor: '161',
      image: 'Transdev/Lijn_160_Hoofddorp.jpg',
      caption: 'Lijn 160 op Hoofddorp Station',
      frequencies: {
        'Spits': '1x/uur',
        'Dal': '1x/uur',
        'Avond': 'niet rijdt',
        'Zaterdag': 'niet rijdt',
        'Zondag': 'niet rijdt'
      },
      updates: [
        'Op 3 januari 2021 werd de bediening van de route via het Arnolduspark afgesplitst van lijn 161 in de nieuwe lijn 160.'
      ],
      directions: [
        {
          name: "Richting Hoofddorp Centrum",
          stops: [
            { name: 'Hoofddorp ,Station', connecting: [{num: '161', color: '#BEBFC5', textColor: '#000000'},{num: '162', color: '#BEBFC5', textColor: '#000000'},{num: '163', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Hoofddorp , Kalorama', connecting: [] },
            { name: 'Hoofddorp , Koning Willem I laan', connecting: [] },
            { name: 'Hoofddorp , Boslaan', connecting: [] },
            { name: 'Hoofddorp , Arnolduspark', connecting: [] },
            { name: 'Hoofddorp , Van den Berghlaan', connecting: [] },
            { name: 'Hoofddorp , Draverslaan', connecting: [] },
            { name: 'Hoofddorp , Marktplein', connecting: [] },
            { name: 'Hoofddorp , Hoofddorp Centrum', connecting: [{num: '161', color: '#BEBFC5', textColor: '#000000'},{num: '162', color: '#BEBFC5', textColor: '#000000'},{num: '169  ', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        },
        {
          name: "Richting Hoofddorp Station",
          stops: [
         { name: 'Hoofddorp , Hoofddorp Centrum', connecting: [{num: '161', color: '#BEBFC5', textColor: '#000000'},{num: '162', color: '#BEBFC5', textColor: '#000000'},{num: '169  ', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
         { name: 'Hoofddorp , Marktplein', connecting: [] },
         { name: 'Hoofddorp , Draverslaan', connecting: [] },
         { name: 'Hoofddorp , Van den Berghlaan', connecting: [] },
        { name: 'Hoofddorp , Arnolduspark', connecting: [] },
        { name: 'Hoofddorp , Koning Willem I laan', connecting: [] },
        { name: 'Hoofddorp , Kalorama', connecting: [] },
         { name: 'Hoofddorp ,Station', connecting: [{num: '161', color: '#BEBFC5', textColor: '#000000'},{num: '162', color: '#BEBFC5', textColor: '#000000'},{num: '163', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        ]
        }
      ]
    },
    {
      id: '233A',
      number: '233',
      type: 'Stadsbus',
      color: '#BEBFC5',
      textcolor: '#ffffff',
      title: 'Amsterdam Sloterdijk - Westpoort',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Bus',
      since: '11 oktober 2021',
      predecessor: '-',
      image: 'GVB/Lijn_233_Amsterdam.jpg',
      caption: 'Buslijn 233 op Station Sloterdijk',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '2x/uur',
        'Zaterdag': 'niet rijdt',
        'Zondag': 'niet rijdt'
      },
      updates: [
        'Met ingang van 15 december 2024 gingen voortaan ook \'s ochtends de ritten richting station Sloterdijk en \'s middags de ritten richting Westpoort via de Hornweg rijden en de halte Maltaweg bedienen.',
      ],
      stops: [
        { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Maltaweg', connecting: [] },
        { name: 'Siciliëweg', connecting: [] },
      ]
    },
    {
    id: '360A',
      number: '360',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Bijlmer Arena - IJburg Strandeiland',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '15 December 2024',
      predecessor: '-',
      image: 'GVB/Lijn_360_Amsterdam.jpg',
      caption: 'Buslijn 360 bij Amsterdam Bijlmer Arena',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '4x/uur',
        'Zaterdag': '4x/uur',
        'Zondag': '4x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting IJburg Strandeiland",
          stops: [
            { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Gaasperplas', connecting: [{num: '47', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Diemen , Diemerknoop', connecting: [{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '320', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam, Pieter Oosterhuisstraat', connecting: [{num: '47', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Centrumeiland', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Buiteneilandlaan', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'}] },
          ]
        },
      ]
    },
    {
    id: '369A',
      number: '369',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Station Sloterdijk - Amsterdam Schiphol Airport',     
      operator: 'GVB (Randstadnet)',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: 'Januari 3 2021',
      predecessor: '69',
      image: 'GVB/Lijn_369_Amsterdam.jpg',
      caption: 'Buslijn 369 rijdt bij Schiphol',
      frequencies: {
        'Spits': '4-8x/uur',
        'Dal': '4-8x/uur',
        'Avond': '3-8x/uur',
        'Zaterdag': '3-6x/uur',
        'Zondag': '3-6x/uur'
      },
      updates: [
        'Met ingang van 4 juli 2026 werd de dienstregeling tijdens de zomervakantie aangepast: in het weekend werd voortaan over het gehele traject 3x/uur of 4x/uur gereden.'
      ],
      directions: [
        {
          name: "Richting Schiphol Airport",
          stops: [
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Plein 40-45 ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Burgemeester Röellstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Ookmeerweg', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Osdorpplein Oost', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: '71', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Louis Davidsstraat', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam, Antwerpenbaan', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Antwerpenbaan', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Belgiëplein', connecting: [{num: '195', color: '#0000FF', textColor: '#ffffff'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Anderlechtlaan', connecting: [{num: '218', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Knooppunt Schiphol Nrd', connecting: [{num: '180', color: '#0000FF', textColor: '#ffffff'},{num: '181', color: '#0000FF', textColor: '#ffffff'},{num: '186', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam, Schiphol Airport/Plaza', connecting: [{num: '180', color: '#0000FF', textColor: '#ffffff'},{num: '181', color: '#0000FF', textColor: '#ffffff'},{num: '185', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
          ]
        },
      ]
    },
    {
    id: '464A',
      number: '464',
      type: 'bus',
      color: '#7BA05B',
      textColor: '#000000',
      title: 'Amsterdam Groot Gelderlandplein - Vivaldi',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '28 Febuari 2022',
      predecessor: '-',
      image: 'GVB/Lijn_464_Amsterdam.jpg',
      caption: 'Buslijn 464 op Amsterdam ',
      frequencies: {
        'Spits': 'rijdt niet',
        'Dal': '2-3x/uur',
        'Avond': 'rijdt niet',
        'Zaterdag': '2x/uur',
        'Zondag': '	2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Vivaldi",
          stops: [
            { name: 'Amsterdam , Gelderlandplein Noordoost', connecting: [{num: '461', color: '#000000', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Weerdestein', connecting: [] },
            { name: 'Amsterdam , Barbara Strozzilaan', connecting: [] },
            { name: 'Amsterdam , Domenico Scarlattilaan', connecting: [] },
            { name: 'Amsterdam , Antonio Vivaldistraat', connecting: [] },
          ]
        },
        {
          name: "Richting Groot Gelderlandplein",
          stops: [
            { name: 'Amsterdam , Antonio Vivaldistraat', connecting: [] },
            { name: 'Amsterdam , Gelderlandplein Noordoost', connecting: [{num: '461', color: '#000000', textColor: '#ffffff'}] },
          ]
        },
      ]
    },
    {
    id: '463A',
      number: '463',
      type: 'bus',
      color: '#FE6F5E',
      textColor: '#000000',
      title: 'Amsterdam Groot Gelderlandplein - Bolestein',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '18 December 2015',
      predecessor: '-',
      image: 'GVB/Lijn_463_Amsterdam.jpg',
      caption: 'Buslijn 463 op Gelderlandplein Oost ',
      frequencies: {
        'Spits': 'rijdt niet',
        'Dal': '2x/uur',
        'Avond': 'rijdt niet',
        'Zaterdag': '2x/uur',
        'Zondag': '	2x/uur'
      },
      updates: [
        'Op 28 februari 2022 werden de haltes Gijsbrecht van Aemstelpark en Nieuwerhoek toegevoegd aan de route van deze buslijn. In het weekend verviel de laatste rit en ontstonden er twee gaten van een uur in de dienstregeling.'
      ],
      directions: [
        {
          name: "Richting Bolestein",
          stops: [
            { name: 'Amsterdam , Gelderlandplein Oost', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Gijsbrecht van Aemstelpark', connecting: [] },
            { name: 'Amsterdam , Kastelenstraat ', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Backershagen ', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Van Boshuizenstraat', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Noordhollandstraat', connecting: [] },
            { name: 'Amsterdam , Van der Boechorststraat ', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '6', color: '#BEBFC5', textColor: '#ffffff'},{num: '25', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Bolestein', connecting: [] },
            { name: 'Amsterdam , Nieuwerhoek', connecting: [] },
            { name: 'Amsterdam , Egelenburg', connecting: [] },
            { name: 'Amsterdam , Radboud', connecting: [] },
            { name: 'Amsterdam , Arent Janszoon Ernststraat', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '6', color: '#BEBFC5', textColor: '#ffffff'},{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Gelderlandplein Noordoost', connecting: [{num: '461', color: '#000000', textColor: '#ffffff'}, {num: '464', color: '#7BA05B', textColor: '#000000'}] },
          ]
        }
      ]
    },

    // ==========================================
    // ---> PASTE FUTURE ROUTES RIGHT HERE <---
    // ==========================================

  ] // <--- DO NOT DELETE THIS CLOSING BRACKET
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderHomeLists();
});

// Navigation Controller
function showView(viewId) {
  document.querySelectorAll('.view-content').forEach(view => view.classList.add('hidden'));
  document.getElementById(viewId).classList.remove('hidden');
  window.scrollTo(0, 0);
}

// Render Homepage Search Lists
function renderHomeLists() {
  const routesContainer = document.getElementById('routes-list');
  const stationsContainer = document.getElementById('stations-list');

  // Render Routes
  routesContainer.innerHTML = appData.routes.map(r => `
    <div onclick="openRoute('${r.id}')" class="flex items-center gap-3 p-2.5 rounded-lg border border-gray-100 hover:bg-emerald-50 cursor-pointer transition">
      <span class="route-badge" style="background-color: ${r.color};">
        <i class="fa-solid fa-bus text-xs mr-1.5"></i> ${r.number}
      </span>
      <span class="text-sm font-medium text-gray-800">${r.title}</span>
    </div>
  `).join('');

  // Extract all unique stations across single-direction and multi-direction routes
  const stationsMap = {};
  appData.routes.forEach(route => {
    const allStops = [];
    if (route.directions) {
      route.directions.forEach(d => allStops.push(...d.stops));
    } else if (route.stops) {
      allStops.push(...route.stops);
    }

    allStops.forEach(stop => {
      if (!stationsMap[stop.name]) {
        stationsMap[stop.name] = [];
      }
      if (!stationsMap[stop.name].some(r => r.id === route.id)) {
        stationsMap[stop.name].push(route);
      }
    });
  });

  stationsContainer.innerHTML = Object.keys(stationsMap).map(stationName => `
    <div onclick="openStation('${stationName}')" class="flex items-center justify-between p-2.5 rounded-lg border border-gray-100 hover:bg-emerald-50 cursor-pointer transition">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-location-dot text-emerald-600 text-sm"></i>
        <span class="text-sm font-medium text-gray-800">${stationName}</span>
      </div>
      <div class="flex gap-1">
        ${stationsMap[stationName].map(r => `
          <span class="stop-connecting-badge" style="background-color: ${r.color}">${r.number}</span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Search Filters
function filterRoutes() {
  const query = document.getElementById('route-input').value.toLowerCase();
  const items = document.getElementById('routes-list').children;
  Array.from(items).forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(query) ? 'flex' : 'none';
  });
}

function filterStations() {
  const query = document.getElementById('station-input').value.toLowerCase();
  const items = document.getElementById('stations-list').children;
  Array.from(items).forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(query) ? 'flex' : 'none';
  });
}

// Open Route Detail Page
function openRoute(routeId) {
  const route = appData.routes.find(r => r.id === routeId);
  if (!route) return;

  // Header and Infobox
  const infoboxHeader = document.getElementById('infobox-header');
  infoboxHeader.style.backgroundColor = route.color;
  document.getElementById('infobox-title').innerText = `Lijn ${route.number}`;
  
  document.getElementById('infobox-operator').innerText = route.operator;
  document.getElementById('infobox-concession').innerText = route.concession;
  document.getElementById('infobox-type').innerText = route.lineType;
  document.getElementById('infobox-since').innerText = route.since;
  document.getElementById('infobox-predecessor').innerText = route.predecessor;

  // Frequencies Table
  const freqTable = document.getElementById('infobox-frequencies');
  freqTable.innerHTML = Object.entries(route.frequencies).map(([key, val]) => `
    <tr>
      <th class="py-1.5 px-3 font-semibold text-gray-700 bg-gray-50 w-2/5">${key}</th>
      <td class="py-1.5 px-3 text-gray-800">${val}</td>
    </tr>
  `).join('');

  // Image & Caption
  document.getElementById('infobox-img').src = route.image;
  document.getElementById('infobox-img-caption').innerText = route.caption;

  // Render Stops (Haltes) - Supports single stops list & multi-direction lists
  const stopsList = document.getElementById('route-stops-list');

  if (route.directions && route.directions.length > 0) {
    stopsList.innerHTML = route.directions.map(dir => `
      <div class="mb-6 last:mb-0">
        <h3 class="text-md font-bold text-slate-800 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-100 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-arrows-left-right text-emerald-600 text-xs"></i>
          ${dir.name}
        </h3>
        <div class="space-y-2 pl-2">
          ${dir.stops.map(stop => `
            <div class="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${route.color}"></span>
                <span class="text-gray-800 font-medium text-sm">${stop.name}</span>
              </div>
              <div class="flex items-center gap-1">
                ${stop.connecting.map(c => `
                  <span class="stop-connecting-badge" style="background-color: ${c.color}; color: ${c.textColor || '#ffffff'};">
                    ${c.num}
                  </span>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  } else if (route.stops) {
    stopsList.innerHTML = route.stops.map(stop => `
      <div class="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${route.color}"></span>
          <span class="text-gray-800 font-medium text-sm">${stop.name}</span>
        </div>
        <div class="flex items-center gap-1">
          ${stop.connecting.map(c => `
            <span class="stop-connecting-badge" style="background-color: ${c.color}; color: ${c.textColor || '#ffffff'};">
              ${c.num}
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Updates List
  const updatesList = document.getElementById('route-updates-list');
  if (route.updates && route.updates.length > 0) {
    updatesList.innerHTML = route.updates.map(u => `<li>${u}</li>`).join('');
  } else {
    updatesList.innerHTML = '<li class="text-gray-500 italic">Geen recente updates bekend.</li>';
  }

  showView('route-detail-view');
}

// Open Station View
function openStation(stationName) {
  document.getElementById('station-detail-title').innerText = stationName;
  const linesContainer = document.getElementById('station-detail-lines');
  
  const matchingRoutes = appData.routes.filter(r => {
    if (r.directions) {
      return r.directions.some(d => d.stops.some(s => s.name === stationName));
    }
    return r.stops && r.stops.some(s => s.name === stationName);
  });
  
  linesContainer.innerHTML = matchingRoutes.map(r => `
    <div onclick="openRoute('${r.id}')" class="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
      <div class="flex items-center gap-3">
        <span class="route-badge" style="background-color: ${r.color}">Lijn ${r.number}</span>
        <span class="font-medium text-gray-800">${r.title}</span>
      </div>
      <i class="fa-solid fa-chevron-right text-gray-400 text-sm"></i>
    </div>
  `).join('');

  showView('station-detail-view');
}

// Global Header Search Bar Handler
function handleGlobalSearch(query) {
  const dropdown = document.getElementById('search-dropdown');
  const q = query.trim().toLowerCase();
  
  if (!q) {
    dropdown.classList.add('hidden');
    return;
  }

  const matchedRoutes = appData.routes.filter(r => 
    r.number.toLowerCase().includes(q) || r.title.toLowerCase().includes(q)
  );

  const matchedStations = [];
  appData.routes.forEach(r => {
    const allStops = [];
    if (r.directions) {
      r.directions.forEach(d => allStops.push(...d.stops));
    } else if (r.stops) {
      allStops.push(...r.stops);
    }

    allStops.forEach(s => {
      if (s.name.toLowerCase().includes(q) && !matchedStations.includes(s.name)) {
        matchedStations.push(s.name);
      }
    });
  });

  if (matchedRoutes.length === 0 && matchedStations.length === 0) {
    dropdown.innerHTML = `<div class="p-3 text-sm text-gray-500">Geen resultaten gevonden</div>`;
  } else {
    let html = '';
    if (matchedRoutes.length > 0) {
      html += `<div class="px-3 py-1.5 text-xs font-bold text-gray-400 uppercase bg-gray-50">Routes</div>`;
      html += matchedRoutes.map(r => `
        <div onclick="openRoute('${r.id}'); document.getElementById('search-dropdown').classList.add('hidden');" class="px-4 py-2 hover:bg-emerald-50 cursor-pointer flex items-center justify-between">
          <span class="text-sm text-gray-800 font-medium">${r.title}</span>
          <span class="stop-connecting-badge" style="background-color: ${r.color}">${r.number}</span>
        </div>
      `).join('');
    }
    if (matchedStations.length > 0) {
      html += `<div class="px-3 py-1.5 text-xs font-bold text-gray-400 uppercase bg-gray-50">Stations & Haltes</div>`;
      html += matchedStations.map(s => `
        <div onclick="openStation('${s}'); document.getElementById('search-dropdown').classList.add('hidden');" class="px-4 py-2 hover:bg-emerald-50 cursor-pointer text-sm text-gray-800">
          <i class="fa-solid fa-location-dot text-emerald-600 mr-2"></i> ${s}
        </div>
      `).join('');
    }
    dropdown.innerHTML = html;
  }
  dropdown.classList.remove('hidden');
}