import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { MapPin, Droplets, Wheat, User } from "lucide-react";

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
              <h3 className="text-2xl font-bold text-foreground">കർഷകന്റെ വിവരങ്ങൾ</h3>
              <p className="text-muted-foreground">Farmer Information</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="farmerName">പേര് / Name</Label>
                <Input
                  id="farmerName"
                  placeholder="Enter your full name"
                  value={data.farmerName}
                  onChange={(e) => updateData("farmerName", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="location">സ്ഥലം / Location</Label>
                <Input
                  id="location"
                  placeholder="Village, District"
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
              <h3 className="text-2xl font-bold text-foreground">ഭൂമിയുടെ വിവരങ്ങൾ</h3>
              <p className="text-muted-foreground">Land Information</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="landSize">ഭൂമിയുടെ വിസ്തീർണ്ണം / Land Size</Label>
                <Select onValueChange={(value) => updateData("landSize", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select land size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below-1-acre">Below 1 Acre</SelectItem>
                    <SelectItem value="1-2-acres">1-2 Acres</SelectItem>
                    <SelectItem value="2-5-acres">2-5 Acres</SelectItem>
                    <SelectItem value="5-10-acres">5-10 Acres</SelectItem>
                    <SelectItem value="above-10-acres">Above 10 Acres</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="soilType">മണ്ണിന്റെ തരം / Soil Type</Label>
                <Select onValueChange={(value) => updateData("soilType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">കളിമണ്ണ് / Clay</SelectItem>
                    <SelectItem value="sandy">മണൽമണ്ണ് / Sandy</SelectItem>
                    <SelectItem value="loamy">പഴുപ്പുമണ്ണ് / Loamy</SelectItem>
                    <SelectItem value="red-soil">ചുവന്ന മണ്ണ് / Red Soil</SelectItem>
                    <SelectItem value="alluvial">കായൽമണ്ണ് / Alluvial</SelectItem>
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
              <h3 className="text-2xl font-bold text-foreground">വിളകളും ജലസ്രോതസ്സും</h3>
              <p className="text-muted-foreground">Crops & Water Source</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cropType">പ്രധാന വിള / Main Crop</Label>
                <Select onValueChange={(value) => updateData("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select main crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paddy">നെല്ല് / Paddy</SelectItem>
                    <SelectItem value="coconut">തെങ്ങ് / Coconut</SelectItem>
                    <SelectItem value="pepper">കുരുമുളക് / Pepper</SelectItem>
                    <SelectItem value="rubber">റബ്ബർ / Rubber</SelectItem>
                    <SelectItem value="banana">വാഴ / Banana</SelectItem>
                    <SelectItem value="vegetables">പച്ചക്കറികൾ / Vegetables</SelectItem>
                    <SelectItem value="mixed">മിശ്ര കൃഷി / Mixed Farming</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="waterSource">ജലസ്രോതസ്സ് / Water Source</Label>
                <Select onValueChange={(value) => updateData("waterSource", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select water source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="river">നദി / River</SelectItem>
                    <SelectItem value="well">കിണർ / Well</SelectItem>
                    <SelectItem value="borewell">ബോർവെൽ / Borewell</SelectItem>
                    <SelectItem value="rain">മഴ / Rainwater</SelectItem>
                    <SelectItem value="pond">കുളം / Pond</SelectItem>
                    <SelectItem value="canal">കനാൽ / Canal</SelectItem>
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
              <h3 className="text-2xl font-bold text-foreground">അനുഭവവും വെല്ലുവിളികളും</h3>
              <p className="text-muted-foreground">Experience & Challenges</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="experience">കൃഷി അനുഭവം / Farming Experience</Label>
                <Select onValueChange={(value) => updateData("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">പുതിയ കർഷകൻ / Beginner (0-2 years)</SelectItem>
                    <SelectItem value="intermediate">ഇടത്തരം / Intermediate (3-10 years)</SelectItem>
                    <SelectItem value="experienced">പരിചയസമ്പന്നൻ / Experienced (10+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="challenges">പ്രധാന വെല്ലുവിളികൾ / Main Challenges</Label>
                <Textarea
                  id="challenges"
                  placeholder="Describe your main farming challenges (pests, weather, market prices, etc.)"
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
            Farm Profile Setup
          </CardTitle>
          <Progress value={progress} className="w-full mb-4" />
          <p className="text-sm text-muted-foreground">
            Step {step} of {totalSteps}
          </p>
        </CardHeader>
        
        <CardContent className="pt-6">
          {renderStepContent()}
          
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            
            <div className="ml-auto">
              {step < totalSteps ? (
                <Button onClick={nextStep} className="bg-gradient-primary">
                  Next Step
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-gradient-success">
                  Complete Setup
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