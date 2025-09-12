import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Droplets, 
  Bug, 
  Thermometer,
  Leaf,
  TrendingUp,
  Calendar
} from "lucide-react";

interface Advisory {
  id: string;
  type: 'warning' | 'suggestion' | 'urgent' | 'success';
  category: 'weather' | 'pest' | 'irrigation' | 'fertilizer' | 'market' | 'general';
  title: string;
  titleMalayalam: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  actionRequired: boolean;
  timestamp: Date;
  cropType?: string;
}

const AdvisoryCards = () => {
  const { t } = useTranslations();
  const advisories: Advisory[] = [
    {
      id: '1',
      type: 'warning',
      category: 'weather',
      title: 'Heavy Rain Expected',
      titleMalayalam: 'കനത്ത മഴ പ്രതീക്ഷിക്കുന്നു',
      description: 'Heavy rainfall expected in next 48 hours. Avoid spraying and ensure proper drainage.',
      priority: 'high',
      actionRequired: true,
      timestamp: new Date(),
      cropType: 'Paddy'
    },
    {
      id: '2',
      type: 'suggestion',
      category: 'fertilizer',
      title: 'Organic Fertilizer Application',
      titleMalayalam: 'ജൈവ വളം പ്രയോഗം',
      description: 'Perfect time to apply organic compost. Your paddy crop will benefit from nutrient boost.',
      priority: 'medium',
      actionRequired: false,
      timestamp: new Date(),
      cropType: 'Paddy'
    },
    {
      id: '3',
      type: 'urgent',
      category: 'pest',
      title: 'Pest Alert - Brown Plant Hopper',
      titleMalayalam: 'കീട മുന്നറിയിപ്പ്',
      description: 'Brown plant hopper detected in nearby farms. Check your paddy field immediately.',
      priority: 'high',
      actionRequired: true,
      timestamp: new Date(),
      cropType: 'Paddy'
    },
    {
      id: '4',
      type: 'success',
      category: 'general',
      title: 'Crop Health Excellent',
      titleMalayalam: 'വിളയുടെ ആരോഗ്യം മികച്ചത്',
      description: 'Your coconut trees are showing excellent growth. Continue current practices.',
      priority: 'low',
      actionRequired: false,
      timestamp: new Date(),
      cropType: 'Coconut'
    },
    {
      id: '5',
      type: 'suggestion',
      category: 'irrigation',
      title: 'Adjust Irrigation Schedule',
      titleMalayalam: 'ജലസേചന സമയക്രമം',
      description: 'Reduce watering frequency due to sufficient soil moisture from recent rains.',
      priority: 'medium',
      actionRequired: false,
      timestamp: new Date(),
      cropType: 'Vegetables'
    },
    {
      id: '6',
      type: 'suggestion',
      category: 'market',
      title: 'Good Market Price',
      titleMalayalam: 'നല്ല വിപണി വില',
      description: 'Pepper prices are at season high. Consider selling your stock now.',
      priority: 'medium',
      actionRequired: false,
      timestamp: new Date(),
      cropType: 'Pepper'
    }
  ];

  const getIcon = (category: Advisory['category']) => {
    switch (category) {
      case 'weather': return <Thermometer className="h-5 w-5" />;
      case 'pest': return <Bug className="h-5 w-5" />;
      case 'irrigation': return <Droplets className="h-5 w-5" />;
      case 'fertilizer': return <Leaf className="h-5 w-5" />;
      case 'market': return <TrendingUp className="h-5 w-5" />;
      default: return <CheckCircle className="h-5 w-5" />;
    }
  };

  const getStatusIcon = (type: Advisory['type']) => {
    switch (type) {
      case 'urgent': return <AlertTriangle className="h-4 w-4" />;
      case 'warning': return <Clock className="h-4 w-4" />;
      case 'success': return <CheckCircle className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getCardClassName = (type: Advisory['type']) => {
    switch (type) {
      case 'urgent': 
        return 'border-l-4 border-l-destructive bg-destructive/5 hover:bg-destructive/10';
      case 'warning': 
        return 'border-l-4 border-l-warning bg-warning/5 hover:bg-warning/10';
      case 'success': 
        return 'border-l-4 border-l-success bg-success/5 hover:bg-success/10';
      default: 
        return 'border-l-4 border-l-primary bg-primary/5 hover:bg-primary/10';
    }
  };

  const getBadgeVariant = (type: Advisory['type']) => {
    switch (type) {
      case 'urgent': return 'destructive';
      case 'warning': return 'secondary';
      case 'success': return 'default';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">{t('smartAdvisoryTitle')}</h2>
          <p className="text-muted-foreground">{t('personalizedAI')}</p>
        </div>
        <Button variant="outline" size="sm">
          {t('viewAll')}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {advisories.map((advisory) => (
          <Card 
            key={advisory.id} 
            className={`transition-all duration-200 hover:shadow-card cursor-pointer ${getCardClassName(advisory.type)}`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    advisory.type === 'urgent' ? 'bg-destructive/20 text-destructive' :
                    advisory.type === 'warning' ? 'bg-warning/20 text-warning' :
                    advisory.type === 'success' ? 'bg-success/20 text-success' :
                    'bg-primary/20 text-primary'
                  }`}>
                    {getIcon(advisory.category)}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-sm font-semibold text-foreground leading-tight">
                      {advisory.titleMalayalam}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      {advisory.title}
                    </p>
                  </div>
                </div>
                <Badge variant={getBadgeVariant(advisory.type)} className="ml-2 flex items-center space-x-1">
                  {getStatusIcon(advisory.type)}
                  <span className="text-xs capitalize">{advisory.type}</span>
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {advisory.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {advisory.cropType && (
                    <Badge variant="outline" className="text-xs">
                      {advisory.cropType}
                    </Badge>
                  )}
                  <span className="text-xs text-muted-foreground">
                    {advisory.timestamp.toLocaleDateString('en-IN')}
                  </span>
                </div>
                
                {advisory.actionRequired && (
                  <Button size="sm" variant="outline" className="text-xs">
                    {t('takeAction')}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <Card className="mt-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-destructive">2</div>
              <div className="text-sm text-muted-foreground">{t('urgentActions')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">1</div>
              <div className="text-sm text-muted-foreground">{t('warnings')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">{t('suggestions')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">1</div>
              <div className="text-sm text-muted-foreground">{t('allGood')}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvisoryCards;