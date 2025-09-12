import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FarmingHero from "@/components/FarmingHero";
import OnboardingForm from "@/components/OnboardingForm";
import ChatInterface from "@/components/ChatInterface";
import AdvisoryCards from "@/components/AdvisoryCards";
import ActivityTracker from "@/components/ActivityTracker";
import { TranslationContext, translations, Language } from "@/hooks/useTranslations";
import { 
  Home, 
  MessageCircle, 
  TrendingUp, 
  Calendar, 
  User, 
  Bell,
  Leaf,
  BarChart3,
  Settings,
  Languages
} from "lucide-react";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [language, setLanguage] = useState<Language>('ml');
  
  const t = (key: keyof typeof translations.ml) => translations[language][key];

  if (showOnboarding) {
    return (
      <TranslationContext.Provider value={{ language, t, setLanguage }}>
        <OnboardingForm />
      </TranslationContext.Provider>
    );
  }

  return (
    <TranslationContext.Provider value={{ language, t, setLanguage }}>
      <div className="min-h-screen bg-background">
      {/* Hero Section - Only show if user is new */}
      {activeTab === "dashboard" && (
        <div className="block md:hidden">
          <FarmingHero />
        </div>
      )}

      {/* Main Application */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{t('greeting')}</h1>
              <p className="text-muted-foreground">{t('welcomeBack')}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setLanguage(language === 'ml' ? 'en' : 'ml')}
              >
                <Languages className="h-4 w-4 mr-2" />
                {t('translateTo')}
              </Button>
              <Button variant="outline" onClick={() => setShowOnboarding(true)}>
                <User className="h-4 w-4 mr-2" />
                {t('setupProfile')}
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <Leaf className="h-8 w-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-success">85%</div>
                <div className="text-sm text-muted-foreground">{t('cropHealth')}</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <Bell className="h-8 w-8 text-warning mx-auto mb-2" />
                <div className="text-2xl font-bold text-warning">3</div>
                <div className="text-sm text-muted-foreground">{t('activeAlerts')}</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">₹45K</div>
                <div className="text-sm text-muted-foreground">{t('estProfit')}</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">12</div>
                <div className="text-sm text-muted-foreground">{t('activities')}</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">{t('dashboard')}</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">{t('aiChat')}</span>
            </TabsTrigger>
            <TabsTrigger value="advisory" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">{t('advisory')}</span>
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">{t('activities')}</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="hidden md:block">
              <FarmingHero />
            </div>
            
            {/* Recent Advisory Cards */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>{t('recentAdvisory')}</span>
                  </CardTitle>
                  <Badge variant="outline">3 {t('active')}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <AdvisoryCards />
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Chat Tab */}
          <TabsContent value="chat">
            <Card className="shadow-card h-[600px]">
              <ChatInterface />
            </Card>
          </TabsContent>

          {/* Advisory Tab */}
          <TabsContent value="advisory">
            <AdvisoryCards />
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities">
            <ActivityTracker />
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </TranslationContext.Provider>
  );
};

export default Index;
