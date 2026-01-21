import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, GraduationCap } from "lucide-react";
import { colleges, College } from "@/data/colleges";
import CollegeCard from "./CollegeCard";
import CollegeDetails from "./CollegeDetails";
import CollegeCompare from "./CollegeCompare";

const CollegeSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [compareList, setCompareList] = useState<College[]>([]);

  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      const matchesSearch =
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.courses.some((course) =>
          course.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesType = typeFilter === "all" || college.type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [searchQuery, typeFilter]);

  const handleAddToCompare = (college: College) => {
    if (compareList.length < 2 && !compareList.find((c) => c.id === college.id)) {
      setCompareList([...compareList, college]);
    }
  };

  const handleRemoveFromCompare = (id: string) => {
    setCompareList(compareList.filter((c) => c.id !== id));
  };

  const handleClearCompare = () => {
    setCompareList([]);
  };

  return (
    <section id="colleges" className="py-20 bg-muted/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Explore Colleges
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Your Perfect College
          </h2>
          <p className="text-muted-foreground text-lg">
            Search through our curated list of top colleges, compare fee structures, and find the
            best fit for your academic journey.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by college name, location, or course..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="College Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Government">Government</SelectItem>
                <SelectItem value="Private">Private</SelectItem>
                <SelectItem value="Deemed">Deemed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredColleges.length} of {colleges.length} colleges
          {compareList.length > 0 && (
            <span className="ml-2 text-primary font-medium">
              • {compareList.length}/2 selected for comparison
            </span>
          )}
        </p>

        {/* College Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredColleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
              onViewDetails={setSelectedCollege}
              onCompare={handleAddToCompare}
              isInCompare={compareList.some((c) => c.id === college.id)}
            />
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No colleges found matching your search criteria.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setTypeFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Compare Section */}
        <CollegeCompare
          colleges={compareList}
          onRemove={handleRemoveFromCompare}
          onClear={handleClearCompare}
        />

        {/* College Details Modal */}
        <CollegeDetails
          college={selectedCollege}
          isOpen={!!selectedCollege}
          onClose={() => setSelectedCollege(null)}
        />
      </div>
    </section>
  );
};

export default CollegeSearch;
