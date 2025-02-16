import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

// Skeleton Loading Component
export const SkeletonLoading = () => (
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {[1, 2, 3].map((item) => (
      <Card key={item} className="animate-pulse">
        <div className="h-48 rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
        <CardHeader>
          <CardTitle>
            <div className="mb-4 h-6 rounded bg-gray-200 dark:bg-gray-700"></div>
          </CardTitle>
          <CardDescription>
            <div className="mb-2 h-4 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-6 h-4 rounded bg-gray-200 dark:bg-gray-700"></div>
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </CardFooter>
      </Card>
    ))}
  </div>
);
