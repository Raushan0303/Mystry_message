// Page.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import posts from '@/posts.json';

const Page = () => {
  return (
    <div className="flex flex-col item-center justify-center border-r"> {/* Center the content horizontally */}
      <div className="flex justify-between">
        {/* Navbar */}
        <div className="w-1/4 p-4">
          <div className="mb-4">
            <div className="mb-2">Profile</div>
            <div>Settings</div>
          </div>
          {/* Other navbar items */}
        </div>
        {/* Make posts container scrollable */}
        {posts.map((data, index) => (
          <div key={index} className="w-[450px] ">
            <Card className="w-[400px]">
              <CardHeader>
                <CardTitle>{data.username}</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  {/* Post Image */}
                  <img src={data.imageUrl} alt="Post" /> {/* You should provide the actual image URL here */}
                  {/* Post Description */}
                  <div>
                    {data.description}
                  </div>
                  {/* Like and Comment Section */}
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Button>
                      <span>{data.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </Button>
                      <span>{data.comments}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
