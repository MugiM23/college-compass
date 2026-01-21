import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X, MapPin, Star, Scale } from "lucide-react";
import { College } from "@/data/colleges";

interface CollegeCompareProps {
  colleges: College[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const CollegeCompare = ({ colleges, onRemove, onClear }: CollegeCompareProps) => {
  const formatFee = (fee: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(fee);
  };

  if (colleges.length === 0) {
    return (
      <Card className="border-dashed">
        <CardContent className="py-12 text-center">
          <Scale className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">
            No colleges to compare
          </h3>
          <p className="text-muted-foreground">
            Add colleges from the list above to compare them side by side
          </p>
        </CardContent>
      </Card>
    );
  }

  const getAverageFee = (college: College) => {
    const total = college.courses.reduce((sum, course) => sum + course.fee, 0);
    return total / college.courses.length;
  };

  const allCourses = [...new Set(colleges.flatMap((c) => c.courses.map((course) => course.name)))];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
          <Scale className="w-5 h-5 text-primary" />
          Compare Colleges ({colleges.length})
        </h3>
        <Button variant="outline" size="sm" onClick={onClear}>
          Clear All
        </Button>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {colleges.map((college) => (
          <Card key={college.id} className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8"
              onClick={() => onRemove(college.id)}
            >
              <X className="w-4 h-4" />
            </Button>
            <CardHeader className="pb-2">
              <div className="w-full h-32 rounded-lg overflow-hidden mb-3">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="font-display text-lg pr-8">{college.name}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{college.location}</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500 text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{college.rating}</span>
                </div>
                <Badge
                  className={`text-xs ${
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
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Average Fee</p>
                  <p className="font-semibold text-primary">
                    {formatFee(getAverageFee(college))} / year
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Courses</p>
                  <p className="font-semibold">{college.courses.length} Programs</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Facilities</p>
                  <div className="flex flex-wrap gap-1">
                    {college.facilities.slice(0, 3).map((f, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {f}
                      </Badge>
                    ))}
                    {college.facilities.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{college.facilities.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Course-wise Fee Comparison Table */}
      {colleges.length === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg">Course-wise Fee Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead className="text-right">{colleges[0].name}</TableHead>
                  <TableHead className="text-right">{colleges[1].name}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allCourses.map((courseName, index) => {
                  const fee1 = colleges[0].courses.find((c) => c.name === courseName)?.fee;
                  const fee2 = colleges[1].courses.find((c) => c.name === courseName)?.fee;
                  return (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{courseName}</TableCell>
                      <TableCell className="text-right">
                        {fee1 ? formatFee(fee1) : "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        {fee2 ? formatFee(fee2) : "-"}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CollegeCompare;
