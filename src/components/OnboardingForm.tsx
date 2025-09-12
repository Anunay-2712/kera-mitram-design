import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { MapPin, Droplets, Wheat, User } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

interface OnboardingData {
  farmerName: string;
  location: string;
  landSize: string;
  cropType: string;
  soilType: string;
  waterSource: string;
  experience: string;
  challenges: string;
}

const OnboardingForm = () => {
  const { t } = useTranslations();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    farmerName: "",
    location: "",
    landSize: "",
    cropType: "",
    soilType: "",
    waterSource: "",
    experience: "",
    challenges: ""
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const updateData = (field: keyof OnboardingData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Farmer profile created:", data);
    // Here you would typically save to database or context
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">{t('farmerInfo')}</h3>
              <p className="text-muted-foreground">{t('farmerInfoEn')}</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="farmerName">{t('name')}</Label>
                <Input
                  id="farmerName"
                  placeholder={t('enterFullName')}
                  value={data.farmerName}
                  onChange={(e) => updateData("farmerName", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="location">{t('location')}</Label>
                <Input
                  id="location"
                  placeholder={t('villageDistrict')}
                  value={data.location}
                  onChange={(e) => updateData("location", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">{t('landInfo')}</h3>
              <p className="text-muted-foreground">{t('landInfoEn')}</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="landSize">{t('landSize')}</Label>
                <Select onValueChange={(value) => updateData("landSize", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectLandSize')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below-1-acre">{t('below1Acre')}</SelectItem>
                    <SelectItem value="1-2-acres">{t('acres1to2')}</SelectItem>
                    <SelectItem value="2-5-acres">{t('acres2to5')}</SelectItem>
                    <SelectItem value="5-10-acres">{t('acres5to10')}</SelectItem>
                    <SelectItem value="above-10-acres">{t('above10Acres')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="soilType">{t('soilType')}</Label>
                <Select onValueChange={(value) => updateData("soilType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectSoilType')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">{t('claySoil')}</SelectItem>
                    <SelectItem value="sandy">{t('sandySoil')}</SelectItem>
                    <SelectItem value="loamy">{t('loamySoil')}</SelectItem>
                    <SelectItem value="red-soil">{t('redSoil')}</SelectItem>
                    <SelectItem value="alluvial">{t('alluvialSoil')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Wheat className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">{t('cropsWater')}</h3>
              <p className="text-muted-foreground">{t('cropsWaterEn')}</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cropType">{t('mainCrop')}</Label>
                <Select onValueChange={(value) => updateData("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectMainCrop')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paddy">{t('paddy')}</SelectItem>
                    <SelectItem value="coconut">{t('coconut')}</SelectItem>
                    <SelectItem value="pepper">{t('pepper')}</SelectItem>
                    <SelectItem value="rubber">{t('rubber')}</SelectItem>
                    <SelectItem value="banana">{t('banana')}</SelectItem>
                    <SelectItem value="vegetables">{t('vegetables')}</SelectItem>
                    <SelectItem value="mixed">{t('mixedFarming')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="waterSource">{t('waterSource')}</Label>
                <Select onValueChange={(value) => updateData("waterSource", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectWaterSource')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="river">{t('river')}</SelectItem>
                    <SelectItem value="well">{t('well')}</SelectItem>
                    <SelectItem value="borewell">{t('borewell')}</SelectItem>
                    <SelectItem value="rain">{t('rainwater')}</SelectItem>
                    <SelectItem value="pond">{t('pond')}</SelectItem>
                    <SelectItem value="canal">{t('canal')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Droplets className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">{t('experienceChallenges')}</h3>
              <p className="text-muted-foreground">{t('experienceChallengesEn')}</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="experience">{t('farmingExperience')}</Label>
                <Select onValueChange={(value) => updateData("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectExperience')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">{t('beginner')}</SelectItem>
                    <SelectItem value="intermediate">{t('intermediate')}</SelectItem>
                    <SelectItem value="experienced">{t('experienced')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="challenges">{t('mainChallenges')}</Label>
                <Textarea
                  id="challenges"
                  placeholder={t('challengesPlaceholder')}
                  value={data.challenges}
                  onChange={(e) => updateData("challenges", e.target.value)}
                  className="mt-1 resize-none"
                  rows={4}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-card flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-floating">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-3xl font-bold text-primary mb-2">
            {t('farmProfileSetup')}
          </CardTitle>
          <Progress value={progress} className="w-full mb-4" />
          <p className="text-sm text-muted-foreground">
            {t('stepOf').replace('{current}', step.toString()).replace('{total}', totalSteps.toString())}
          </p>
        </CardHeader>
        
        <CardContent className="pt-6">
          {renderStepContent()}
          
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={prevStep}>
                {t('previous')}
              </Button>
            )}
            
            <div className="ml-auto">
              {step < totalSteps ? (
                <Button onClick={nextStep} className="bg-gradient-primary">
                  {t('nextStep')}
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-gradient-success">
                  {t('completeSetup')}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;