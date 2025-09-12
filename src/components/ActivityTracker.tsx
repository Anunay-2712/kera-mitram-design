import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Plus, 
  Droplets, 
  Sprout, 
  Scissors, 
  Leaf, 
  Bug, 
  Calendar,
  Clock,
  MapPin
} from "lucide-react";

interface Activity {
  id: string;
  type: 'sowing' | 'irrigation' | 'fertilizing' | 'spraying' | 'harvesting' | 'weeding' | 'other';
  title: string;
  titleMalayalam: string;
  description: string;
  date: Date;
  cropArea: string;
  cost?: number;
  weather?: string;
  notes?: string;
}

const ActivityTracker = () => {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: '1',
      type: 'sowing',
      title: 'Paddy Sowing',
      titleMalayalam: 'നെൽ വിതയൽ',
      description: 'Sowed paddy seeds in the main field',
      date: new Date('2024-01-15'),
      cropArea: 'Main Field - 2 acres',
      cost: 5000,
      weather: 'Cloudy',
      notes: 'Used organic seeds from government center'
    },
    {
      id: '2',
      type: 'fertilizing',
      title: 'Organic Fertilizer Application',
      titleMalayalam: 'ജൈവ വളം പ്രയോഗം',
      description: 'Applied cow dung compost',
      date: new Date('2024-01-20'),
      cropArea: 'Main Field - 2 acres',
      cost: 3000,
      weather: 'Sunny',
      notes: 'Mixed with neem cake for pest prevention'
    },
    {
      id: '3',
      type: 'irrigation',
      title: 'Field Irrigation',
      titleMalayalam: 'വയലിൽ ജലസേചനം',
      description: 'Watered the newly planted area',
      date: new Date('2024-01-22'),
      cropArea: 'Main Field - 2 acres',
      weather: 'Dry',
      notes: 'Used drip irrigation system'
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newActivity, setNewActivity] = useState({
    type: '',
    title: '',
    titleMalayalam: '',
    description: '',
    cropArea: '',
    cost: '',
    weather: '',
    notes: ''
  });

  const activityTypes = [
    { value: 'sowing', label: 'വിതയൽ / Sowing', icon: Sprout, color: 'bg-success' },
    { value: 'irrigation', label: 'ജലസേചനം / Irrigation', icon: Droplets, color: 'bg-blue-500' },
    { value: 'fertilizing', label: 'വളപ്രയോഗം / Fertilizing', icon: Leaf, color: 'bg-green-500' },
    { value: 'spraying', label: 'തളിക്കൽ / Spraying', icon: Bug, color: 'bg-orange-500' },
    { value: 'weeding', label: 'കളനിർമാർജനം / Weeding', icon: Scissors, color: 'bg-yellow-500' },
    { value: 'harvesting', label: 'വിളവെടുപ്പ് / Harvesting', icon: Calendar, color: 'bg-accent' }
  ];

  const getActivityIcon = (type: Activity['type']) => {
    const activityType = activityTypes.find(at => at.value === type);
    if (activityType) {
      const Icon = activityType.icon;
      return <Icon className="h-4 w-4" />;
    }
    return <Calendar className="h-4 w-4" />;
  };

  const getActivityColor = (type: Activity['type']) => {
    const activityType = activityTypes.find(at => at.value === type);
    return activityType?.color || 'bg-primary';
  };

  const addActivity = () => {
    if (!newActivity.type || !newActivity.title || !newActivity.description) return;

    const activity: Activity = {
      id: Date.now().toString(),
      type: newActivity.type as Activity['type'],
      title: newActivity.title,
      titleMalayalam: newActivity.titleMalayalam || newActivity.title,
      description: newActivity.description,
      date: new Date(),
      cropArea: newActivity.cropArea || 'Main Field',
      cost: newActivity.cost ? parseFloat(newActivity.cost) : undefined,
      weather: newActivity.weather,
      notes: newActivity.notes
    };

    setActivities(prev => [activity, ...prev]);
    setNewActivity({
      type: '',
      title: '',
      titleMalayalam: '',
      description: '',
      cropArea: '',
      cost: '',
      weather: '',
      notes: ''
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">പ്രവർത്തന ലോഗ്</h2>
          <p className="text-muted-foreground">Activity Log & Timeline</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Activity
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>പുതിയ പ്രവർത്തനം ചേർക്കുക / Add New Activity</DialogTitle>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="activity-type">പ്രവർത്തന തരം / Activity Type</Label>
                  <Select onValueChange={(value) => setNewActivity(prev => ({ ...prev, type: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select activity type" />
                    </SelectTrigger>
                    <SelectContent>
                      {activityTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="crop-area">പ്രദേശം / Area</Label>
                  <Input
                    id="crop-area"
                    placeholder="e.g., Main Field - 2 acres"
                    value={newActivity.cropArea}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, cropArea: e.target.value }))}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title (English)</Label>
                  <Input
                    id="title"
                    placeholder="Activity title"
                    value={newActivity.title}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                
                <div>
                  <Label htmlFor="title-malayalam">Title (Malayalam)</Label>
                  <Input
                    id="title-malayalam"
                    placeholder="മലയാളത്തിൽ"
                    value={newActivity.titleMalayalam}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, titleMalayalam: e.target.value }))}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">വിവരണം / Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what you did..."
                  value={newActivity.description}
                  onChange={(e) => setNewActivity(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cost">ചെലവ് / Cost (₹)</Label>
                  <Input
                    id="cost"
                    type="number"
                    placeholder="Enter cost"
                    value={newActivity.cost}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, cost: e.target.value }))}
                  />
                </div>
                
                <div>
                  <Label htmlFor="weather">കാലാവസ്ഥ / Weather</Label>
                  <Select onValueChange={(value) => setNewActivity(prev => ({ ...prev, weather: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Weather condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sunny">വെയിൽ / Sunny</SelectItem>
                      <SelectItem value="cloudy">മേഘാവൃതം / Cloudy</SelectItem>
                      <SelectItem value="rainy">മഴ / Rainy</SelectItem>
                      <SelectItem value="dry">വരണ്ട / Dry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="notes">കുറിപ്പുകൾ / Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Additional notes or observations..."
                  value={newActivity.notes}
                  onChange={(e) => setNewActivity(prev => ({ ...prev, notes: e.target.value }))}
                  rows={2}
                />
              </div>
              
              <Button onClick={addActivity} className="bg-gradient-primary">
                Add Activity
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Timeline View */}
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <Card key={activity.id} className="shadow-soft hover:shadow-card transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                {/* Timeline connector */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full ${getActivityColor(activity.type)} flex items-center justify-center text-white`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  {index < activities.length - 1 && (
                    <div className="w-px h-16 bg-border mt-2" />
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {activity.titleMalayalam}
                      </h3>
                      <p className="text-sm text-muted-foreground">{activity.title}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{activity.date.toLocaleDateString('en-IN')}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">{activity.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{activity.cropArea}</span>
                    </Badge>
                    
                    {activity.cost && (
                      <Badge variant="secondary">
                        ₹{activity.cost.toLocaleString('en-IN')}
                      </Badge>
                    )}
                    
                    {activity.weather && (
                      <Badge variant="outline">
                        {activity.weather}
                      </Badge>
                    )}
                  </div>
                  
                  {activity.notes && (
                    <div className="bg-muted/50 p-3 rounded-lg text-sm text-muted-foreground">
                      <strong>Notes:</strong> {activity.notes}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Card */}
      <Card className="bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>This Month Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{activities.length}</div>
              <div className="text-sm text-muted-foreground">Total Activities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">
                ₹{activities.reduce((sum, a) => sum + (a.cost || 0), 0).toLocaleString('en-IN')}
              </div>
              <div className="text-sm text-muted-foreground">Total Cost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">3</div>
              <div className="text-sm text-muted-foreground">Crop Areas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">5</div>
              <div className="text-sm text-muted-foreground">Days Active</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivityTracker;