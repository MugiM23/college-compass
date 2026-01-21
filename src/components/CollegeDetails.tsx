import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MapPin, Star, GraduationCap, Building2 } from "lucide-react";
import { College } from "@/data/colleges";

interface CollegeDetailsProps {
  college: College | null;
  isOpen: boolean;
  onClose: () => void;
}

const CollegeDetails = ({ college, isOpen, onClose }: CollegeDetailsProps) => {
  if (!college) return null;

  const formatFee = (fee: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(fee);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{college.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Info */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{college.location}</span>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-medium">{college.rating} Rating</span>
            </div>
            <Badge
              className={`${
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

          {/* Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Courses & Fee Structure */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Courses & Fee Structure
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead className="text-right">Annual Fee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {college.courses.map((course, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{course.name}</TableCell>
                    <TableCell>{course.duration}</TableCell>
                    <TableCell className="text-right">{formatFee(course.fee)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Facilities
            </h3>
            <div className="flex flex-wrap gap-2">
              {college.facilities.map((facility, index) => (
                <Badge key={index} variant="secondary">
                  {facility}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollegeDetails;
