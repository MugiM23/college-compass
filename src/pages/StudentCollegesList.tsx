import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Star, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { colleges } from "@/data/colleges";

const CollegesList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const filteredColleges = colleges.filter(
    (college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleLike = (collegeId: string) => {
    const newLiked = new Set(liked);
    if (newLiked.has(collegeId)) {
      newLiked.delete(collegeId);
    } else {
      newLiked.add(collegeId);
    }
    setLiked(newLiked);
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

          {/* Search Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Browse Colleges</h1>
            <Input
              type="text"
              placeholder="Search by college name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-4">
            Found {filteredColleges.length} college{filteredColleges.length !== 1 ? "s" : ""}
          </p>

          {/* Colleges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <Card key={college.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{college.name}</CardTitle>
                      <div className="flex items-center gap-1 text-gray-600 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{college.location}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleLike(college.id)}
                      className="ml-2 transition-colors"
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          liked.has(college.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold">{college.rating}</span>
                    <span className="text-sm text-gray-500">/ 5</span>
                  </div>

                  {/* Programs */}
                  <div>
                    <p className="text-xs text-gray-600 mb-2">Programs Offered:</p>
                    <div className="flex flex-wrap gap-1">
                      {college.programs.slice(0, 3).map((program) => (
                        <Badge key={program} variant="secondary" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                      {college.programs.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{college.programs.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => navigate(`/student/college/${college.id}`)}
                    >
                      View Details
                    </Button>
                    <Button size="sm" className="flex-1">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredColleges.length === 0 && (
            <Card className="mt-8">
              <CardContent className="pt-6 text-center">
                <p className="text-gray-500">
                  No colleges found matching your search criteria
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CollegesList;
