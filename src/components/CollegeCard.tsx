import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Plus, Eye } from "lucide-react";
import { College } from "@/data/colleges";

interface CollegeCardProps {
  college: College;
  onViewDetails: (college: College) => void;
  onCompare: (college: College) => void;
  isInCompare: boolean;
}

const CollegeCard = ({ college, onViewDetails, onCompare, isInCompare }: CollegeCardProps) => {
  const formatFee = (fee: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(fee);
  };

  const lowestFee = Math.min(...college.courses.map((c) => c.fee));
  const highestFee = Math.max(...college.courses.map((c) => c.fee));

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border/50">
      <div className="relative h-48 overflow-hidden">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge
          className={`absolute top-3 right-3 ${
            college.type === "Government"
              ? "bg-emerald-500 hover:bg-emerald-600"
              : college.type === "Deemed"
              ? "bg-primary hover:bg-primary/90"
              : "bg-amber-500 hover:bg-amber-600"
          }`}
        >
          {college.type}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
            {college.name}
          </h3>
          <div className="flex items-center gap-1 text-amber-500 shrink-0">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{college.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4" />
          <span>{college.location}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Courses Offered</p>
          <p className="text-sm font-medium text-foreground">{college.courses.length} Programs</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">Fee Range</p>
          <p className="text-sm font-medium text-foreground">
            {formatFee(lowestFee)} - {formatFee(highestFee)} / year
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => onViewDetails(college)}
          >
            <Eye className="w-4 h-4 mr-1" />
            View Details
          </Button>
          <Button
            variant={isInCompare ? "secondary" : "hero"}
            size="sm"
            className="flex-1"
            onClick={() => onCompare(college)}
            disabled={isInCompare}
          >
            <Plus className="w-4 h-4 mr-1" />
            {isInCompare ? "Added" : "Compare"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollegeCard;
