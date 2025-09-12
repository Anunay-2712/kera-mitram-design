import { createContext, useContext } from 'react';

export type Language = 'ml' | 'en';

export const translations = {
  ml: {
    // Main Navigation & Dashboard
    greeting: "നമസ്കാരം രാജു! 👋",
    welcomeBack: "Welcome back to your AI Farming Assistant",
    setupProfile: "Setup Profile",
    cropHealth: "Crop Health",
    activeAlerts: "Active Alerts",
    estProfit: "Est. Profit",
    activities: "Activities",
    dashboard: "Dashboard",
    aiChat: "AI Chat",
    advisory: "Advisory",
    recentAdvisory: "Recent Advisory",
    active: "Active",
    translateTo: "English",

    // Hero Section
    heroTitle: "കേരള കർഷക സഹായി",
    heroSubtitle: "AI Farming Assistant for Kerala",
    heroDescription: "Smart farming solutions powered by AI. Get personalized advice, track your crops, and maximize your harvest with traditional wisdom meets modern technology.",
    startJourney: "Start Farming Journey",
    talkToAI: "Talk to AI Assistant",
    malayalamAIChat: "Malayalam AI Chat",
    malayalamAIChatDesc: "Talk to our AI in Malayalam. Get instant answers about crops, weather, and farming techniques.",
    smartAdvisory: "Smart Advisory",
    smartAdvisoryDesc: "Personalized farming advice based on your land, crops, and local weather conditions.",
    smartAlerts: "Smart Alerts",
    smartAlertsDesc: "Never miss important farming activities with timely reminders and weather alerts.",

    // Onboarding Form
    farmProfileSetup: "Farm Profile Setup",
    stepOf: "Step {current} of {total}",
    previous: "Previous",
    nextStep: "Next Step",
    completeSetup: "Complete Setup",
    
    // Onboarding Steps
    farmerInfo: "കർഷകന്റെ വിവരങ്ങൾ",
    farmerInfoEn: "Farmer Information",
    name: "പേര് / Name",
    enterFullName: "Enter your full name",
    location: "സ്ഥലം / Location",
    villageDistrict: "Village, District",
    
    landInfo: "ഭൂമിയുടെ വിവരങ്ങൾ",
    landInfoEn: "Land Information",
    landSize: "ഭൂമിയുടെ വിസ്തീർണ്ണം / Land Size",
    selectLandSize: "Select land size",
    below1Acre: "Below 1 Acre",
    acres1to2: "1-2 Acres",
    acres2to5: "2-5 Acres", 
    acres5to10: "5-10 Acres",
    above10Acres: "Above 10 Acres",
    soilType: "മണ്ണിന്റെ തരം / Soil Type",
    selectSoilType: "Select soil type",
    claySoil: "കളിമണ്ണ് / Clay",
    sandySoil: "മണൽമണ്ണ് / Sandy",
    loamySoil: "പഴുപ്പുമണ്ണ് / Loamy",
    redSoil: "ചുവന്ന മണ്ണ് / Red Soil",
    alluvialSoil: "കായൽമണ്ണ് / Alluvial",
    
    cropsWater: "വിളകളും ജലസ്രോതസ്സും",
    cropsWaterEn: "Crops & Water Source",
    mainCrop: "പ്രധാന വിള / Main Crop",
    selectMainCrop: "Select main crop",
    paddy: "നെല്ല് / Paddy",
    coconut: "തെങ്ങ് / Coconut",
    pepper: "കുരുമുളക് / Pepper",
    rubber: "റബ്ബർ / Rubber",
    banana: "വാഴ / Banana",
    vegetables: "പച്ചക്കറികൾ / Vegetables",
    mixedFarming: "മിശ്ര കൃഷി / Mixed Farming",
    waterSource: "ജലസ്രോതസ്സ് / Water Source",
    selectWaterSource: "Select water source",
    river: "നദി / River",
    well: "കിണർ / Well",
    borewell: "ബോർവെൽ / Borewell",
    rainwater: "മഴ / Rainwater",
    pond: "കുളം / Pond",
    canal: "കനാൽ / Canal",
    
    experienceChallenges: "അനുഭവവും വെല്ലുവിളികളും",
    experienceChallengesEn: "Experience & Challenges",
    farmingExperience: "കൃഷി അനുഭവം / Farming Experience",
    selectExperience: "Select experience level",
    beginner: "പുതിയ കർഷകൻ / Beginner (0-2 years)",
    intermediate: "ഇടത്തരം / Intermediate (3-10 years)",
    experienced: "പരിചയസമ്പന്നൻ / Experienced (10+ years)",
    mainChallenges: "പ്രധാന വെല്ലുവിളികൾ / Main Challenges",
    challengesPlaceholder: "Describe your main farming challenges (pests, weather, market prices, etc.)",

    // Chat Interface
    farmingAssistant: "കൃഷി സഹായി",
    aiFarmingAssistant: "AI Farming Assistant", 
    chatPlaceholder: "മലയാളത്തിൽ അല്ലെങ്കിൽ ഇംഗ്ലീഷിൽ ചോദിക്കൂ...",
    quickQuestion1: "എന്റെ വിളയുടെ അവസ്ഥ എങ്ങനെ?",
    quickQuestion2: "ഇന്നത്തെ കാലാവസ്ഥ എന്ത്?",
    quickQuestion3: "പുതിയ കീടങ്ങളെ കാണുന്നു",
    quickQuestion4: "വള നിർദ്ദേശം വേണം",

    // Advisory Cards
    smartAdvisoryTitle: "സ്മാർട്ട് ഉപദേശങ്ങൾ",
    personalizedAI: "Personalized AI Advisory",
    viewAll: "View All",
    heavyRainExpected: "കനത്ത മഴ പ്രതീക്ഷിക്കുന്നു",
    organicFertilizerApp: "ജൈവ വളം പ്രയോഗം", 
    pestAlert: "കീട മുന്നറിയിപ്പ്",
    cropHealthExcellent: "വിളയുടെ ആരോഗ്യം മികച്ചത്",
    adjustIrrigation: "ജലസേചന സമയക്രമം",
    goodMarketPrice: "നല്ല വിപണി വില",
    takeAction: "Take Action",
    urgentActions: "Urgent Actions",
    warnings: "Warnings",
    suggestions: "Suggestions",
    allGood: "All Good",

    // Activity Tracker
    activityLog: "പ്രവർത്തന ലോഗ്",
    activityLogEn: "Activity Log & Timeline",
    addActivity: "Add Activity",
    addNewActivity: "പുതിയ പ്രവർത്തനം ചേർക്കുക / Add New Activity",
    activityType: "പ്രവർത്തന തരം / Activity Type",
    area: "പ്രദേശം / Area",
    areaPlaceholder: "e.g., Main Field - 2 acres",
    titleEnglish: "Title (English)",
    titleMalayalam: "Title (Malayalam)",
    titleMalayalamPlaceholder: "മലയാളത്തിൽ",
    description: "വിവരണം / Description",
    descriptionPlaceholder: "Describe what you did...",
    cost: "ചെലവ് / Cost (₹)",
    enterCost: "Enter cost",
    weather: "കാലാവസ്ഥ / Weather",
    weatherCondition: "Weather condition",
    sunny: "വെയിൽ / Sunny",
    cloudy: "മേഘാവൃതം / Cloudy", 
    rainy: "മഴ / Rainy",
    dry: "വരണ്ട / Dry",
    notes: "കുറിപ്പുകൾ / Notes",
    notesPlaceholder: "Additional notes or observations...",
    
    // Activity Types
    sowing: "വിതയൽ / Sowing",
    irrigation: "ജലസേചനം / Irrigation",
    fertilizing: "വളപ്രയോഗം / Fertilizing",
    spraying: "തളിക്കൽ / Spraying", 
    weeding: "കളനിർമാർജനം / Weeding",
    harvesting: "വിളവെടുപ്പ് / Harvesting",
    
    // Activity Examples
    paddySowing: "നെൽ വിതയൽ",
    organicFertilizer: "ജൈവ വളം പ্രയോഗം",
    fieldIrrigation: "വയലിൽ ജലസേചനം",
    
    thisMonthSummary: "This Month Summary",
    totalActivities: "Total Activities",
    totalCost: "Total Cost",
    cropAreas: "Crop Areas",
    daysActive: "Days Active"
  },
  en: {
    // Main Navigation & Dashboard  
    greeting: "Hello Raju! 👋",
    welcomeBack: "Welcome back to your AI Farming Assistant",
    setupProfile: "Setup Profile", 
    cropHealth: "Crop Health",
    activeAlerts: "Active Alerts",
    estProfit: "Est. Profit",
    activities: "Activities",
    dashboard: "Dashboard",
    aiChat: "AI Chat", 
    advisory: "Advisory",
    recentAdvisory: "Recent Advisory",
    active: "Active",
    translateTo: "മലയാളം",

    // Hero Section
    heroTitle: "Kerala Farmer Assistant",
    heroSubtitle: "AI Farming Assistant for Kerala",
    heroDescription: "Smart farming solutions powered by AI. Get personalized advice, track your crops, and maximize your harvest with traditional wisdom meets modern technology.",
    startJourney: "Start Farming Journey",
    talkToAI: "Talk to AI Assistant",
    malayalamAIChat: "Malayalam AI Chat",
    malayalamAIChatDesc: "Talk to our AI in Malayalam. Get instant answers about crops, weather, and farming techniques.",
    smartAdvisory: "Smart Advisory",
    smartAdvisoryDesc: "Personalized farming advice based on your land, crops, and local weather conditions.",
    smartAlerts: "Smart Alerts", 
    smartAlertsDesc: "Never miss important farming activities with timely reminders and weather alerts.",

    // Onboarding Form
    farmProfileSetup: "Farm Profile Setup",
    stepOf: "Step {current} of {total}",
    previous: "Previous",
    nextStep: "Next Step", 
    completeSetup: "Complete Setup",
    
    // Onboarding Steps
    farmerInfo: "Farmer Information",
    farmerInfoEn: "Farmer Information",
    name: "Name",
    enterFullName: "Enter your full name",
    location: "Location", 
    villageDistrict: "Village, District",
    
    landInfo: "Land Information",
    landInfoEn: "Land Information",
    landSize: "Land Size",
    selectLandSize: "Select land size",
    below1Acre: "Below 1 Acre", 
    acres1to2: "1-2 Acres",
    acres2to5: "2-5 Acres",
    acres5to10: "5-10 Acres",
    above10Acres: "Above 10 Acres",
    soilType: "Soil Type",
    selectSoilType: "Select soil type",
    claySoil: "Clay",
    sandySoil: "Sandy",
    loamySoil: "Loamy", 
    redSoil: "Red Soil",
    alluvialSoil: "Alluvial",
    
    cropsWater: "Crops & Water Source",
    cropsWaterEn: "Crops & Water Source",
    mainCrop: "Main Crop",
    selectMainCrop: "Select main crop",
    paddy: "Paddy",
    coconut: "Coconut",
    pepper: "Pepper",
    rubber: "Rubber",
    banana: "Banana",
    vegetables: "Vegetables",
    mixedFarming: "Mixed Farming",
    waterSource: "Water Source",
    selectWaterSource: "Select water source", 
    river: "River",
    well: "Well",
    borewell: "Borewell",
    rainwater: "Rainwater", 
    pond: "Pond",
    canal: "Canal",
    
    experienceChallenges: "Experience & Challenges",
    experienceChallengesEn: "Experience & Challenges",
    farmingExperience: "Farming Experience",
    selectExperience: "Select experience level",
    beginner: "Beginner (0-2 years)",
    intermediate: "Intermediate (3-10 years)",
    experienced: "Experienced (10+ years)",
    mainChallenges: "Main Challenges",
    challengesPlaceholder: "Describe your main farming challenges (pests, weather, market prices, etc.)",

    // Chat Interface
    farmingAssistant: "Farming Assistant",
    aiFarmingAssistant: "AI Farming Assistant",
    chatPlaceholder: "Ask in Malayalam or English...",
    quickQuestion1: "How is my crop condition?",
    quickQuestion2: "What's today's weather?",
    quickQuestion3: "Seeing new pests",
    quickQuestion4: "Need fertilizer advice",

    // Advisory Cards
    smartAdvisoryTitle: "Smart Advisory",
    personalizedAI: "Personalized AI Advisory",
    viewAll: "View All", 
    heavyRainExpected: "Heavy Rain Expected",
    organicFertilizerApp: "Organic Fertilizer Application",
    pestAlert: "Pest Alert",
    cropHealthExcellent: "Crop Health Excellent", 
    adjustIrrigation: "Adjust Irrigation Schedule",
    goodMarketPrice: "Good Market Price",
    takeAction: "Take Action",
    urgentActions: "Urgent Actions",
    warnings: "Warnings",
    suggestions: "Suggestions", 
    allGood: "All Good",

    // Activity Tracker
    activityLog: "Activity Log",
    activityLogEn: "Activity Log & Timeline",
    addActivity: "Add Activity",
    addNewActivity: "Add New Activity",
    activityType: "Activity Type",
    area: "Area",
    areaPlaceholder: "e.g., Main Field - 2 acres",
    titleEnglish: "Title (English)",
    titleMalayalam: "Title (Malayalam)",
    titleMalayalamPlaceholder: "മലയാളത്തിൽ",
    description: "Description", 
    descriptionPlaceholder: "Describe what you did...",
    cost: "Cost (₹)",
    enterCost: "Enter cost",
    weather: "Weather",
    weatherCondition: "Weather condition",
    sunny: "Sunny",
    cloudy: "Cloudy",
    rainy: "Rainy",
    dry: "Dry",
    notes: "Notes",
    notesPlaceholder: "Additional notes or observations...",
    
    // Activity Types
    sowing: "Sowing", 
    irrigation: "Irrigation",
    fertilizing: "Fertilizing",
    spraying: "Spraying",
    weeding: "Weeding",
    harvesting: "Harvesting",
    
    // Activity Examples
    paddySowing: "Paddy Sowing",
    organicFertilizer: "Organic Fertilizer Application",
    fieldIrrigation: "Field Irrigation",
    
    thisMonthSummary: "This Month Summary",
    totalActivities: "Total Activities", 
    totalCost: "Total Cost",
    cropAreas: "Crop Areas",
    daysActive: "Days Active"
  }
};

export type TranslationKey = keyof typeof translations.ml;

export const TranslationContext = createContext<{
  language: Language;
  t: (key: TranslationKey) => string;
  setLanguage: (lang: Language) => void;
}>({
  language: 'ml',
  t: (key) => key,
  setLanguage: () => {}
});

export const useTranslations = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationProvider');
  }
  return context;
};