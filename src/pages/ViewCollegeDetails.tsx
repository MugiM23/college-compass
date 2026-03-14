import { useParams, useNavigate } from "react-router-dom";
import { colleges } from "@/data/colleges";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  MapPin,
  Star,
  GraduationCap,
  Building2,
  TrendingUp,
  Briefcase,
  Users,
  IndianRupee,
  ChevronLeft,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ViewCollegeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find college by ID
  const college = colleges.find((c) => c.id === id);

  if (!college) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">College Not Found</h1>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold font-display mb-2">
                {college.name}
              </h1>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{college.location}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-500 font-semibold">
                  <Star className="w-5 h-5 fill-current" />
                  <span>{college.rating} / 5.0 Rating</span>
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
                <Badge variant="outline">Established {college.established}</Badge>
              </div>
              {college.description && (
                <p className="text-gray-600 mt-3">{college.description}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
          {/* Gallery Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                College Gallery
              </CardTitle>
            </CardHeader>
            <CardContent>
              {college.galleryImages && college.galleryImages.length > 0 ? (
                <Carousel className="w-full">
                  <CarouselContent>
                    {college.galleryImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative w-full h-96">
                          <img
                            src={image}
                            alt={`${college.name} - ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              ) : (
                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">No gallery images available</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Courses & Fee Structure Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Courses & Fee Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead className="font-semibold">Course Name</TableHead>
                      <TableHead className="font-semibold">Duration</TableHead>
                      <TableHead className="text-right font-semibold">
                        Annual Fee
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {college.courses.map((course, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{course.name}</TableCell>
                        <TableCell>{course.duration}</TableCell>
                        <TableCell className="text-right font-semibold text-primary">
                          {formatCurrency(course.fee)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-1">
                  Fee Range
                </p>
                <p className="text-lg font-bold text-blue-600">
                  {college.feeRange}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Amenities & Facilities Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Amenities & Facilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {college.amenities && college.amenities.length > 0 ? (
                  college.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No amenities listed</p>
                )}
              </div>

              {/* Core Facilities */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Core Facilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {college.facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Campus Hiring Results Section */}
          {college.campusHiring && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Campus Hiring Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="text-sm font-semibold text-gray-600 mb-2">
                      Total Offers
                    </div>
                    <div className="text-3xl font-bold text-emerald-600">
                      {college.campusHiring.totalOffersGiven}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">students placed</p>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <div className="text-sm font-semibold text-gray-600 mb-2">
                      Average Package
                    </div>
                    <div className="text-3xl font-bold text-blue-600">
                      {formatCurrency(college.campusHiring.averagePackage).replace("₹", "")}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">per annum</p>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <div className="text-sm font-semibold text-gray-600 mb-2">
                      Highest Package
                    </div>
                    <div className="text-3xl font-bold text-purple-600">
                      {formatCurrency(college.campusHiring.highestPackage).replace("₹", "")}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">per annum</p>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                    <div className="text-sm font-semibold text-gray-600 mb-2">
                      Top Recruiter
                    </div>
                    <div className="text-2xl font-bold text-orange-600">
                      {college.campusHiring.topRecruiter}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">highest offers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Placement Trends Section */}
          {college.placementData && college.placementData.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Placement Trends (Last 3 Years)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={college.placementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip
                      formatter={(value, name) => {
                        if (name === "placementPercentage") {
                          return [value + "%", "Placement %"];
                        } else if (name === "averageSalary") {
                          return [formatCurrency(value), "Avg. Salary"];
                        } else if (name === "highestSalary") {
                          return [formatCurrency(value), "Highest Salary"];
                        }
                        return value;
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="placementPercentage"
                      fill="#3b82f6"
                      name="Placement %"
                    />
                    <Bar
                      dataKey="averageSalary"
                      fill="#10b981"
                      name="Avg. Salary"
                    />
                  </BarChart>
                </ResponsiveContainer>

                {/* Placement Details Table */}
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-100">
                        <TableHead className="font-semibold">Year</TableHead>
                        <TableHead className="text-right font-semibold">
                          Placement %
                        </TableHead>
                        <TableHead className="text-right font-semibold">
                          Average Salary
                        </TableHead>
                        <TableHead className="text-right font-semibold">
                          Highest Salary
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {college.placementData.map((data, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell className="font-semibold">
                            {data.year}
                          </TableCell>
                          <TableCell className="text-right">
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">
                              {data.placementPercentage}%
                            </span>
                          </TableCell>
                          <TableCell className="text-right font-medium">
                            {formatCurrency(data.averageSalary)}
                          </TableCell>
                          <TableCell className="text-right font-medium text-primary">
                            {formatCurrency(data.highestSalary)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Associated Companies Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Associated Companies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {college.associatedCompanies &&
              college.associatedCompanies.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {college.associatedCompanies.map((company, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg border border-gray-200 hover:border-primary hover:bg-blue-50 transition-all duration-300"
                    >
                      <div className="font-semibold text-center text-gray-800">
                        {company}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  No associated companies listed
                </p>
              )}

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-900">
                      Diverse Industry Partnerships
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                      The college maintains strong relationships with leading
                      companies across IT, Automotive, Finance, Manufacturing,
                      and other sectors, ensuring excellent placement
                      opportunities for graduates.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-lg p-6 border border-primary/20">
            <h3 className="text-2xl font-bold mb-2">Interested in this college?</h3>
            <p className="text-gray-600 mb-4">
              Get more information and connect with the admissions office
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                Request Information
              </Button>
              <Button variant="outline">Schedule Campus Visit</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ViewCollegeDetails;
