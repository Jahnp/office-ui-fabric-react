// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import { IIconOptions, IIconSubset, registerIcons } from '@uifabric/styling';

export function initializeIcons(baseUrl: string = '', options?: IIconOptions): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-4"`,
      src: `url('${baseUrl}fabric-icons-4-0721c5c2.woff') format('woff')`
    },
    icons: {
      HandsFree: '\uEAD0',
      Medical: '\uEAD4',
      Running: '\uEADA',
      Weights: '\uEADB',
      Trackers: '\uEADF',
      AddNotes: '\uEAE3',
      AllCurrency: '\uEAE4',
      BarChart4: '\uEAE7',
      CirclePlus: '\uEAEE',
      Coffee: '\uEAEF',
      Cotton: '\uEAF3',
      Market: '\uEAFC',
      Money: '\uEAFD',
      PieDouble: '\uEB04',
      PieSingle: '\uEB05',
      RemoveFilter: '\uEB08',
      Savings: '\uEB0B',
      Sell: '\uEB0C',
      StockDown: '\uEB0F',
      StockUp: '\uEB11',
      Lamp: '\uEB19',
      Source: '\uEB1B',
      MSNVideos: '\uEB1C',
      Cricket: '\uEB1E',
      Golf: '\uEB1F',
      Baseball: '\uEB20',
      Soccer: '\uEB21',
      MoreSports: '\uEB22',
      AutoRacing: '\uEB24',
      CollegeHoops: '\uEB25',
      CollegeFootball: '\uEB26',
      ProFootball: '\uEB27',
      ProHockey: '\uEB28',
      Rugby: '\uEB2D',
      SubstitutionsIn: '\uEB31',
      Tennis: '\uEB33',
      Arrivals: '\uEB34',
      Design: '\uEB3C',
      Website: '\uEB41',
      Drop: '\uEB42',
      HistoricalWeather: '\uEB43',
      SkiResorts: '\uEB45',
      Snowflake: '\uEB46',
      BusSolid: '\uEB47',
      FerrySolid: '\uEB48',
      AirplaneSolid: '\uEB4C',
      TrainSolid: '\uEB4D',
      Ticket: '\uEB54',
      WifiWarning4: '\uEB63',
      Devices4: '\uEB66',
      AzureLogo: '\uEB6A',
      BingLogo: '\uEB6B',
      MSNLogo: '\uEB6C',
      OutlookLogoInverse: '\uEB6D',
      OfficeLogo: '\uEB6E',
      SkypeLogo: '\uEB6F',
      Door: '\uEB75',
      EditMirrored: '\uEB7E',
      GiftCard: '\uEB8E',
      DoubleBookmark: '\uEB8F',
      StatusErrorFull: '\uEB90',
      Certificate: '\uEB95',
      FastForward: '\uEB9D',
      Rewind: '\uEB9E',
      Photo2: '\uEB9F',
      OpenSource: '\uEBC2',
      Movers: '\uEBCD',
      CloudDownload: '\uEBD3',
      Family: '\uEBDA',
      WindDirection: '\uEBE6',
      Bug: '\uEBE8',
      SiteScan: '\uEBEC',
      BrowserScreenShot: '\uEBED',
      F12DevTools: '\uEBEE',
      CSS: '\uEBEF',
      JS: '\uEBF0',
      DeliveryTruck: '\uEBF4',
      ReminderPerson: '\uEBF7',
      ReminderGroup: '\uEBF8',
      TabletMode: '\uEBFC',
      Umbrella: '\uEC04',
      NetworkTower: '\uEC05',
      CityNext: '\uEC06',
      CityNext2: '\uEC07',
      Section: '\uEC0C',
      OneNoteLogoInverse: '\uEC0D',
      ToggleFilled: '\uEC11',
      ToggleBorder: '\uEC12',
      SliderThumb: '\uEC13',
      ToggleThumb: '\uEC14',
      Documentation: '\uEC17',
      Badge: '\uEC1B',
      Giftbox: '\uEC1F',
      VisualStudioLogo: '\uEC22',
      HomeGroup: '\uEC26',
      ExcelLogoInverse: '\uEC28',
      WordLogoInverse: '\uEC29',
      PowerPointLogoInverse: '\uEC2A',
      Cafe: '\uEC32',
      SpeedHigh: '\uEC4A'
    }
  };

  registerIcons(subset, options);
}
