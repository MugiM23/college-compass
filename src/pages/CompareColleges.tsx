import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, MapPin, Star, ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { colleges } from "@/data/colleges";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const CompareColleges = () => {
  const navigate = useNavigate();
  const [selectedColleges, setSelectedColleges] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const selectedCollegesData = colleges.filter((c) =>
    selectedColleges.includes(c.id)
  );

  const filteredColleges = colleges.filter(
    (c) =>
      !selectedColleges.includes(c.id) &&
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCollege = (collegeId: string) => {
    setSelectedColleges((prev) =>
      prev.includes(collegeId)
        ? prev.filter((id) => id !== collegeId)
        : [...prev, collegeId]
    );
  };

  const handleRemoveCollege = (collegeId: string) => {
    setSelectedColleges(selectedColleges.filter((id) => id !== collegeId));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-10">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/student/home")}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Compare Colleges</h1>
            <p className="text-gray-600">
              Select up to 5 colleges to compare side-by-side
            </p>
          </div>

          {/* Add College Section */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  Selected Colleges ({selectedColleges.length})
                </CardTitle>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      disabled={selectedColleges.length >= 5}
                      className="flex items-center gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Add College
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add Colleges to Compare</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        placeholder="Search colleges..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <div className="max-h-96 overflow-y-auto space-y-2">
                        {filteredColleges.length === 0 ? (
                          <p className="text-sm text-gray-500 text-center py-4">
                            {searchTerm
                              ? "No colleges found"
                              : "All available colleges selected"}
                          </p>
                        ) : (
                          filteredColleges.map((college) => (
                            <div
                              key={college.id}
                              className="flex items-start gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                              onClick={() => {
                                toggleCollege(college.id);
                              }}
                            >
                              <Checkbox
                                checked={selectedColleges.includes(college.id)}
                                onCheckedChange={() =>
                                  toggleCollege(college.id)
                                }
                                className="mt-1"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm">
                                  {college.name}
                                </p>
                                <p className="text-xs text-gray-600">
                                  {college.location}
                                </p>
                                <div className="flex items-center gap-1 mt-1">
                                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                  <span className="text-xs font-semibold">
                                    {college.rating}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                      <Button
                        onClick={() => setOpen(false)}
                        className="w-full"
                      >
                        Done
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              {selectedCollegesData.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  No colleges selected. Click "Add College" to start comparing.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {selectedCollegesData.map((college) => (
                    <Badge
                      key={college.id}
                      variant="secondary"
                      className="flex items-center gap-2 px-3 py-2"
                    >
                      {college.name}
                      <button
                        onClick={() => handleRemoveCollege(college.id)}
                        className="ml-1 hover:text-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {selectedCollegesData.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-gray-500">
                  Select colleges to start comparison
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-4 text-left font-semibold sticky left-0 bg-gray-50 z-10">
                      Details
                    </th>
                    {selectedCollegesData.map((college) => (
                      <th key={college.id} className="border p-4">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="font-semibold text-sm">{college.name}</p>
                            <p className="text-xs text-gray-600 flex items-center gap-1 mt-1">
                              <MapPin className="h-3 w-3" />
                              {college.location}
                            </p>
                          </div>
                          <button
                            onClick={() => handleRemoveCollege(college.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Rating */}
                  <tr>
                    <td className="border p-4 bg-gray-50 font-semibold sticky left-0 z-10">
                      Rating
                    </td>
                    {selectedCollegesData.map((college) => (
                      <td key={college.id} className="border p-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold">{college.rating}</span>
                          <span className="text-gray-500">/ 5</span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Established Year */}
                  <tr>
                    <td className="border p-4 bg-gray-50 font-semibold sticky left-0 z-10">
                      Established
                    </td>
                    {selectedCollegesData.map((college) => (
                      <td
                        key={college.id}
                        className="border p-4 text-center text-sm"
                      >
                        {college.established}
                      </td>
                    ))}
                  </tr>

                  {/* Number of Programs */}
                  <tr>
                    <td className="border p-4 bg-gray-50 font-semibold sticky left-0 z-10">
                      Programs Offered
                    </td>
                    {selectedCollegesData.map((college) => (
                      <td
                        key={college.id}
                        className="border p-4 text-center text-sm"
                      >
                        {college.programs.length}
                      </td>
                    ))}
                  </tr>

                  {/* Fee Range */}
                  <tr>
                    <td className="border p-4 bg-gray-50 font-semibold sticky left-0 z-10">
                      Fee Range
                    </td>
                    {selectedCollegesData.map((college) => (
                      <td
                        key={college.id}
                        className="border p-4 text-center text-sm"
                      >
                        {college.feeRange}
                      </td>
                    ))}
                  </tr>

                  {/* Programs */}
                  <tr>
                    <td className="border p-4 bg-gray-50 font-semibold sticky left-0 z-10">
                      Top Programs
                    </td>
                    {selectedCollegesData.map((college) => (
                      <td key={college.id} className="border p-4">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {college.programs.slice(0, 3).map((program) => (
                            <Badge
                              key={program}
                              variant="secondary"
                              className="text-xs"
                            >
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompareColleges;
